import { createContext, useEffect, useState } from "react";
import refreshAccessToken from "../api/refreshAccessToken";
import getMe from "../api/getMe";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    // fetch token only at app loads
    if (!authUser?.accessToken) {
      getToken();
    }

    let tokenInterval;
    if (authUser?.accessToken) {
      // Set interval to call getInitialToken every 15 minutes if user is authenticated
      tokenInterval = setInterval(
        () => {
          getToken();
        },
        1000 * 60 * 15,
      );
    }

    // clean up function to prevent conflicts
    return () => {
      if (authUser?.accessToken) {
        clearInterval(tokenInterval);
      }
    };
  }, [authUser]);

  const getToken = async () => {
    try {
      const accessToken = await refreshAccessToken();
      const userData = await getMe(accessToken);

      setAuthUser(() => {
        return { ...userData, accessToken };
      });
    } catch (err) {
      console.log({ message: err.message });
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
