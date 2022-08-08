import { useRouter } from 'next/router'
import { MouseEvent, ReactElement } from 'react'
import LayoutAccount from '../../../components/Layouts/layout-account'
import style from './style.module.css'
const AdminPanel = () => {


    const router = useRouter()
    return <>
        <p>Admin</p>

        <div>
            <form className={style._form} action="">
                <label >
                    <span>Category</span>
                    <select name="__category" id="">
                        <option value="">Men</option>
                        <option value="">Women</option>
                        <option value="">Kids</option>
                    </select>
                </label>
                <label >
                    <span>Product Name</span>
                    <textarea name="__name" id="" cols={30} rows={10} placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut numquam quia sequi natus ex corrupti?">

                    </textarea>
                </label>
                <label >
                    <span>Product Description</span>
                    <input type="text" name="__description" id="" />
                </label>
                <label >
                    <span>Metatags</span>
                    <div>
                        <span>color</span>
                        <input type="color" name="__color" id="" />
                    </div>
                    <div>
                        <span>quantity</span>
                        <input type="number" name="__quantity" id="" />
                    </div>
                    <div>
                        <span>size[s]</span>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Extra Small
                        </label>
                        <label >
                            <input type="checkbox" checked name="" id="" />
                            Small
                        </label>
                        <label >
                            <input type="checkbox" checked name="" id="" />
                            Medium
                        </label>
                        <label >
                            <input type="checkbox" checked name="" id="" />
                            Large
                        </label>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Extra Large
                        </label>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Free Size
                        </label>
                    </div>
                </label>
                <label >
                    Images
                    <input type="file" name="__image" id="" />
                </label>

                <button type="submit">Submit product</button>
                <button type="reset" onClick={(e: any) => {
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