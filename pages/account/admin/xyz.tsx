import { useRouter } from 'next/router'
import React, { MouseEvent, ReactElement, useCallback, useEffect, useReducer, useState } from 'react'
import LayoutAccount from '../../../components/Layouts/layout-account'
import { UserAuth } from '../../../utils/context/Account/Auth'
import { ToggleState } from '../../../utils/context/Toggles/ToggleState'
import { createNewProduct, ProductListTypes } from '../../../utils/lib/createNewProduct'
import uploadProductToFirebase from '../../../utils/lib/uploadProductToFirebase'
import style from './style.module.css'
import { ImageType } from '../../../utils/lib/uploadProductToFirebase';
import { PlusIcon } from '@heroicons/react/outline'
import ImageCropper from '../../../components/Layouts/Account/Admin/ImageCropper'
import getCroppedImg from '../../../utils/services/cropImage'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '../../../auth/firebase'
import uploadProductReducer, { initialProductListState } from '../../../utils/context/Product/uploadProductReducer'
import ButtonStandard from '../../../components/UI/Button/Standard/ButtonStandard'

/**
 * @description Product item types
 */



type TInput = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const AdminPanel = () => {
    /**
     * @description context states
     */
    let { user } = UserAuth()


    /**
     * @description next router
     */
    const router = useRouter()
    /**
     * @description Local product state
     */
    const [state, dispatch] = useReducer(uploadProductReducer, initialProductListState);

    /**
     * @description products input event handler
     */
    let handleChange = <InputType extends TInput,>(event: React.ChangeEvent<InputType>) => {
        dispatch({
            type: 'FIELD',
            field: event.target.name,
            payload: event.target.value.trim()
        })
    }

    let sizeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, size: {
        id: number;
        value: string;
        isChecked: boolean;
    }) => {

        size.isChecked = e.target.checked
        setSizes([...sizes])
        if (e.target.checked) {
            /**
             * @description add selected size[s] to productsItem object > size array
             */
            if (state.metatags?.sizes) {
                dispatch({
                    type: 'METATAGS',
                    field: 'sizes',
                    payload: [...state.metatags.sizes, size.value]
                })
            }

        } else {
            /** 
            * @description remove selected size[s] from productsItem object > size array
            */
            if (state.metatags?.sizes) {
                dispatch({
                    type: 'METATAGS',
                    field: 'sizes',
                    payload: state.metatags.sizes.filter(toremove => toremove.indexOf(size.value))
                })

            }

        }


    }

    let metaTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'TYPES',
            field: event.target.name,
            payload: event.target.value.trim()
        })

    }


    useEffect(() => {
        if (user?.uid) {
            console.log('dispatching owner')
            dispatch({
                type: 'FIELD',
                field: 'ownerID',
                payload: user.uid
            })
        }
    }, [user?.uid])

    useEffect(() => {
        if (state.metatags?.images) {
            console.log('effect on images...', state)
            createNewProduct(state as ProductListTypes)
        }

        return () => {
            dispatch({
                type: "clear",
                field: 'all',
                payload: null
            })
            sizes.forEach(size => size.isChecked = false)
            setImageUrl({
                image_blob: undefined,
                image_blob_url: undefined
            })
        }
    }, [state.metatags?.images])

    let [sizes, setSizes] = useState([
        {
            id: 1,
            value: 'extra-small',
            isChecked: false
        },
        {
            id: 2,
            value: 'small',
            isChecked: false
        },
        {
            id: 3,
            value: 'medium',
            isChecked: false
        },
        {
            id: 4,
            value: 'large',
            isChecked: false
        },
        {
            id: 5,
            value: 'extra-large',
            isChecked: false
        },
        {
            id: 6,
            value: 'free-size',
            isChecked: false
        },
    ])



    let handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        if (state.name && state.ownerID && imageUrl.image_blob) {


            const storageRef = ref(
                storage,
                `products/${state.ownerID}-${state.name.split(/\s/g).join("-")}`
            );


            try {
                let upload = await uploadBytes(storageRef, imageUrl.image_blob, {
                    contentType: 'image/jpeg'
                })
                console.log(upload)
                let generated_image_url = await getDownloadURL(storageRef)
                if (generated_image_url) {
                    console.log('url >', generated_image_url)

                    dispatch({
                        type: 'METATAGS',
                        field: 'images',
                        payload: generated_image_url.toString()
                    })
                }




                // uploadProductToFirebase(state, imageToUpload,)
            } catch (error: any) {
                console.error(error.code)

            }
        }
    }

    // console.log(user)
    const [imageUrl, setImageUrl] = useState<Partial<{
        image_blob_url: string,
        image_blob: Blob
    }>>({
        image_blob_url: undefined,
        image_blob: undefined
    })
    const [toggleImageUpload, setToggleImageUpload] = useState(false)



    return <>
        <p>Admin</p>

        <div>
            <form className={style._form} onSubmit={async (event: React.FormEvent) => await handleSubmit(event)}>
                <label >
                    <span>Category</span>
                    <select name="category" onChange={handleChange}>
                        <option value='men' >Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </label>
                <label >
                    <span>Product Name</span>
                    <input type="text" name="name" value={state.name} onChange={handleChange} />
                </label>
                <label >
                    <span>Product Description</span>
                    <textarea name="description" rows={5} placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut numquam quia sequi natus ex corrupti?" value={state.description} onChange={handleChange}>

                    </textarea>
                </label>
                <div >
                    <span>Metatags</span>
                    <div className={style._submetatagstags}>
                        <span>color[1]</span>
                        <input type="color" name="color_value" value={state.metatags?.types?.color_value} onChange={metaTypeHandler} />
                        <label>
                            <input type="text" name="color" value={state.metatags?.types?.color} onChange={metaTypeHandler} />
                        </label>
                        <label>
                            <span>quantity</span>
                            <input type="number" name="quantity" value={state.metatags?.types?.quantity} onChange={metaTypeHandler} />
                        </label>
                    </div>
                    <div className={style._submetatagstags}>
                        <span>color[2] </span>
                        <input type="color" name="color" disabled />
                        <label>
                            <input type="text" name="color_name" disabled />
                        </label>
                        <label>
                            <span>quantity</span>
                            <input type="number" name="quantity" disabled onChange={handleChange} />
                        </label>
                    </div>
                    <label>
                        <span>price</span>
                        <input type="number" name="price" value={state.metatags?.price} onChange={(event) => dispatch({
                            type: 'METATAGS',
                            field: 'price',
                            payload: +event.target.value
                        })} />
                    </label>
                    <div className={style._size_metatags}>
                        <span>Size[s]</span>
                        <>
                            {
                                sizes.map((size) => {
                                    return (
                                        <label key={size.id}>
                                            <input type="checkbox" name={size.value} checked={size.isChecked} onChange={(event) => sizeChangeHandler(event, size)
                                            } />
                                            {size.value}

                                        </label>
                                    )
                                })
                            }
                        </>

                    </div>
                </div>
                <div className='relative grid place-content-center border border-dashed border-black rounded-md overflow-hidden w-56 h-64' onClick={() => setToggleImageUpload(!toggleImageUpload)}>

                    {
                        imageUrl.image_blob_url ?
                            <>
                                <img src={imageUrl.image_blob_url} className=' h-full object-contain' alt="toUpload" />
                                <span className='absolute inset-0 grid place-content-center text-white bg-black/30'>Edit Image</span>

                            </>
                            :
                            <span className='inline-flex items-center gap-4'> <PlusIcon /> Add Image Product</span>
                    }
                </div>

                {!state.metatags?.images ? <span className='text-xs'>image not sync on cloud</span> : <span className='text-xs'>image synched on cloud</span>}


                <button type="submit" onClick={
                    (e: MouseEvent) => {
                        e.preventDefault()
                        try {
                            if (state.name === '' || typeof (state.name) === 'undefined') throw new Error('Product name is missing')
                            if (state!.name?.match(/^\s*$/g)) throw new Error('Product name cannot be empty')

                            if (state.description === '' || typeof (state.description) === 'undefined') throw new Error('Product description/details is missing')
                            if (state!.description?.match(/^\s*$/g)) throw new Error('Product description cannot be empty')

                            if (state!.category?.match(/^\s*$/g)) throw new Error('Product name is missing')

                            if (state.metatags?.sizes?.length! === 0) throw new Error('Atleast one (1) selected size[s] is required')

                            console.log(user?.displayName)
                            handleSubmit(e)

                        } catch (error: any) {
                            console.error(error.message)
                        }
                    }
                }>Submit product</button>
                <button type="reset" onClick={(e: MouseEvent) => {
                    e.preventDefault()
                    router.back()
                }}>Cancel</button>
            </form>
            <ImageCropper toggle={toggleImageUpload} toggleHandler={() => setToggleImageUpload(!toggleImageUpload)} setImageUrl={setImageUrl} />
        </div>
    </>
}

AdminPanel.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutAccount>
            <>{page}</>
        </LayoutAccount>
    );
};


export default AdminPanel