import React, { LegacyRef, MutableRefObject, RefObject } from 'react'
import ModalFull from '../../../UI/Modals/Full/ModalFull'
import Cropper, { Area } from 'react-easy-crop'
import { ImageType } from '../../../../utils/lib/uploadProductToFirebase';
import ModalMobile from '../../../UI/Modals/Mobile/ModalMobile';
import ButtonStandard from '../../../UI/Button/Standard/ButtonStandard';
import { UploadIcon } from '@heroicons/react/outline';
const ImageCropper = () => {


    //image cropper config
    const CROP_AREA_ASPECT = 7 / 9;
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const [croppedArea, setCroppedArea] = React.useState<Area | null>(null);

    const onCropComplete = (croppedAreaPixels: Area) => {
        setCroppedArea(croppedAreaPixels);
    };

    let [state, setState] = React.useState(true)
    const imageRef = React.useRef({}) as RefObject<HTMLInputElement>

    const [imageToUpload, setImageToUpload] = React.useState<{
        image_name?: string,
        image_url?: string
    }>({
        image_name: undefined,
        image_url: undefined
    })

    const triggerFile = () => imageRef.current!.click()

    const onSelectedFile = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader()
            /**
             * blob:url format
             */
            let name = event.target.files ? event.target.files[0].name : event.target.files
            const blob_url = URL.createObjectURL(event.target.files[0])
            setImageToUpload(prev => prev = {
                ...prev,
                image_name: name

            })
            /**
             * data:image;base64 format
             */
            setImageToUpload(prev => prev = {
                image_name: name,
                image_url: (blob_url)?.toString()

            })
            reader.readAsDataURL(event.target.files[0])
            reader.addEventListener('load', () => {
            })
            console.log(imageToUpload)
        }
    }

    return (
        <ModalMobile title='Image Cropper'

            icon={<UploadIcon />}
            state={state} toggleStateHandler={() => setState(!state)}>
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
                    <input type="range" min={1} max={2} step={0.1} defaultValue={zoom} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setZoom(event.target.valueAsNumber)} />
                </div> : <div className='relative h-72 bg-black/5 rounded-md border border-dashed border-black/30 grid place-content-center'>
                    <span className='absolute inset-0 grid place-content-center' onClick={triggerFile}>Upload new image</span>
                </div>}

                <label>

                    <input hidden aria-hidden type="file" accept='image/*' ref={imageRef} onChange={onSelectedFile} />

                </label>
                {imageToUpload?.image_url && <div className='flex flex-col gap-2'>
                    <ButtonStandard className={'py-4'} onClick={() => setImageToUpload({ image_name: undefined, image_url: undefined })}>Save Changes</ButtonStandard>
                    <ButtonStandard className={'py-4'} type='outline' onClick={triggerFile}>Change Image</ButtonStandard>
                </div>
                }
            </>
        </ModalMobile>
    )
}

export default ImageCropper