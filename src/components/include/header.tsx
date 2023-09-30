import React, { useEffect, useState } from "react";
import { Sheet, Button, Page, Text, useNavigate, Icon } from "zmp-ui";
import UserCard from "../../components/user-card"
import { useRecoilValue } from "recoil";
import { userState } from "../../state";

const Header: React.FunctionComponent = (props) => {
  const user = useRecoilValue(userState);

  return (
    <div className="container_info">
      <UserCard user={user.userInfo} />
    </div>
  );
};

export default Header;
