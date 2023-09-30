import React from "react";
import { Sheet, Button, Page, Text, useNavigate } from "zmp-ui";

const AboutPage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div className="">
        <p>
          <strong>Ứng dụng cho thuê bất động sản</strong> là một nền tảng di
          động mạnh mẽ và thuận tiện cho thuê, mua và bán bất động sản như căn
          hộ, nhà ở, đất đai, văn phòng, cửa hàng, và nhiều loại tài sản khác.
          Ứng dụng này cung cấp một loạt các tính năng và dịch vụ để giúp người
          dùng tìm kiếm, so sánh, và thực hiện giao dịch bất động sản một cách
          dễ dàng và hiệu quả.
        </p>
        <img
          className="mt-3"
          src="https://cdnmedia.baotintuc.vn/Upload/GBzr0rzEkBb6ua36h4mJ9w/files/2021/09/7921bds2.jpg"
        ></img>
        <p className="mt-3">
          <strong>Thuê - cho thuê nhà phố</strong>: nhà mặt phố mang tính thương
          mại cao và thuận tiện cho người ở, tại Cần Thơ phải kể đến những tuyến
          đường “đắt giá" như đường 3 Tháng 2 (Ninh Kiều), Lê Hồng Phong (Bình
          Thủy), Võ Nguyên Giáp (Cái Răng), Tôn Đức Thắng (Ô Môn)
        </p>
        <p className="mt-3">
          <strong>Thuê - cho thuê nhà hẻm</strong>: Đối với sinh viên hay người
          lao động đến TPCT thì nhà hẻm là lựa chọn đầu tiên bởi giá thành thấp,
          yên tỉnh phù hợp để ở. Được lựa chọn nhiều nhất đều tập trung trên các
          tuyến đường Nguyễn Văn Cừ, Cách Mạng Tháng 8, Trần Chiên,...bởi có
          nhiều con hẻm và đường nhỏ đông dân cư đang sinh sống, một số ví dụ
          như: hẻm Liên tổ 3-4, đường Trần Nam Phú, đường Trần Quang Diệu,...
        </p>
        <p className="mt-3">
          <strong>Thuê - cho thuê biệt thự nghỉ dưỡng</strong>: Nói đến biệt thự
          sẽ nghĩ ngay đến những khu dành cho giới nhà giàu của vùng miền tây
          sông nước. Phải kể đến khu dân cư Nam Long, khu biệt thự Cồn Khương
        </p>
      </div>
    </Page>
  );
};

export default AboutPage;
