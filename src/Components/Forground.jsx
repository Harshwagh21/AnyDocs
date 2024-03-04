import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Hospital Expenses",
      filesize: "2.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downlaod Now", tagColor: "green"},
    },
    {
      desc: "College Fees expenditure made in 2024 MCA ",
      filesize: "8.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Downlaod Now", tagColor: "green"},
    },
    {
      desc: "Interview Schedule for employee",
      filesize: "6.45mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue"},
    },
  ];
  return (
    <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-8 flex-wrap p-5 '>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
    </>
  );
}

export default Forground