import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='bg-zinc-900/90 relative flex-shrink-0 w-60 h-72 rounded-[40px] py-10 px-8 text-yellow-50 overflow-hidden'>
    <FaRegFileAlt />
      <p className='text-sm font-semibold mt-5'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5 className='text-sm'>{data.filesize}</h5>
          <span className='w-6 h-6 bg-zinc-500 border-none rounded-full flex items-center justify-center'>
            {data.close ? <IoClose/> : <MdDownload color='#fff' />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"} flex items-center justify-center `}>
            <h3 className='text-sm font-semibold cursor-pointer'>{data.tag.tagTitle}</h3>
          </div>
        )
      }
        
      </div>
    </motion.div>
    </>
  )
}

export default Card