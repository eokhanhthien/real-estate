import React from "react";
import { Button, Page, Text, useNavigate, Tabs } from "zmp-ui";

const ViewRealEstate: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Tất cả">
          <div className="text-blue-500 page-title mt-3">Tin tức nổi bật</div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/1")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://ngocchaua.vn/uploads/news/dau-tu-bat-dong-san-tiem-nang-sinh-loi-lon-28.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư Hồng Loan
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thoáng mát
                  </p>
                </a>
              </div>
            </div>

            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/2")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://canthoplus.com/wp-content/uploads/2020/01/mua-dat-quan-cai-rang-can-tho.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư Hoàng Quân
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thân thiện
                  </p>
                </a>
              </div>
            </div>

            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/1")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://canthoplus.com/wp-content/uploads/2020/01/mua-dat-quan-cai-rang-can-tho.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư 91B
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thoáng mát
                  </p>
                </a>
              </div>
            </div>

            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/1")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://s1.odt.vn/uploads/11-2020/46/galleries/khu-do-thi-moi-hung-phu-can-tho-16052660910.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư Hưng Phú
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thoáng mát
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Sự kiện">
          <div className="text-blue-500 page-title mt-3">Sự kiện nổi bật</div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/1")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://canthoplus.com/wp-content/uploads/2020/01/mua-dat-quan-cai-rang-can-tho.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư 91B
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thoáng mát
                  </p>
                </a>
              </div>
            </div>

            <div
              className="col-span-1..."
              onClick={() => navigate("/detail-real-estate/1")}
            >
              <div className="card-item">
                <img
                  className="custom-img"
                  src="https://s1.odt.vn/uploads/11-2020/46/galleries/khu-do-thi-moi-hung-phu-can-tho-16052660910.jpg"
                />
                <a
                  href="#"
                  className="border-card-bottom block max-w-sm p-5 bg-white border border-gray-200 shadow hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5
                    className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white"
                    style={{ height: "40px" }}
                  >
                    Khu dân cư Hưng Phú
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Môi trường sạch sẽ, thoáng mát
                  </p>
                </a>
              </div>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab key="tab3" label="Tin thị trường">
          <div className="text-blue-500 page-title mt-3">
            Khảo sát thị trường
          </div>
        </Tabs.Tab>
      </Tabs>


    </Page>
  );
};

export default ViewRealEstate;
