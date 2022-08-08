import { useRouter } from 'next/router'
import { MouseEvent, ReactElement, useState } from 'react'
import LayoutAccount from '../../../components/Layouts/layout-account'
import { UserAuth } from '../../../utils/context/Account/Auth'
import { ToggleState } from '../../../utils/context/Toggles/ToggleState'
import style from './style.module.css'

/**
 * @description Product item types
 */
interface ProductItemTypes {
    __name?: string,
    __description?: string,
    __owner: string,
    __category: 'men' | 'women' | 'kids',
    __meta?: {
        __colors?: [{
            __name?: string,
            __quantity: number,
        }
        ],
        __sizes?: string[]
    }
}


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
    let [productItem, setProductItem] = useState<ProductItemTypes>({
        '__name': undefined,
        '__description': undefined,
        '__owner': user?.displayName,
        '__category': 'men',
        '__meta': {
            '__colors': [
                {
                    '__name': undefined,
                    '__quantity': 0,
                }
            ],
            '__sizes': []
        }

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
                __meta: {
                    ...values.__meta,
                    __sizes: [
                        ...values.__meta!.__sizes!,
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
                __meta: {
                    ...values.__meta,
                    __sizes: values.__meta!.__sizes!.filter(toremove => toremove.indexOf(size.value))
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


    return <>
        <p>Admin</p>

        <div>
            <form className={style._form} action="">
                <label >
                    <span>Category</span>
                    <select name="__category" onChange={handleChange}>
                        <option value='men' >Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </label>
                <label >
                    <span>Product Name</span>
                    <input type="text" name="__name" onChange={handleChange} />
                </label>
                <label >
                    <span>Product Description</span>
                    <textarea name="__description" cols={30} rows={10} placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut numquam quia sequi natus ex corrupti?" onChange={handleChange}>

                    </textarea>
                </label>
                <label >
                    <span>Metatags</span>
                    <div>
                        <span>color</span>
                        <input type="color" name="__color" />
                    </div>
                    <div>
                        <span>quantity</span>
                        <input type="number" name="__quantity" onChange={handleChange} />
                    </div>
                    <div>
                        <span>size[s]</span>
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
                </label>
                <label >
                    Images
                    <input type="file" name="__image" />
                </label>

                <button type="submit" onClick={
                    (e: MouseEvent) => {
                        e.preventDefault()
                        try {
                            if (productItem.__name === '' || typeof (productItem.__name) === 'undefined') throw new Error('Product name is missing')

                            if (productItem!.__name?.match(/^\s*$/g)) throw new Error('Product name cannot be empty')

                            if (productItem!.__description?.match(/^\s*$/g)) throw new Error('Product description cannot be empty')

                            if (productItem!.__category?.match(/^\s*$/g)) throw new Error('Product name is missing')

                            if (productItem.__meta?.__sizes?.length! === 0) throw new Error('Atleast one (1) selected size[s] is required')

                            console.log(productItem)
                            console.log(sizes)
                            console.log(user?.displayName)

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