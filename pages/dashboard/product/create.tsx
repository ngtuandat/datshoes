import { ReactElement } from "react";
import ContentHeader from "../../../components/Header/ContentHeader";
import MainAdmin from "../../../components/Layouts/MainAdmin";
import ProductUpload from "../../../containers/Uploads/ProductUpload";

const Create = () => {
  return (
    <>
      <ContentHeader title="Thêm sản phẩm" name="Thêm một sản phẩm mới" />
      <ProductUpload />
    </>
  );
};
Create.getLayout = function getLayout(page: ReactElement) {
  return <MainAdmin>{page}</MainAdmin>;
};
export default Create;
