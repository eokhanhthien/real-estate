import React, {useState} from "react";
import { Button, Page, Text, useNavigate, Tabs } from "zmp-ui";
import { getUserInfo } from "zmp-sdk/apis";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store/index'
import { getPhoneNumber } from "zmp-sdk";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { decrement, increment, setViewDate, setViewTime } from '../store/features/counter/counterSlice'
import { setEstate, pushEstate } from '../store/features/addestatebook/addEstateBookSlice'
import { requestSendNotification } from "zmp-sdk/apis";

const Book: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // Redux
  const countPeople = useSelector((state: RootState) => state.counter.value)
  const listEstate = useSelector((state: RootState) => state.estatebook.estate)
  const viewDate = useSelector((state: RootState) => state.counter.date)
  const viewTime = useSelector((state: RootState) => state.counter.time)

  const [info, setInfo] = useState('');
  const [idUser, setIdUser] = useState('');
  const [email, setEmailUser] = useState('');
  const [phoneNumber, setPhoneNumberUser] = useState('');
  const [note, setNoteUser] = useState('');
  // const name = useSelector((state: RootState) => state.counter.name)
  // const email = useSelector((state: RootState) => state.counter.email)
  // const phone = useSelector((state: RootState) => state.counter.phone)
  // const note = useSelector((state: RootState) => state.counter.note)

  getUserInfo({
    success: (data) => {
      // xử lý khi gọi api thành công
     const dataInfo = data.userInfo;
     setInfo(dataInfo.name)
     setIdUser(dataInfo.id)
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  });

  const setPhone = (e) => {
    setPhoneNumberUser(e.target.value)
  };
  const setEmail = (e) => {
    setEmailUser(e.target.value)
  };
  const setNote = (e) => {
    setNoteUser(e.target.value);
  };

  async function sendDataOrder(id,name,phone,note,people,list_estate,time,date) {
    try {
      // Tạo một đối tượng chứa dữ liệu form
      const formData = new FormData();
      formData.append('user_id', id); 
      formData.append('user_name', name);
      formData.append('phone_number', phone); 
      formData.append('note', note); 
      formData.append('number_taff', people); 
      formData.append('list_estate', list_estate);
      formData.append('time', time); 
      formData.append('date', date); 
  
      // Địa chỉ URL của API bạn muốn gọi
      const apiUrl = 'http://localhost:8069/create-invoice';
  
      // Gửi yêu cầu POST đến API với dữ liệu form và sử dụng await để đợi phản hồi
      const response = await axios.post(apiUrl, formData).then((response) => {
        // Sau khi API thành công, thực hiện chuyển hướng
        navigate("/");

        // Hiển thị toast thành công sau khi chuyển hướng thành công
        toast.success("Đặt lịch thành công", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        
      });
      // if(response.data.status == "ok"){
      //   navigate("/book");
        
      // }
      // Xử lý phản hồi từ API nếu cần
      console.log('Phản hồi từ API:', response.data);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi:', error);
    }
  }
  

  const submit = () =>{
    let arrID = [];
    listEstate.forEach(item => {
      arrID.push(item.id);
    });
    const listEstateJSON = JSON.stringify(arrID);
    // console.log(arrID);
    // console.log(idUser);
    // console.log(info,email,phoneNumber,note)
    // console.log(countPeople,viewTime,viewDate)

    requestSendNotification({
      success: async () => {
        sendDataOrder(idUser,info,phoneNumber,note,countPeople,listEstateJSON,viewTime,viewDate)
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      }
    });


  }

  return (
    <Page className="page">
      <p className="font-semibold text-lg">Thông tin người đặt</p>
      <div className="mb-3">
        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên</label>
        <input value={info} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
      </div>
      <div className="mb-3">
        <label for="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
        <input onChange={setPhone} type="text" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số điện thoại" required />
      </div>
      <div className="mb-3">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input  onChange={setEmail} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập email" required />
      </div>
      <div className="mb-3">    
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ghi chú ( nếu có )</label>
        <textarea  onChange={setNote}  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập ghi chú"></textarea>
      </div>



      {
      ( !email || !phoneNumber || !note ) &&
        <button className= "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded w-full" >
          Xác nhận
        </button> 
      }
      {
        email && phoneNumber && note &&
        <button onClick={submit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full button-book" >
          Xác nhận
        </button>
      }

    </Page>
  );
};

export default Book;
