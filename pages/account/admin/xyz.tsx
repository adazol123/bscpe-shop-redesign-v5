import { useRouter } from 'next/router'
import React, { MouseEvent, ReactElement, useCallback, useState } from 'react'
import LayoutAccount from '../../../components/Layouts/layout-account'
import { UserAuth } from '../../../utils/context/Account/Auth'
import { ToggleState } from '../../../utils/context/Toggles/ToggleState'
import { ProductListTypes } from '../../../utils/lib/createNewProduct'
import uploadProductToFirebase from '../../../utils/lib/uploadProductToFirebase'
import { ProductItemTypes } from '../../../utils/types/productTypes'
import style from './style.module.css'
import { ImageType } from '../../../utils/lib/uploadProductToFirebase';

/**
 * @description Product item types
 */


const AdminPanel = () => {
    /**
     * @description context states
     */
    let { user } = UserAuth()
    let { toggleState, toggleStateHandler } = ToggleState()

    /**
     * @description next router
     */
    const router = useRouter()



    /**
     * @description Local product state
     */
    let [productItem, setProductItem] = useState<ProductListTypes>({
        'ownerID': user?.displayName,
        'name': undefined,
        'description': undefined,
        'category': 'men',
        'metatags': {
            'type':
            {
                'color': undefined,
                'quantity': 0,
            }
            ,
            'price': 0,
            'sizes': [],
            'images': undefined
        }

    })

    let [imageToUpload, setImageToUpload] = useState<Partial<ImageType>>({
        image_name: undefined,
        image_url: undefined
    })


    /**
     * @description products input event handler
     */
    let handleChange = <InputType extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,>(event: React.ChangeEvent<InputType>) => {
        let name = event.target.name
        let value = event.target.value
        setProductItem(values => ({ ...values, [name]: value.trim() }))

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
            setProductItem(values => values = {
                ...values,
                metatags: {
                    ...values.metatags,
                    sizes: [
                        ...values.metatags!.sizes!,
                        size.value.trim()
                    ]
                }
            })
        } else {
            /** 
            * @description remove selected size[s] from productsItem object > size array
            */
            setProductItem(values => values = {
                ...values,
                metatags: {
                    ...values.metatags,
                    sizes: values.metatags!.sizes!.filter(toremove => toremove.indexOf(size.value))
                }
            })

        }


    }




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

    let handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files) {
            let value = event.target.files[0];

            setImageToUpload({
                image_url: URL.createObjectURL(value),
                image_name: value.name
            })
        }


    }

    let handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            
            uploadProductToFirebase(productItem, imageToUpload, )
            console.log('uploading...')
        } catch (error: any) {
            console.error(error.message)
        }
    }

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
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label >
                    <span>Product Description</span>
                    <textarea name="description" rows={5} placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut numquam quia sequi natus ex corrupti?" onChange={handleChange}>

                    </textarea>
                </label>
                <div >
                    <span>Metatags</span>
                    <div className={style._submetatagstags}>
                        <span>color[1]</span>
                        <input type="color" name="color" />
                        <label>
                            <input type="text" name="color_name" />
                        </label>
                        <label>
                            <span>quantity</span>
                            <input type="number" name="quantity" onChange={handleChange} />
                        </label>
                    </div>
                    <div className={style._submetatagstags}>
                        <span>color[2] </span>
                        <input type="color" name="color" />
                        <label>
                            <input type="text" name="color_name" />
                        </label>
                        <label>
                            <span>quantity</span>
                            <input type="number" name="quantity" onChange={handleChange} />
                        </label>
                    </div>
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
                <label >
                    Images
                    <input type="file" name="__image" onChange={handleImageChange} />
                </label>

                <button type="submit" onClick={
                    (e: MouseEvent) => {
                        e.preventDefault()
                        try {
                            if (productItem.name === '' || typeof (productItem.name) === 'undefined') throw new Error('Product name is missing')
                            if (productItem!.name?.match(/^\s*$/g)) throw new Error('Product name cannot be empty')

                            if (productItem.description === '' || typeof (productItem.description) === 'undefined') throw new Error('Product description/details is missing')
                            if (productItem!.description?.match(/^\s*$/g)) throw new Error('Product description cannot be empty')

                            if (productItem!.category?.match(/^\s*$/g)) throw new Error('Product name is missing')

                            if (productItem.metatags?.sizes?.length! === 0) throw new Error('Atleast one (1) selected size[s] is required')

                            console.log(productItem)
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