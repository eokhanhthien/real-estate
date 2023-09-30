import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button, Page, Text, useNavigate, Tabs } from "zmp-ui";

const ViewRealEstate: React.FunctionComponent = (props) => {
  const navigate = useNavigate();

  const [listProject, setListProject] = useState([]);
  const [listLease, setListLease] = useState([]);
  const [listTransfer, setListTransfer] = useState([]);
  console.log(listProject);

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
  
  return (
    <Page className="page">
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Dự án">
          <div className="grid grid-cols-2 gap-4 mt-4">
          {listProject && Array.isArray(listProject) &&listProject?.map((item) => (
            <Link key={item.id} to={`/detail-real-estate/${item.id}`}>
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
          ))}
          
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Cho thuê">
          <div className="grid grid-cols-2 gap-4 mt-4">
          {listLease && Array.isArray(listLease) &&  listLease?.map((item) => (
            <Link key={item.id} to={`/detail-real-estate/${item.id}`}>
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
          ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab3" label="Chuyển nhượng">
        <div className="grid grid-cols-2 gap-4 mt-4">
          {listTransfer && Array.isArray(listTransfer) && listTransfer && listTransfer?.map((item) => (
            <Link key={item.id} to={`/detail-real-estate/${item.id}`}>
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
          ))}
          </div>
        </Tabs.Tab>
      </Tabs>


    </Page>
  );
};

export default ViewRealEstate;
