import React, { useState, useEffect } from "react";
import {
  List,
  Page,
  Icon,
  useNavigate,
  Text,
  Sheet,
  BottomNavigation,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";

import UserCard from "../components/user-card";
import Banner from "../components/home_page/banner";
import { ToastContainer, toast } from "react-toastify";

// Import ảnh
import img_realEsate from "/public/images/real-esate.png";
import img_estate from "/public/images/estate.png";
import img_timetAble from "/public/images/timetable.png";
import img_about from "/public/images/about.png";
import img_information from "/public/images/personal-information.png";
import phone_call from "/public/images/phone-call.png";
import breaking_news from "/public/images/breaking-news.png";
import zalo_chat from "/public/images/zalo-chat.png";
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { openPhone,openChat } from "zmp-sdk/apis";
import { requestSendNotification } from "zmp-sdk/apis";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const notify = () => toast.info("Tính năng đang phát triển");

  const [listData, setListData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const reps = await axios({
      method: "get",
      url: "http://localhost:8069/get-all-real-estate",
    });
    
    setListData(reps?.data?.content || []);
  };

  // const sendNotification = async () => {
  //   const apiUrl = 'https://openapi.mini.zalo.me/notification/template';
  
  //   const headers = {
  //     'X-Api-Key': 'Bearer yApv0T1nsntvkl81rd3L1Fwr_1dLTTu6_h7u530Pyn0hq6VG7G',
  //     'X-User-Id': '1229623464742690989',
  //     'X-MiniApp-Id': '277868317912768684',
  //     'Content-Type': 'application/json',
  //   };
  
  //   const requestData = {
  //     templateId: '00126fd75392bacce383',
  //     templateData: {
  //       buttonText: 'Xem chi tiết đơn hàng',
  //       buttonUrl: 'https://zalo.me/s/194839900003483517/',
  //       title: 'ZaUI Coffee - Xác nhận đơn hàng',
  //       contentTitle: 'Xác nhận đơn hàng',
  //       contentDescription: 'Chúng tôi đã nhận yêu cầu đặt hàng từ bạn. Thông tin chi tiết đơn hàng',
  //     },
  //   };
  
  //   try {
  //     const response = await axios.post(apiUrl, requestData, { headers });
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleCallButtonClick = () => {
    openPhone({
      phoneNumber: "+840946144333",
      success: () => {
        // xử lý khi gọi api thành công
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      }
    });


    // ------------------- test gửi thông báo -----------------------------
    // requestSendNotification({
    //   success: async () => {
    //     console.log("123")
    //     // sendNotification();
    //     // const reps = await axios({
    //     //   method: "get",
    //     //   url: "http://127.0.0.1:8000/api/get-index",
    //     // });
    //     // console.log(reps)
    //   },
    //   fail: (error) => {
    //     // xử lý khi gọi api thất bại
    //     console.log(error);
    //   }
    // });

  };

  
  const handleOpenMess = ()=>{
    openChat({
      type: 'oa',
      id: '510684095664027849',
      message: 'Xin Chào'
      // success: () => {},
      // fail: (err) => {}
    });
  }

  return (
    <>
    {/* <div className="container_info">
      <UserCard user={user.userInfo} />
    </div> */}

    <div className="pb-28 br-white">
      <div className="section-container">

        <Banner />
      </div>

      <div className="p-4">
        <div className="section-container box-shadow-custom">
          <div className="grid grid-cols-4 gap-4">
            <div
              className="col-span-1 a-custom"
              onClick={() => navigate("/view-real-estate")}
            >
              <div className="img-icon">
                <img src={img_realEsate} />
              </div>
              <div className="mt-3 text-sm">Dự án nổi bật</div>
            </div>

            <div
              className="col-span-1 a-custom"
              onClick={() => navigate("/category-real-estate")}
            >
              <div className="img-icon">
                <img src={img_estate} />
              </div>
              <div className="mt-3 text-sm">Tất cả dự án</div>
            </div>

            <div className="col-span-1 a-custom" 
            // onClick={notify}
            onClick={() => navigate("/book")}
            >
              <div className="img-icon">
                <img src={img_timetAble} />
              </div>
              <div className="mt-3 text-sm">Đặt lịch</div>
            </div>

            <div className="col-span-1 a-custom">
                <div className="img-icon"  onClick={() => handleCallButtonClick()}>
                  <img src={phone_call} />
                </div>
                <div className="mt-3 text-sm"> Gọi ngay</div>{" "}      
            </div>

            <div className="col-span-1 a-custom">
                <div className="img-icon"  onClick={() => handleOpenMess()}>
                  <img src={zalo_chat} />
                </div>
                <div className="mt-3 text-sm"> Nhắn tin</div>{" "}      
            </div>

            <div
              className="col-span-1 a-custom"
              onClick={() => navigate("/news")}
            >
              <div className="img-icon">
                <img src={breaking_news} />
              </div>
              <div className="mt-3 text-sm">Tin tức</div>
            </div>

            <div
              className="col-span-1 a-custom"
              onClick={() => navigate("/about")}
            >
              <div className="img-icon">
                <img src={img_about} />
              </div>
              <div className="mt-3 text-sm">Về chúng tôi</div>
            </div>

            <div
              className="col-span-1 a-custom"
              onClick={() => navigate("/user")}
            >
              <div className="img-icon">
                <img src={img_information} />
              </div>
              <div className="mt-3 text-sm">Thông tin của bạn</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 title-home-custom">
            <div className="">Bất động sản nổi bật</div>
          </div>

          <div className="col-span-1 title-home-custom-r">
            <div className="" onClick={() => navigate("/category-real-estate")}>
              Tất cả
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000, // Thời gian chuyển slide sau mỗi 4 giây
            disableOnInteraction: false, // Cho phép tự động chuyển slide sau khi người dùng tương tác với Swiper
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {listData?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/detail-real-estate/${item.id}`}>
                <div className="col-span-1...">
                  <div className="card-item">
                    <img
                      className="custom-img"
                      src={`data:image/png;base64,${item.image_path}`}
                    />

                    <a
                      href="#"
                      className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5
                        className="card-text mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                        style={{ height: "40px" }}
                      >
                        {item.name}
                      </h5>
                      <p className="card-text font-normal text-green-700 dark:text-green-400">
                        {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </p>
                      <p className="card-text font-normal text-gray-700 dark:text-gray-400">
                        {item.address}
                      </p>
                    </a>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default HomePage;
