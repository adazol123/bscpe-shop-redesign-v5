import React, { Dispatch } from 'react'
import RadioButtonGroup from '../../UI/Button/RadioButtonGroup/RadioButtonGroup'
import style from './style.module.css'

interface Variants {
    selectedColorOption: string | undefined,
    setSelectedColorOption: Dispatch<string | undefined>,
    selectedSizeOption: string | undefined,
    setSelectedSizeOption: Dispatch<string | undefined>
}

const ProductVariants = ({
    selectedColorOption,
    selectedSizeOption,
    setSelectedColorOption,
    setSelectedSizeOption
}: Variants) => {
    return (
        <div>
            <span className={style.modal_mobile_subtitle}>Color: {selectedColorOption}</span>
            <ul className="flex gap-4 mt-3">
                <RadioButtonGroup
                    type="Color"
                    values={colors}
                    selectedOption={selectedColorOption}
                    setSelectedOption={setSelectedColorOption}
                />
            </ul>

            <span className={style.modal_mobile_subtitle}>Size: {selectedSizeOption}</span>
            <ul className="flex gap-3 mt-2">
                <RadioButtonGroup
                    type="Size"
                    values={size}
                    selectedOption={selectedSizeOption}
                    setSelectedOption={setSelectedSizeOption}
                />
            </ul>
        </div>
    )
}


export const colors = [
    {
        option: "red",
        label: "R",
        className: "w-3 h-3 rounded-full bg-rose-300/80",
        activeClass: "ring-2 ring-offset-4 ring-rose-600",
    },
    {
        option: "blue",
        label: "B",
        className: "w-3 h-3 rounded-full bg-blue-300/80",
        activeClass: "ring-2 ring-offset-4 ring-blue-600",
    },
    {
        option: "green",
        label: "G",
        className: "w-3 h-3 rounded-full bg-emerald-300/80 ",
        activeClass: "ring-2 ring-offset-4 ring-emerald-600",
    },
];

let sizeActiveClass = "ring-1 text-white bg-marine-500 ring-offset-1 ring-marine-500 text-[.65em]"
let sizeDefaultClass = "grid w-6 h-6 border rounded-sm place-items-center text-black border-marine-500/20 text-[.65em]"
export const size = [
    {
        option: "small",
        label: "S",
        className: sizeDefaultClass,
        activeClass: sizeActiveClass,
    },
    {
        option: "medium",
        label: "M",
        className: sizeDefaultClass,
        activeClass: sizeActiveClass,
    },
    {
        option: "large",
        label: "L",
        className: sizeDefaultClass,
        activeClass: sizeActiveClass,
    },
    {
        option: "extra-large",
        label: "XL",
        className: sizeDefaultClass,
        activeClass: sizeActiveClass,
    },
];

export default ProductVariants