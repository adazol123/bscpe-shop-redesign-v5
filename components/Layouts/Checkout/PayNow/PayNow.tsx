import React from 'react'
import { ToggleState } from '../../../../utils/context/Toggles/ToggleState'
import ModalMobile from '../../../UI/Modals/Mobile/ModalMobile'
import VirtualCreditCard from '../../Account/VirtualCard/VirtualCreditCard'
import ShippingDetail from '../ShippingDetail';
import ButtonStandard from './../../../UI/Button/Standard/ButtonStandard';

const PayNow = () => {
    const { toggleState, toggleStateHandler } = ToggleState()
    return (
        <ModalMobile toggleStateHandler={() => toggleStateHandler!('pay_now')} state={toggleState!['pay_now']}>
            <div className='mb-2'>
                Pay with card

                <div className='flex overflow-y-hidden gap-4'>
                    <div
                        className="mx-auto w-fit"
                    >
                        <VirtualCreditCard
                            type={'Visa'}
                            bank={'DBP'}
                            card_number={'0000_0000_0000_0000'}
                            card_holder={'Danyel Eleven'}
                            className={[
                                " snap-center scroll-px-4 fill-sky-900 drop-shadow-md",
                            ].join(" ")}
                        />
                    </div>
                    <div
                        className="mx-auto w-fit"
                    >
                        <VirtualCreditCard
                            type={'Visa'}
                            bank={'BPI'}
                            card_number={'0000_0000_0000_0000'}
                            card_holder={'Danyel Eleven'}
                            className={[
                                " snap-center scroll-px-4 fill-red-900 drop-shadow-md",
                            ].join(" ")}
                        />
                    </div>
                    <div
                        className="mx-auto w-fit"
                    >
                        <VirtualCreditCard
                            type={'Visa'}
                            bank={'Development bank of the Philippines'}
                            card_number={'0000_0000_0000_0000'}
                            card_holder={'Danyel Eleven'}
                            className={[
                                " snap-center scroll-px-4 fill-neutral-800 drop-shadow-md",
                            ].join(" ")}
                        />
                    </div>
                </div>

                <ShippingDetail />
                <ButtonStandard className='w-full py-3' >
                    Confirm order
                </ButtonStandard>
            </div>

        </ModalMobile>
    )
}

export default PayNow