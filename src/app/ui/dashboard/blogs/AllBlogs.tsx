import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import AddBlogForm from './AddBlogForm';

const AllBlogs = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    return (
        <section className='px-4 py-6 w-full h-screen flex justify-center'>
            <Button onClick={() => setIsAddModalOpen(!isAddModalOpen)} type='primary' className='text-base'>
                Add Blog
            </Button>

            <Modal width={900} centered open={isAddModalOpen} footer={null} onCancel={() => setIsAddModalOpen(false)}>
                {/* Add Blog Form */}
                <AddBlogForm />
            </Modal>
        </section>
    )
}

export default AllBlogs;