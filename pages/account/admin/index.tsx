import { ReactElement, useReducer, useState } from "react";
import ImageCropper from "../../../components/Layouts/Account/Admin/ImageCropper";
import LayoutAccount from "../../../components/Layouts/layout-account";
import uploadProductReducer, { initialProductListState } from "../../../utils/context/Product/uploadProductReducer";
import { TypeJSX } from './../../../utils/context/Shop/ShopState';

const Admin = () => {

  const [state, dispatch] = useReducer(uploadProductReducer, initialProductListState);




  console.log(state)
  return <div>
    Admin

    <button className="px-2 py-2 mr-2 bg-black text-white" onClick={() => dispatch({ type: 'FIELD', field: 'name', payload: 'dan' })}>Upload field</button>
    <button className="px-2 py-2 mr-2 bg-black text-white" onClick={() => dispatch({ type: 'METATAGS', field: 'images', payload: 'https://123fdhjfjsdfhj' })}>Upload field</button>
    <button className="px-2 py-2 mr-2 bg-black text-wzhite" onClick={() => dispatch({ type: 'METATAGS', field: 'sizes', payload: ['small', 'large'] })}>Sizes</button>
    <button className="px-2 py-2 mr-2 bg-black text-white" onClick={() => dispatch({
      type: 'TYPES', field: 'quantity', payload: 123
    })}>Quantity</button>

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
