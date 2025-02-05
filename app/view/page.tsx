"use client";

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import GNB from "@/app/global/GNB";
import Exam from "@/app/components/exam/exam"



const page:React.FC = () =>{

  return(
      <Exam/>
  )

};
export default page
