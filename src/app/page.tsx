'use client';

import dynamic from "next/dynamic";

const Draggable = dynamic(() => import("./Draggable"), { ssr: false });
export default function Home() {
  return (
    <div >
<Draggable/>

    </div>
  );
}