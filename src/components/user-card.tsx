import React,{useState,useEffect} from "react";
import { GetUserInfoReturns } from "zmp-sdk";
import { Avatar, Box, Text,Button,useNavigate } from "zmp-ui";

interface UserProps {
  user: GetUserInfoReturns["userInfo"];
}
import { useLocation } from "react-router-dom";

import {
  AiOutlineLeft
} from "react-icons/ai";


const UserCard: React.FunctionComponent<UserProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState(true);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const location = useLocation();

  // Lấy ra đường dẫn hiện tại từ location.pathname
  const currentPath = location.pathname;

  useEffect(() => {

    if (currentPath == "/") {
      setActiveTab(true);
      setTitle('')
    }else if(currentPath == "/view-real-estate"){
      setTitle('Dự án')
      setActiveTab(false);
    }else if (currentPath.includes("/detail-real-estate/")) {
      // Có ít nhất một ký tự sau "/detail-real-estate/"
      setTitle('Chi tiết');
      setActiveTab(false);    
    }
    else if(currentPath == "/user"){
      setTitle('Thông tin')
      setActiveTab(false);
    }
    else if(currentPath == "/news"){
      setTitle('Tin tức')
      setActiveTab(false);
    }else if(currentPath == "/about"){
      setTitle('Về chúng tôi')
      setActiveTab(false);
    }else if(currentPath == "/category-real-estate"){
      setTitle('Tất cả dự án')
      setActiveTab(false);
    }
    else {
      setActiveTab(false);
    }
    
  }, [currentPath]);


  // Bây giờ bạn có thể sử dụng currentPath trong component của bạn
  // Ví dụ: in ra đường dẫn hiện tại
  console.log("Đường dẫn hiện tại:", currentPath);

  return (
    <Box flex>
      {activeTab &&
          <Avatar
          story="default"
          online
          src={user.avatar.startsWith("http") ? user.avatar : undefined}
        >
          {user.avatar}
        </Avatar>
      }
      {activeTab &&
            <Box ml={4}>
              <Text.Title>{user.name}</Text.Title>
              <Text>{user.id}</Text>
            </Box>
        }

        {!activeTab &&
        <>
        <AiOutlineLeft className="icon-back" onClick={() => {
          navigate(-1);
        }}></AiOutlineLeft> <p className="title_topbar">{title}</p>
           </>
        }
    </Box>
  );
};

export default UserCard;
