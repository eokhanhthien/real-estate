import React,{ useEffect, useState }from "react";
import { Button, Page, Text, Tabs } from "zmp-ui";
// Import ảnh
import zalo_chat from "/public/images/zalo-chat.png";
import {
  AiOutlineCaretRight
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


// Redux
import type { RootState } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setViewDate, setViewTime } from '../store/features/counter/counterSlice'

const Book: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(null);

  // Redux
  const countPeople = useSelector((state: RootState) => state.counter.value)
  const listEstate = useSelector((state: RootState) => state.estatebook.estate)
  const viewDate = useSelector((state: RootState) => state.counter.date)
  const viewTime = useSelector((state: RootState) => state.counter.time)

  const dispatch = useDispatch()
  // console.log(listEstate)
  // Hàm để giảm giá trị đi 1 đơn vị
  const decreaseCount = () => {
    if (countPeople > 1) {
      dispatch(decrement(countPeople-1))
      console.log(countPeople); 
    }
  };

  const increaseCount = () => {
      dispatch(increment(countPeople+1))
      console.log(countPeople);
  };


  const changeDate = (e) => {
    dispatch(setViewDate(e.target.value))
  };
    
  const changeTime = (e) => {

    dispatch(setViewTime(e.target.value))

  };

  useEffect(() => {
  
  }, []); // Sử dụng mảng rỗng để useEffect chỉ chạy một lần sau khi component được tạo


  return (
    <>
    <img src='https://realplus.com.vn/uploads/news/2023_07/1_1.jpg' />
    <Page className="page">
      <div className="font-semibold	text-center">Số người</div>
      <div className="font-semibold	text-center flex flex-row justify-center mt-5" > 
      <button  className={`text-white font-bold button-cre-de text-xl ${ countPeople==1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}  onClick={decreaseCount}>
         -
      </button>
      <div className="number-cre-de"> {countPeople} </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold button-cre-de text-xl" onClick={increaseCount}>
        +
      </button>

      </div>

      <div className="mt-4">
        <p className="font-semibold text-lg">1. Chọn dịch vụ</p>
   
        <Link  to={`/choose-estate`}>
          <div className="buttton-create-book" >
            Chọn dịch vụ
            <AiOutlineCaretRight className="icon-book"></AiOutlineCaretRight>
          </div> 
        </Link>

        { listEstate && Array.isArray(listEstate) && listEstate?.map((item) => (
                      <div key={item.id} className="buttton-create-book mt-3" >
                      <div className="grid grid-cols-6 gap-4">
                        <div
                          className="col-span-1 a-custom"
                          // onClick={() => navigate("/view-real-estate")}
                        >
                            <img className="img-book" src={`data:image/png;base64,${item.image_path}`} />
                        </div>
            
                        <div
                          className="col-span-3 a-custom card-text mb-2  tracking-tight text-gray-900 dark:text-white"
                          style={{ height: "40px" }}
                        >
                         {item.name}
                        </div>
            
                        <div
                          className="col-span-2 a-custom"
                          // onClick={() => navigate("/category-real-estate")}
                        >
                         {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </div>
                      </div>
                      </div> 
        ))}



      </div>

      <div className="mt-4">
        <p className="font-semibold text-lg">2. Chọn ngày giờ</p>
        <p className="title-book">Chọn ngày thực hiện</p>
   
        <input
            className="buttton-create-book w-full"
            type="date"
            name="dateRequired"
            min={new Date().toISOString().split("T")[0]} // Đặt ngày tối thiểu là ngày hiện tại
            value={viewDate || ''} 
            onChange={changeDate}
          />

           {/* <AiOutlineCaretRight className="icon-book"></AiOutlineCaretRight> */}
     
           <p className="title-book">Chọn thời gian bắt đầu</p>
           <input
              className="button-create-book w-full mt-4 mb-4"
              type="time"
              id="timePicker"
              name="timeRequired"
              value={viewTime || ''} 
              onChange={changeTime}
            />

        {/* <p className="title-book">Chọn thời gian bắt đầu</p>
        
          <div className="grid grid-cols-6 gap-4">
              <div
                className="col-span-1 a-custom hour"
                onClick={changeHour}
              >
              09:00
              </div>

              <div
                className="col-span-1 a-custom hour"
                // onClick={() => navigate("/view-real-estate")}
              >
              10:30
              </div>

              <div
                className="col-span-1 a-custom hour"
                // onClick={() => navigate("/view-real-estate")}
              >
              13:30
              </div>

            </div> */}
          </div>

      <div className="button-book">
        <div className="grid grid-cols-6 gap-4">
            <div
              className="col-span-1 a-custom"
              // onClick={() => navigate("/view-real-estate")}
            >
             <div className=""> <img className="img-chat" src={zalo_chat}></img> </div>
             
            </div>

            <div
              className="col-span-5 a-custom"
              // onClick={() => navigate("/category-real-estate")}
            >
              {
               ( !listEstate || !viewDate || !viewTime ) &&
                <button className= "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded w-full" >
                  Tiếp tục
                </button> 
              }
              {
                listEstate && viewDate && viewTime &&
                <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full" onClick={() => navigate("/info-book")}>
                  Tiếp tục
                </button> 
              }
              
              
            </div>

          </div>
      {/* <div className="flex flex-row justify-center " > 
        <div className="mr-5"> <img className="img-chat" src={zalo_chat}></img> </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full ">
          Tiếp tục
        </button>
      </div> */}
      </div>

    </Page>
    </>
  );
};

export default Book;


