import React from "react";
import userInfoStyle from "./Userinfo.module.css";
const { headerContainer } = userInfoStyle;

export const UserInfo = ({ nameUserInfo }) => {
  return (
    <div>
      <div className={headerContainer}>
        <header>
          <div>
            <p>{nameUserInfo}</p>
          </div>
        </header>
      </div>
    </div>
  );
};
