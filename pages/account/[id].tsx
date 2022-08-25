import React from 'react'
import LayoutAccount from '../../components/Layouts/layout-account';
import AccountSettingsLayout from '../../layouts/account__settings__layout';

const AccountSettings = () => {
    return (
        <div>AccountSettings</div>
    )
}

AccountSettings.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <LayoutAccount>
            <AccountSettingsLayout>

                <>{page}</>
            </AccountSettingsLayout>
        </LayoutAccount>
    );
};

export default AccountSettings