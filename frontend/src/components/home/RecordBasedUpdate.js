import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { GiLoveInjection } from "react-icons/gi";
import { RiHealthBookLine } from "react-icons/ri";


function RecordBasedUpdate() {
  return (
    <div className="flex flex-col items-center font-bold  ">
      <div className="  bg-black/45 w-fit p-5 px-1 text-center text-xl ">
        <h1 className=" font-lora pb-4 text-2xl">
          {" "}
          Update based on previous health report:-{" "}
        </h1>
        <ol>
          <li>
            <GiMedicines /> Dart{" "}
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <GiMedicines /> Amoxiline{" "}
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <GiMedicines /> Paracetamol
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <GiLoveInjection /> Humulin R U-100 (before Lunch and Dinner)
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <FaHeartbeat /> Measure Heart Rate
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <RiHealthBookLine /> As per your last report, you have viral fever.
            Take the prescribed medicines on time!
          </li>
          <hr class="w-[60%] h-[2px] mx-auto  bg-gray-100 border-0 rounded m-[2px] bg-orange-400/75"></hr>
          <li>
            <RiHealthBookLine /> As per your last report, your sugar levels were
            high!
          </li>
        </ol>
      </div>
    </div>
  );
}

export default RecordBasedUpdate;