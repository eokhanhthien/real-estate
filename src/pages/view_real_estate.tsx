import React, { useEffect, useState } from "react";
import { Sheet, Button, Page, Text, useNavigate } from "zmp-ui";
import reale_state_data from "../reale_state_data.json";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewRealEstate: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  // console.log(reale_state_data);

  const [listData, setListData] = useState([]);
  console.log(listData);

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
    <Page className="page">
      <div className="text-blue-500 page-title">Dự án nổi bật</div>

      <div className="grid grid-cols-2 gap-4">
        {listData?.map((item) => (
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
      <div className="mb-8"></div>
      <div>
        {/* <Button
          variant="secondary"
          fullWidth
          onClick={() => {
            navigate(-1);
          }}
        >
          Trở lại
        </Button> */}
      </div>
    </Page>
  );
};

export default ViewRealEstate;
