import React from "react";
import { ReactTyped } from "react-typed";
import { FiDatabase } from "react-icons/fi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbDeviceMobile } from "react-icons/tb";
import dummyUser from "../data/dummyUser.jpeg";
import bgImg from "../data/bgImg.jpg";
import RecordBasedUpdate from "./RecordBasedUpdate.js";

const Home = () => {
  return (
    <>
      
      <div
        className=" w-[100vw] h-full flex overflow-y-hidden "
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* left part */}
        <div className=" flex flex-col text-green-400   w-[50%]  p-4 items-center">
          <p className="font-bold text-4xl font-roboto text-center">
            Welcome to your personal AI assisted electronic healthcare <br />
            report managing system!
          </p>
          <div className="flex justify-center ">
            <p className="font-bold text-xl pr-2 font-roboto ">which is</p>
            <ReactTyped
              strings={["Fast", "Reliable", "Manageable", "Easy to use"]}
              typeSpeed={120}
              backSpeed={140}
              loop
              className="font-bold text-xl text-red-200"
            />
          </div>
          {/* Making the Solution points */}
          {/* 1 */}
          <div className="w-[80%] text-gray-50  p-4 pt-5 ">
            <div className="flex">
              <FiDatabase className="text-[650%] p-3" />
              <div className="flex flex-col">
                <p className="pb-3 font-bold text-xl">Centralized Database</p>
                <p>
                  Consolidate patient records in a secure, database-based
                  platform (in future will be done using Blockchain) accessible
                  to authorized healthcare providers.
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[80%]  text-gray-50  p-4">
            <div className="flex">
              <GiArtificialIntelligence className="text-[700%] p-3" />
              <div className="flex flex-col">
                <p className="pb-3 font-bold text-xl">AI risk analysis</p>
                <p>
                  AI analyzes health reports by extracting information and
                  identifying patterns to provide personalized insights and
                  proactive healthcare interventions.
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[80%]  text-gray-50   p-4">
            <div className="flex">
              <TbDeviceMobile className="text-[600%] p-3" />
              <div className="flex flex-col">
                <p className="pb-3 font-bold text-xl">Mobile Accessibility</p>
                <p>
                  Provide healthcare professionals with mobile access to patient
                  records, enabling real-time updates and remote consultations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}

        <div className=" flex flex-col  w-[50%] h-fit  border-x-fuchsia-400 text-green-400 p-2">
          {/* User welcome card */}
          <div className="flex items-center">
            <div>
              <img
                class="w-[200px] h-[200px] rounded-full  p-4"
                src={dummyUser}
                alt="logged in User"
              />
            </div>

            <p className=" text-7xl font-PTSeri text-center font-extrabold   ">
              Welcome back, User!
            </p>
            {/* <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-PTSeri">
              hello world
            </h1> */}
          </div>

          {/* user data card based on medical records */}
          <RecordBasedUpdate />
        </div>
      </div>
    </>
  );
};

export default Home;
