import { Avatar } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <section className='w-[100vw] h-20 fixed top-0 py-2 flex items-center gap-4'>
            <div>
                <Avatar className='bg-slate-200' size={64} icon={<UserOutlined className='text-MainHeading' />} />
            </div>
            <div>
                <h2 className='text-MainHeading font-bold'>Welcome, Admin</h2>
                <h4>Here you can manage users, view reports, and configure system settings.</h4>
            </div>
        </section>
    )
}

export default Header