import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar";
import Login from "./components/account/Login";
import NoMatch from "./components/noMatch/NoMatch";
// =============================
import CreateRecords from "./components/createRecords/CreateRecords";
import MedRecords from "./components/records/MedRecords"
import PredictDisease from "./components/predictDisease/PredictDisease";
import ReportAnalysis from "./components/analysis/ReportsAnalysis"



// =============================




const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Navbar />
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false)

  return (
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated} />} />

        {/* Setting up a private route */}

        {/* Navbar Routes */}
        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
        </Route>
 

        <Route path="/records" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/records" element={<MedRecords />} />
        </Route>

        <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/create" element={<CreateRecords />} />
        </Route>
 

        <Route path="/ai-predictor" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/ai-predictor" element={<PredictDisease />} />
        </Route>

        <Route path="/analysis" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/analysis" element={<ReportAnalysis />} />
        </Route>
  
        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
};

export default App;
