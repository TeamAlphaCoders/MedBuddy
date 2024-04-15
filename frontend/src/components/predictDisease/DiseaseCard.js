import React from 'react'

function DiseaseCard({
  image,
  date,
  BloodCellIndex,
  Value1,
  Value2,
  Value3,
  Value4,
}) {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-3 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-2 w-[100%] inline-block rounded bg-primary px-4  text-center text-sm font-semibold leading-loose text-rose-600">
                {date}
              </span>
            )}

            <table
              className=" w-full text-sm text-left rtl:text-right bg-lime-200/20 text-gray-500 dark:text-gray-400 "
              style={{ borderColor: "#FFFFFF" }}
            >
              <tr>
                <th className="px-6 py-3">Blood Cell Indices</th>
                <th className="px-6 py-3">Values</th>
              </tr>
              <tr>
                <th className="px-6 py-3">White Blood Cell Count (WBC)</th>
                <th className="px-6 py-3">{Value1}</th>
              </tr>
              <tr>
                <th className="px-6 py-3">Red Blood Cell Count (RBC)</th>
                <th className="px-6 py-3">{Value2}</th>
              </tr>
              <tr>
                <th className="px-6 py-3">Hemoglobin (Hgb)</th>
                <th className="px-6 py-3">{Value3}</th>
              </tr>
              <tr>
                <th className="px-6 py-3">Platelet Count</th>
                <th className="px-6 py-3">{Value4}</th>
              </tr>
            </table>

            {/* <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DiseaseCard