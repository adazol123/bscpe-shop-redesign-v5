import { ReactElement, useState } from "react";
import ImageCropper from "../../../components/Layouts/Account/Admin/ImageCropper";
import LayoutAccount from "../../../components/Layouts/layout-account";

const Admin = () => {

  const [imageUrl, setImageUrl] = useState<string | null>(null)

  return <div>
    Admin
    {
      imageUrl && <img src={imageUrl} alt="toUpload" />
    }

    
  </div>;
};


Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAccount>
      <>{page}</>
    </LayoutAccount>
  );
};




export default Admin;
