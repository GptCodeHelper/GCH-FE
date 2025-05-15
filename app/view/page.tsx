"use client";

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import GNB from "@/app/global/GNB";
import Exam from "@/app/components/exam"
import { RecoilRoot } from "recoil";

const page:React.FC = () =>{

  return(
    <RecoilRoot>
      <Exam/>
    </RecoilRoot>
  )

};
export default page
