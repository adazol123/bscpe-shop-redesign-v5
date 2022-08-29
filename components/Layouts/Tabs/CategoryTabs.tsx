import React from 'react'
import ButtonTabs from '../../UI/Button/Tab/ButtonTabs'

const CategoryTabs = () => {
    return (
        <div className='container mx-6'>
            <ButtonTabs>Men</ButtonTabs>
            <ButtonTabs>Women</ButtonTabs>
            <ButtonTabs>Kids</ButtonTabs>
        </div>
    )
}

export default CategoryTabs