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
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const notify = () => toast.info("Tính năng đang phát triển");

  const [listData, setListData] = useState([]);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    const reps = await axios({
      method: "get",
      url: "http://localhost:8069/get-all-real-estate",
    });
    setListData(reps?.data?.content || []);
  };

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

            <div className="col-span-1 a-custom" onClick={notify}>
              <div className="img-icon">
                <img src={img_timetAble} />
              </div>
              <div className="mt-3 text-sm">Đặt lịch</div>
            </div>

            <div className="col-span-1 a-custom">
              <a href="tel:0946144333">
                <div className="img-icon">
                  <img src={phone_call} />
                </div>
                <div className="mt-3 text-sm"> Gọi ngay</div>{" "}
              </a>
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
