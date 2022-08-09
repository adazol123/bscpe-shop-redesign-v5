
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../auth/firebase";
import getCroppedImg from "../services/cropImage";
import { createNewProduct, ProductListTypes } from "./createNewProduct";

export interface ImageType {
  image_name: string;
  image_url: string;
}

const uploadProductToFirebase = async (
  product: ProductListTypes,
  image: Partial<ImageType>,
  croppedAreaPixels?: any
) => {
  const croppedImg = (await getCroppedImg(image.image_url!, croppedAreaPixels)) as
    | Blob
    | Uint8Array
    | ArrayBuffer;
  try {
    const storageRef = ref(
      storage,
      `products/${product.ownerID}-${image.image_name!.split(/\s/g).join("-")}`
    );

    /**
     * @description upload `cropped_image` to firebase storage bucket
     */
    await uploadBytes(storageRef, croppedImg, { contentType: "image/jpeg" });

    /**
     * @description `image_url` retrieve from firebase storage bucket
     */
    let image_url = await getDownloadURL(storageRef);
    await createNewProduct(product);
  } catch (error: any) {
    console.log("[upload_product_error] > ", error.message);
  }

  return
};

export default uploadProductToFirebase;
