import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Page, Text, useNavigate, Tabs } from "zmp-ui";
import { getUserInfo } from "zmp-sdk/apis";
import { ToastContainer, toast } from "react-toastify";
import { getPhoneNumber } from "zmp-sdk/apis";

const Book: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const [listBook, setListBook] = useState([]);
  const [info, setInfo] = useState('');

  const today = new Date();
  // Lọc danh sách listBook và hiển thị các mục thỏa mãn điều kiện
  const currentList = listBook?.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate > today;
  });

  const dueList = listBook?.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate < today;
  });
  

  const getData = async (id) => {
    const reps = await axios({
      method: "get",
      url: `http://localhost:8069/get-invoices/${id}`,
    });
    
    setListBook(reps?.data?.content || []);

  };

  useEffect(() => {
    getUserInfo({
      success: async (data) => {
        // xử lý khi gọi api thành công
       const dataInfo = data.userInfo;
       getData(dataInfo.id);
       console.log(dataInfo);
     
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      }
    });
  }, []);

  console.log(listBook);
  
  const directGetPhone = () =>{

    getPhoneNumber({
      success: async (data) => {
        let { token } = data;
        navigate("/create-book")
      },
      fail: (error) => {
        // Xử lý khi gọi api thất bại
        console.log(error);
      }
    });
  }



  return (
    <Page className="page">
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Tất cả">
          <div className="text-blue-500 page-title mt-3"></div>
          
          {currentList?.map((item) => (
          <div className="mt-3 mb-3 block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Tên người đặt</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.user_name}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Ngày</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.date}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Thời gian</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.time}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Só điện thoại</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone_number}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Só người</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.number_taff}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Ghi chú</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.note}</p>
                  </div>
              </div>
          </div>
     ))}
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Lịch sử">
         {dueList?.map((item) => (
          <div className="mt-3 mb-3 block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Tên người đặt</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.user_name}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Ngày</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.date}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Thời gian</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.time}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Só điện thoại</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.phone_number}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Só người</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.number_taff}</p>
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1 ">
                  <span className="titlebook">Ghi chú</span>
                  </div>
                  <div className="col-span-1 ">
                  <p className="font-normal text-gray-700 dark:text-gray-400">{item.note}</p>
                  </div>
              </div>
          </div>
     ))}

        </Tabs.Tab>
  
      </Tabs>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full button-book"  onClick={() => directGetPhone()}>
        Tạo lịch hẹn mới
      </button>
    </Page>
  );
};

export default Book;
