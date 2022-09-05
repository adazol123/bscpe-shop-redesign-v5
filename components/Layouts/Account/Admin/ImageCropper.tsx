import React, { Dispatch, LegacyRef, MutableRefObject, RefObject, SetStateAction } from 'react'
import ModalFull from '../../../UI/Modals/Full/ModalFull'
import Cropper, { Area } from 'react-easy-crop'
import { ImageType } from '../../../../utils/lib/uploadProductToFirebase';
import ModalMobile from '../../../UI/Modals/Mobile/ModalMobile';
import ButtonStandard from '../../../UI/Button/Standard/ButtonStandard';
import { UploadIcon } from '@heroicons/react/outline';

import imageToBlobUrl from './../../../../utils/lib/imageToBlobUrl';
import getCroppedImg, { getCroppedImgAsBlog } from '../../../../utils/services/cropImage';
import { ref, uploadBytes } from 'firebase/storage';
import { db } from '../../../../auth/firebase';
import { getDownloadURL } from 'firebase/storage';
import { useAppSelector } from '../../../../utils/app/hook';
import { selectCurrentuser } from '../../../../features/user/user-auth-slice';


const ImageCropper = ({ setImageUrl, toggle, toggleHandler }: { setImageUrl: Dispatch<SetStateAction<Partial<{ image_blob_url: string; image_blob: Blob; }>>>, toggle: boolean, toggleHandler: () => void }) => {
    const user = useAppSelector(selectCurrentuser)


    const [imageToUpload, setImageToUpload] = React.useState<Partial<{
        image_name: string,
        image_url: string
    }>>({
        image_name: undefined,
        image_url: undefined
    })

    //image cropper config
    const CROP_AREA_ASPECT = 3 / 4;
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const [croppedArea, setCroppedArea] = React.useState<Area | null>(null);

    /**
     * 
     * @param _  cropped image area by percentage `(unused)`
     * @param croppedAreaPixels  cropped image area by pixels
     */
    const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
        setCroppedArea(croppedAreaPixels);
    };

    let [uploading, setUploading] = React.useState(false)
    const imageRef = React.useRef({}) as RefObject<HTMLInputElement>



    const triggerFile = () => imageRef.current!.click()

    const onSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files.length > 0) {

            /**
             * blob:url format
             */
            let name = event.target.files ? event.target.files[0].name : event.target.files

            const blob_url = imageToBlobUrl(event.target.files[0])

            setImageToUpload({
                image_name: name,
                image_url: (blob_url)?.toString()
            })
        }
    }

    const onSaveImage = async (e: React.FormEvent) => {
        setUploading(true)
        e.preventDefault()
        if (imageToUpload.image_url
            && imageToUpload.image_name
            && user
            && croppedArea) {
            try {
                const cropperImage = await getCroppedImg(imageToUpload.image_url as string, croppedArea) as Blob




                // await uploadBytes(storageRef, cropperImage, {
                //     contentType: 'image/jpeg'
                // })

                // let generated_image_url = await getDownloadURL(storageRef)
                const cropperImageAsBlogURL = await getCroppedImgAsBlog(imageToUpload.image_url as string, croppedArea) as string
                setImageUrl({
                    image_blob_url: cropperImageAsBlogURL.toString(),
                    image_blob: cropperImage
                })
                console.log(cropperImage)
                console.log(cropperImageAsBlogURL)

                toggleHandler()
                setUploading(false)
            } catch (error) {

            }

        }



    }


    return (
        <ModalMobile title='Image Cropper'

            icon={<UploadIcon />}
            state={toggle} toggleStateHandler={toggleHandler}>
            <>
                {imageToUpload?.image_url ? <div>
                    <div className='relative h-72 rounded-md overflow-hidden'>
                        <Cropper
                            image={imageToUpload?.image_url}
                            aspect={CROP_AREA_ASPECT}
                            crop={crop}
                            zoom={zoom}
                            zoomWithScroll
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            // cropSize={{ width: 100, height: 100 }}
                            objectFit={"auto-cover"}
                            onCropComplete={onCropComplete}

                        />

                    </div>
                    <input className='w-[calc(100%-4em)] my-4 mx-8' type="range" min={1} max={2} step={0.1} defaultValue={zoom} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setZoom(event.target.valueAsNumber)} />
                </div> : <div className='relative h-72 bg-black/5 rounded-md border border-dashed border-black/30 grid place-content-center'>
                    <span className='absolute inset-0 grid place-content-center' onClick={triggerFile}>Select image</span>
                </div>}

                <label>

                    <input hidden aria-hidden type="file" accept='image/*' ref={imageRef} onChange={onSelectedFile} />

                </label>
                {imageToUpload?.image_url && <div className='flex flex-col gap-2'>
                    <ButtonStandard className={'py-4'} onClick={onSaveImage}>{uploading ? 'Uploading...' : 'Save Changes'}</ButtonStandard>
                    <ButtonStandard className={'py-4'} styled='outline' onClick={triggerFile}>Change Image</ButtonStandard>
                </div>
                }
            </>
        </ModalMobile>
    )
}

export default ImageCropper