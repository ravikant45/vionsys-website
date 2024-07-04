'use client';
import Image from 'next/image';
import React from 'react';
import { IoHome } from "react-icons/io5";
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { LiaBlogSolid } from "react-icons/lia";
import { MdWork } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import useAuthLogout from '@/services/auth/useAuthLogout';
import { Button } from 'antd';

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { mutate: logout, isPending: isLogoutPending } = useAuthLogout();

    const handleLogout = () => {
        logout();
    }

    return (
        <section className='fixed w-44 h-[100vh] bg-blue-100 shadow-md shadow-gray-400'>
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <div className='border-b border-gray-400 bg-white py-2'>
                        <Image src={"/assets/logo.png"} alt='Logo' width={200} height={200} />
                    </div>

                    <div className='flex flex-col gap-2 w-full items-center py-4'>
                        <Link
                            href={"/admin"}
                            className={classNames('flex gap-4 px-4 items-center py-4 rounded-md w-full', {
                                'bg-white': pathname === '/admin' || pathname === '/',
                                'hover:bg-white': pathname !== '/admin' && pathname !== '/'
                            })}
                            onClick={() => router.push('/admin')}
                        >
                            <IoHome size={20} />
                            <h1>Home</h1>
                        </Link>
                        <Link href={"/admin/blogs"} className='flex gap-4 px-4 items-center py-4 hover:bg-white rounded-md w-full'>
                            <LiaBlogSolid size={20} />
                            <h1>Blogs</h1>
                        </Link>
                        <Link href={"/admin/jobs"} className='flex gap-4 px-4 items-center py-4 hover:bg-white rounded-md w-full'>
                            <MdWork size={20} />
                            <h1>Jobs</h1>
                        </Link>
                    </div>
                </div>

                <div className='bg-white'>
                    <Button onClick={() => handleLogout()} loading={isLogoutPending} type='text' danger className='w-full h-full py-4'>
                        <IoLogOut size={25} />
                        <h1 className='text-base'>Logout</h1>
                    </Button>
                </div>
            </div>
        </section >
    );
}

export default Sidebar;
