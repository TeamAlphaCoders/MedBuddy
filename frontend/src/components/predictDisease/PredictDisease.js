import React from 'react'
import DiseaseCard from './DiseaseCard'
import bgImg from "../data/bgImg.jpg";
import CreateRecord from '../createRecords/CreateRecords';


const PredictDisease = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container text-slate-50">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center ">
              {/* due to "lg:mb-20" only, the bootom margin was present */}
              <span className="mb-2 block text-lg font-semibold text-primary font-roboto">
                Disease prediction
              </span>
              <h2 className="mb-4 text-4xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] font-roboto">
                Using Machine Learning algorithms
              </h2>
              <p className="text-base text-body-color dark:text-dark-6 font-roboto">
                Based on all your past medical reports like doctor's
                prescription, particular test reports like blood test, sugar
                test, MRI scan etc...
                <br />
                Here are the insights we were able to find out.
              </p>
            </div>
          </div>
        </div>

{/* Data from past medical records */}

        <div className=" flex flex-wrap">
          <DiseaseCard
            date="Jan 18, 2023"
            Value1="7,200 cells/mm³"
            Value2="4.5 million cells/mm³"
            Value3="13.8 grams/deciliter"
            Value4="180,000 cells/mm³"
            image="https://media.istockphoto.com/id/1316780057/vector/line-graph-of-rise.jpg?s=612x612&w=0&k=20&c=L42PpOSam5QvZ2PBpWHPmWXE05bxtk2-Umk96UOHs_w="
          />
          <DiseaseCard
            date="Dec 13, 2023"
            Value1="9,800 cells/mm³"
            Value2="5.2 million cells/mm³"
            Value3="11.5 grams/deciliter"
            Value4="220,000 cells/mm³"
            image="https://media.istockphoto.com/id/1316780057/vector/line-graph-of-rise.jpg?s=612x612&w=0&k=20&c=L42PpOSam5QvZ2PBpWHPmWXE05bxtk2-Umk96UOHs_w="
          />
          <DiseaseCard
            date="March 8, 2023"
            Value1="6,500 cells/mm³"
            Value2="4.1 million cells/mm³"
            Value3="15.2 grams/deciliter"
            Value4="150,000 cells/mm³"
            image="https://media.istockphoto.com/id/1316780057/vector/line-graph-of-rise.jpg?s=612x612&w=0&k=20&c=L42PpOSam5QvZ2PBpWHPmWXE05bxtk2-Umk96UOHs_w="
          />
        </div>

        <CreateRecord/>
      </div>
    </div>
  );
}

export default PredictDisease
