import React, { useState, useEffect } from "react";
import { Icon, useNavigate, BottomNavigation, Sheet } from "zmp-ui";
import { ToastContainer, toast } from "react-toastify";

const Bottomnavigation: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);

  useEffect(() => {
    // Đặt giá trị activeTab dựa trên pathname trong URLs
    if (location.pathname == "/") {
      setActiveTab("home");
    } else {
      setActiveTab("/");
    }
    // else if (location.pathname == "/user") {
    //   setActiveTab("me");
    // }
  }, [location.pathname]);

  const handleCallButtonClick = () => {
    // Sử dụng window.location.href để thay đổi URL sang URI tel:
    window.location.href = "tel:0946144333";
  };
  const notify = () => toast.info("Tính năng đang phát triển");
  return (
    <>
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
          onClick={() => notify()}
        />
        <BottomNavigation.Item
          label="Gọi ngay"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
          onClick={() => setActionSheetOpened(true)}
        />
        <BottomNavigation.Item
          label="Trang chủ"
          key="home"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home" />}
          onClick={() => navigate("/")}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Lịch sử"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
          onClick={() => notify()}
        />
        {/* <BottomNavigation.Item
      key="me"
      label="Cá nhân"
      icon={<Icon icon="zi-user" />}
      activeIcon={<Icon icon="zi-user-solid" />}
      onClick={() => navigate("/user")}
    /> */}
      </BottomNavigation>
      <Sheet.Actions
        visible={actionSheetOpened}
        onClose={() => setActionSheetOpened(false)}
        actions={[
          [
            {
              text: "Gọi ngay: 0946144333",
              close: false,
              onClick: handleCallButtonClick,
            },
          ],
          [
            {
              text: "Đóng",
              close: true,
              danger: true,
            },
          ],
        ]}
      ></Sheet.Actions>
      <ToastContainer />
    </>
  );
};

export default Bottomnavigation;
