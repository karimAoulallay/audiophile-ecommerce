import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ProfileDropdown from "./ProfileDropdown";

const ProfileButton = () => {
  const { authUser } = useContext(AuthContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = (_) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <button aria-expanded={isExpanded} onClick={toggleDropdown}>
        {authUser?.accessToken ? (
          <span className="grid aspect-square w-8 content-center rounded-full bg-grayish-100 font-bold uppercase duration-200 hover:bg-accent-200 hover:text-grayish-100">
            {authUser.name[0]}
          </span>
        ) : (
          <img src="/images/shared/profile-circled.svg" alt="profile icon" />
        )}
      </button>
      {isExpanded && <ProfileDropdown setIsExpanded={setIsExpanded} />}
    </div>
  );
};

export default ProfileButton;
