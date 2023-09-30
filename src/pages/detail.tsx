import React, { useEffect, useState } from "react";
import { Swiper } from "zmp-ui";
import {
  AiFillPhone,
  AiTwotoneCalendar,
  AiFillWechat,
  AiOutlineCheck,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import reale_state_data from "../reale_state_data.json";
import axios from "axios";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

const detail: React.FunctionComponent = (props) => {
  let { id } = useParams();
  // const convert = parseInt(id,10);

  const [data, setData] = useState<any>(null);

  console.log(id);

  const [listData, setListData] = useState([]);
  console.log(listData);

  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    const reps = await axios({
      method: "get",
      url: `http://localhost:8069/get-real-estate/${id}`,
    });
    setListData(reps?.data?.content || []);
  };

  const getData = () => {
    let data: any = reale_state_data.data.find((e: any) => (e.id = id));
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="p-2 br-white">
        <Swiper autoplay duration={4000} loop>
        <Swiper.Slide>
            <img
              className="slide-img"
              src={`data:image/png;base64,${listData?.image_path}`}
              alt="slide-3"
            />
          </Swiper.Slide>
          
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://prohome.com.vn/wp-content/uploads/2022/08/cho-thue-nha-nguyen-can-can-tho-moi-100-kdc-hong-loan-cai-rang-8.jpg"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://prohome.com.vn/wp-content/uploads/2022/08/cho-thue-nha-nguyen-can-can-tho-moi-100-kdc-hong-loan-cai-rang-7.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>

        </Swiper>
      </div>
      <div className="section-container-detail">
        <div className="">
          <strong className="page-title ">{listData?.name || ""}</strong>
          <p className="card-text font-normal text-green-700 dark:text-green-400">
            {listData?.price && listData.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5 text-center">
            <div className="col-span-1">
              <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-500 rounded w-full">
                <a href="tel:0946144333">
                  <AiFillPhone className="icon" /> Gọi ngay{" "}
                </a>
              </button>
            </div>

            <div className="col-span-1">
              <TERipple rippleColor="white">
                <button
                  className="bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 border border-yellow-500 rounded w-full"
                  onClick={() => setShowModal(true)}
                >
                  <AiTwotoneCalendar className="icon" /> Đặt lịch
                </button>
              </TERipple>
            </div>

            <div className="col-span-2">
              <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 border border-red-500 rounded w-full">
                <AiFillWechat className="icon" /> Chat với RealEstate
              </button>
            </div>
          </div>

          <div className="mt-6 mb-3">
            {" "}
            <strong>Chi tiết dự án</strong>{" "}
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="col-span-1 title-detail">
              <p>Địa chỉ: </p>
            </div>
            <div className="col-span-2">
              <p className="mb-2">{listData?.address || ""}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="col-span-1 title-detail">
              <p>Chiều dài: </p>
            </div>
            <div className="col-span-2">
              <p className="mb-2">{listData?.long || ""} m</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="col-span-1 title-detail">
              <p>Chiều rộng: </p>
            </div>
            <div className="col-span-2">
              <p className="mb-2">{listData?.width || ""} m</p>
            </div>
          </div>

          <div
            className="content-detail"
            dangerouslySetInnerHTML={{ __html: listData?.description }}
          />

          {/* <!--Small modal-->*/}
          <TEModal show={showModal} setShow={setShowModal}>
         
              <TEModalDialog >
                <TEModalContent>
                  <TEModalHeader>
                    {/* <!--Modal title--> */}
                    <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                      Đặt lịch
                    </h5>
                    {/* <!--Close button--> */}
                    <button
                      type="button"
                      className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </TEModalHeader>
                  {/* <!--Modal body--> */}
                  <TEModalBody>
                    <div>Chọn địa điểm</div>
                  </TEModalBody>
                </TEModalContent>
              </TEModalDialog>

          </TEModal>
        </div>
      </div>
    </>
  );
};

export default detail;
