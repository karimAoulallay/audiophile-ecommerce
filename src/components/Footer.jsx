import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="py-16 text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <Link to="/">
              <img src="/images/shared/logo.svg" alt="logo" />
            </Link>
          </div>
          <p className="mt-12 max-w-[700px] text-grayish-300">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="mt-12 flex flex-col items-center gap-12 sm:flex-row sm:justify-between">
            <p className="text-grayish-300">
              Copyright 2024. All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <a href="\">
                <img
                  src="/images/shared/desktop/icon-facebook.svg"
                  alt="facebook logo"
                />
              </a>
              <a href="\">
                <img
                  src="/images/shared/desktop/icon-twitter.svg"
                  alt="twitter logo"
                />
              </a>
              <a href="\">
                <img
                  src="/images/shared/desktop/icon-instagram.svg"
                  alt="instagram logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
