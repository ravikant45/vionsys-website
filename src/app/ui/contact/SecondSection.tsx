import React from 'react'

const Second = () => {
  return (
      <div className='flex justify-center'>
          <div className=" flex-col-3 bg-slate-200 shadow-md rounded-lg p-6 m-4 h-auto border-dashed">
              <h2 className="text-2xl font-semibold mb-4">Office Address</h2>
              <p className='box-border'>6th floor office no. 504 Stellar Spaces ,<span className='flex'>opposite Zensar it park Kharadi pune</span> </p>
          </div>
          <div className=" flex-col-3 bg-slate-200 shadow-md rounded-lg p-6 m-4 border-dashed w-">
              <h2 className="text-2xl font-semibold mb-4 ">Email ID</h2>
              <p className=''><span className='flex'>Hr@Vionsys.com</span> </p>
          </div>
          <div className=" flex-col-3 bg-slate-200 shadow-md rounded-lg p-6 m-4 border-dashed">
              <h2 className="text-3xl font-semibold mb-4">Social Media</h2>
              <p className=''><span className='flex'></span></p>
    </div>
    </div>
  )
}

export default Second