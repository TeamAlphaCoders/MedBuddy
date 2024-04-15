import React, { useContext, useEffect, useState } from "react";
import { API } from "../../service/Api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import MedRecordsData from "./MedRecordsData";
import { DataContext } from '../../context/DataProvider';

// ----------------------
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CategoriesLoader from "../loader/CategoriesLoader"
// ---------------------------------

const MedRecords = () => {
  const { account } = useContext(DataContext); // Move useContext inside the functional component

  // js
  const [records, getRecords] = useState([]);
  const [userRequestName, getUserRequestName] = useState([]);
  const [searchParams] = useSearchParams();

  // Loader
  const [loaderVisible, setCategoriesLoaderVisible] = useState(false);

  const showCategoriesLoader = () => {
    setCategoriesLoaderVisible(true);
  };

  const hideCategoriesLoader = () => {
    setCategoriesLoaderVisible(false);
  };

  useEffect(() => {
    userRequestName.username = account.username;
  }, [account.username])

  useEffect(() => {
    const fetchData = async () => {
      try {
        showCategoriesLoader();
        let response = await API.getAllRecords({ username: account.username });
        if (response.isSuccess) {
          getRecords(response.data);
        }
      } catch (error) {
        console.log("Error fetching categories response");
      } finally {
        setTimeout(() => {
          hideCategoriesLoader();
        }, 600);
      }
    };

    fetchData();
  }, [account.username]);

  return (
    <>
      {loaderVisible && <CategoriesLoader />}
      {!loaderVisible && records && records.length > 0 ? (
        records.map(post => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <MedRecordsData records={records} />
          </Grid>
        ))
      ) : !loaderVisible ? (
        <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available for the selected category
        </Box>
      ) : null}
    </>
  );
}

export default MedRecords;
