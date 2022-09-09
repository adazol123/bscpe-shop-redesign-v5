import { ChevronRightIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'
import ButtonStyled from '../../../UI/Button/Styled/ButtonStyled'

type Props = {}

const ShippingDetails = (props: Props) => {
    return (
        <div>
            <h4>Shipping details</h4>
            <div className='flex flex-col gap-2 bg-white rounded-md max-h-96 overflow-y-auto'>
                <div className='flex w-full justify-between items-center p-4 gap-4'>
                    <div className="flex gap-4 items-center text-xs">

                        <LocationMarkerIcon className='w-6 h-6' />
                        <div>
                            <p className='text-xs'>Shipping address</p>
                            <span className='line-clamp-1'>Camp Bagong Diwa, Taguig City, Philippines</span>
                        </div>
                    </div>
                    <ChevronRightIcon className='w-6 h-6' />
                </div>
                <div className='flex w-full justify-between items-center p-4 gap-4'>
                    <div className="flex gap-4 items-center text-xs">

                        <LocationMarkerIcon className='w-6 h-6' />
                        <div>
                            <p className='text-xs'>Shipping address</p>
                            <span className='line-clamp-1'>Taguig City, Philippines</span>
                        </div>
                    </div>
                    <ChevronRightIcon className='w-6 h-6' />
                </div>
                <div className='flex w-full justify-between items-center p-4 gap-4'>
                    <div className="flex gap-4 items-center text-xs">

                        <LocationMarkerIcon className='w-6 h-6' />
                        <div>
                            <p className='text-xs'>Shipping address</p>
                            <span className='line-clamp-1'>Taguig City, Philippines</span>
                        </div>
                    </div>
                    <ChevronRightIcon className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}
export default ShippingDetails