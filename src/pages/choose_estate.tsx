import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text, Tabs } from "zmp-ui";

// Redux
import type { RootState } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { setEstate, pushEstate } from '../store/features/addestatebook/addEstateBookSlice'
import { useNavigate } from 'react-router-dom';

const ChooseEstate: React.FunctionComponent = (props) => {
  const navigate = useNavigate();

  // Redux
  const listEstate = useSelector((state: RootState) => state.estatebook.estate)
  const dispatch = useDispatch()

  const [listProject, setListProject] = useState([]);
  const [listLease, setListLease] = useState([]);
  const [listTransfer, setListTransfer] = useState([]);
  const [listChoose, setListChoose] = useState([]);
  // console.log(listProject);

  useEffect(() => {
    getDataProject();
    getDataLease();
    getDataTransfer();
  }, []);

  const getDataProject = async () => {
    const reps = await axios({
      method: "get",
      url: "http://localhost:8069/get-real-estate/project",
    });
    setListProject(reps?.data?.content || []);
  };

  const getDataLease = async () => {
    const reps = await axios({
      method: "get",
      url: "http://localhost:8069/get-real-estate/lease",
    });
    setListLease(reps?.data?.content || []);
  };

  const getDataTransfer = async () => {
    const reps = await axios({
      method: "get",
      url: "http://localhost:8069/get-real-estate/transfer",
    });
    setListTransfer(reps?.data?.content || []);
  };

  const addEstate = (item: any) => {
    // Kiểm tra xem item đã tồn tại trong listChoose chưa
    const isItemExists = listEstate?.some((chosenItem) => chosenItem.id === item.id);
  
    if (!isItemExists) {
      // dispatch(setEstate(item))


      // Nếu item không tồn tại, thêm item vào mảng listChoose
      // const newList: any = [...listChoose, item];
      // // Cập nhật mảng listChoose với giá trị mới
      // setListChoose(newList);
      dispatch(pushEstate(item));

    } 
  };

  const removeEstate = (itemToRemove) => {
    // Sử dụng filter() để tạo một mảng mới chỉ chứa các phần tử không có itemToRemove.id
    const updatedList:any = listEstate?.filter((item) => item.id !== itemToRemove.id);
  
    setListChoose(updatedList);
    dispatch(setEstate(updatedList))
  };
  
  
  console.log(listEstate);

  return (
    <Page className="page">
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Dự án">
          <div className="grid grid-cols-2 gap-4 mt-4">
          {listProject && Array.isArray(listProject) &&listProject?.map((item) => (
       
              <div key={item.id} className="col-span-1...">
                <div className="card-item">
                  <img
                    className="custom-img"
                    src={`data:image/png;base64,${item.image_path}`}
                  />

                  <p
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
                    {
                      listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className="bg-sky-600 text-white hover:bg-blue-500 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>removeEstate(item)}>
                        Đã chọn
                      </button>
                    }
                     {
                      !listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>addEstate(item)}>
                        Chọn
                      </button>
                    }
                  </p>
                  
                </div>
              </div>

          ))}
          
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Cho thuê">
          <div className="grid grid-cols-2 gap-4 mt-4">
          {listLease && Array.isArray(listLease) &&  listLease?.map((item) => (
  
              <div key={item.id} className="col-span-1...">
                <div className="card-item">
                  <img
                    className="custom-img"
                    src={`data:image/png;base64,${item.image_path}`}
                  />

                  <p
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
                    {
                      listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className="bg-sky-600 text-white hover:bg-blue-500 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>removeEstate(item)}>
                        Đã chọn
                      </button>
                    }
                     {
                      !listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>addEstate(item)}>
                        Chọn
                      </button>
                    }
                  </p>
                </div>
              </div>
      
          ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab3" label="Chuyển nhượng">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {listTransfer && Array.isArray(listTransfer) && listTransfer && listTransfer?.map((item) => (
            
              <div key={item.id} className="col-span-1...">
                <div className="card-item">
                  <img
                    className="custom-img"
                    src={`data:image/png;base64,${item.image_path}`}
                  />

                  <p
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
                    {
                      listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className="bg-blue-500 hover:bg-blue-500 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>removeEstate(item)}>
                        Đã chọn
                      </button>
                    }
                     {
                      !listEstate?.some((chosenItem) => chosenItem.id === item.id) &&
                      <button className=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 mt-2 border border-blue-500 hover:border-transparent rounded w-full" onClick={()=>addEstate(item)}>
                        Chọn
                      </button>
                    }
                  </p>
                </div>
              </div>
      
          ))}
          </div>
        </Tabs.Tab>
      </Tabs>

        {
          listEstate?.length > 0 &&
          <div className="button-continue"  onClick={() => {navigate(-1)} }><span>{listEstate.length} dịch vụ - 8.000.000 đ</span> <span className="float-right font-medium" >Tiếp tục</span></div>

        }


    </Page>
  );
};

export default ChooseEstate;
