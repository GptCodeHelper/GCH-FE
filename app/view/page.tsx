"use client";

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import GNB from "@/app/components/global/GNB";
import Exam from "@/app/components/exam/exam"


const page:React.FC = () =>{

  return(
      <Exam/>
  )

};
export default page
