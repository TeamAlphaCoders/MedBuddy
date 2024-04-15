import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from "../../service/Api"
import { DataContext } from '../../context/DataProvider';
import { FaBan } from "react-icons/fa";
import { TbSelect } from "react-icons/tb";
// material-ui
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  // Text area autosize is giving resize error
  TextareaAutosize
} from "@mui/material";
// icons
import { AddCircle as Add } from "@mui/icons-material";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';


const Container = styled(Box)`
  margin: 0px 0px;
  padding: 0px 2px;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #ffffff;
`;

const InsideContainer = styled(Box)`
  width: 50%;
  margin: 50px 5px;
  padding: 5px 5px;
  border: 2px solid #3d3d3dde;
  border-radius: 14px;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  // z-index:100;
`;

const StyledFileInput = styled(Box)`
  width: 33.5vw;
  margin: 0px 0px;
  padding: 0px 0px;
  display:flex;
  justify-content: space-around;
  align-items:center;
  border: 2px solid #d5edff;
    border-radius: 10px;
  border-shadow: 0 5px 25px rgba(14, 21, 37, 0.8);
`;

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  border: 2px solid #d5edff;
  border-radius: 10px;
  border-shadow: 0 5px 25px rgba(14, 21, 37, 0.8);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background:#e0eff9;
`;

const InputTextField = styled(InputBase)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 2px 0px;
  padding: 3px 2px;
  padding-left: 8px;
  font-size: 21px;
  font-weight: 700;
  background: #e0eff9;
  resize:none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize:none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;
const Textarea2 = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  margin-left:7px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const BudgetArea = styled(TextareaAutosize)`
  width: 31vw;
  padding: 8px 5px;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin:2px 2px;
  margin-left:7px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize:none;
  &:focus-visible {
    outline: 2px solid green;
    z-index:10;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  height : 2.48rem;
  padding: 0px 5px;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin:2px 2px;
  margin-left:7px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  &:focus-visible { 
  }
  ::placeholder {
    opacity: 0.6;
  }
   &:focus-visible {
    outline: 2px solid grey;
  }
`;


const TextInformationarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 4px 5px;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin:2px 2px;
  margin-left:7px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize:none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;
const Image = styled('img')({
  width: '100%',
  height: '50vh',
  aspectRatio: "3/2",
  objectFit: 'contain',
  borderRadius: '14px',
});



const initialRecords = {
  userType: '',
  patientName: '',
  patientUsername: '',
  number: '',
  email: '',
  hospitalName: '',
  drName: '',
  diseases: '',
  diseaseDescription: '',
  reports: '',
  organsCondition: '',
  medicines: '',
  remediesRecommended: '',
  createdDate: new Date(),
};

function CreateRecords() {
  const [patientName, setPatientName] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();
  
  const location = useLocation();

  const [records, setRecords] = useState(initialRecords);

  // reports
  const [file, setReportsPdf] = useState('')

  const defaultUserType = 'patient'

  const [userType, setUserType] = useState(defaultUserType)

  const { account } = useContext(DataContext);




  const [formErrors, setFormErrors] = useState({
    patientName: false,
    patientUsername: false,
    number: false,
    email: false,
    hospitalName: false,
    drName: false,
    diseases: false,
    diseaseDescription: false,
    // reports: false,
    organsCondition: false,
    medicines: false,
    remediesRecommended: false, 
    createdDate: false,
  });

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  // -*-*-*-*-**-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**

 

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;

    const RestrictedInput = inputValue.slice(0, 21);

    setPatientName(RestrictedInput);
  };

  const handleUserTypeChange = (e) => {
    const inputValue = e.target.value;
    // console.log('Selected userType:', inputValue);
    setUserType(inputValue);
    handleChange(e);
  }

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;

    const numericInput = inputValue.replace(/[^0-9]/g, "");

    const restrictedInput = numericInput.slice(0, 10);

    setNumber(restrictedInput);
  };

 
  const url = 'reports';

  useEffect(() => {
    try {
      // const getImage = async () => {
      //   if (file) {
      //     const data = new FormData();
      //     data.append('name', file.name);
      //     data.append('file', file);
      //     const response = await API.uploadFile(data);
      //     setRecords({ ...records, picture: response.data.recordUrl })
      //   }
      // }
      // getImage();



    } catch (error) {
      console.log("Error");
    }
 
    records.username = account.username;
    records.name = account.name;

  }, [])

  
  useEffect(() => {
    records.userType = userType;
  }, [userType])




  // -===-=-==-=-=-==-=--==

  const validateForm = () => {
    const errors = {
      patientName: !records.patientName || !records.patientName.trim(),
      patientUsername: !records.patientUsername || !records.patientUsername.trim(),
      number: !records.number || !records.number.trim(),
      email: !records.email || !records.email.trim(),
      hospitalName: !records.hospitalName || !records.hospitalName.trim(),
      diseases: !records.diseases || !records.diseases.trim(),
      diseaseDescription: !records.diseaseDescription || !records.diseaseDescription.trim(),
      // reports: !records.reports || !records.reports.trim(),
      // organsCondition: !records.organsCondition || !records.organsCondition.trim(),
      medicines: !records.medicines || !records.medicines.trim(),
      remediesRecommended: !records.remediesRecommended || !records.remediesRecommended.trim(), 

    };

    setFormErrors(errors);
    const formIsValid = Object.values(errors).every((value) => !value);
    setShowError(!formIsValid);
    return formIsValid;
  };



  const saveRecords = async () => {
    if (validateForm()) {
      try {
        // setLoading(true);
        let response = await API.createRecords(records);
        if (response.isSuccess) {
          navigate(`/records`);
        }
        else {
          setErrorMessage('Error saving records. Please try again.');
        }

      } catch (error) {
        setErrorMessage('An unexpected error occurred. Please try again later.');

      }
    }
  }

  const handleChange = (e) => {
    setRecords({ ...records, [e.target.name]: e.target.value });
    console.log(records);
  }

  // -=-==-=-=-=-=-=-=-=-=-=-=-=-=-=--=-===-=

  return (
    <div>
      <Container>

        <InsideContainer>

          <div style={{

          }}>
            <InputTextField
              placeholder="Enter Patient Name..."
              value={patientName}
              required
              autoFocus
              name="patientName"
              onChange={(e) => {
                handleTitleChange(e);
                handleChange(e);
              }}
            />
          </div>


          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "5px 0px",
            }}
          >
 

            <StyledFileInput>
              <label
                name="reports"
                htmlFor="reportsfile"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}
              >
                <Add fontSize="large" />
                Choose Reports
              </label>

  
              <input
                name="reportsfile"
                type="file"
                id="reportsfile"
                key="reportsfile"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={(e) => setReportsPdf(e.target.files[0])}
              />
            </StyledFileInput>

            <div className="flex flex-row items-center w-full">
              <TbSelect fontSize="1.45rem" />

              <StyledSelect
                id="userType"
                value={userType}
                label="Post records as..."
                name="userType"
                onChange={handleUserTypeChange}
              >
                <MenuItem value={defaultUserType}>Patient</MenuItem>

                <MenuItem value="hospital">Hospital</MenuItem>

                <MenuItem value="staff">Hospital Staff</MenuItem>
              </StyledSelect>
            </div>
          </div>
          {/* *-*--*-*-*-*-*-*-*- patient Username -*-*-**-**-*-*-*/}

          <Textarea
            placeholder="Enter patient Username...."
            name="patientUsername"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/* *-*--*-*-*-*-*-*-*- hospitalName -*-*-**-**-*-*-*/}

          <Textarea
            placeholder="Enter Hospital Name..."
            name="hospitalName" 
            required
            inputprops={{
              maxLength: 110,
            }}
            onChange={(e) => { 
              handleChange(e);
            }}
          />

          <Textarea
            placeholder="Enter Diseases..."
            name="diseases" 
            required
            onChange={(e) => { 
              handleChange(e);
            }}
          />

          <Textarea
            placeholder="Enter Dr Name..."
            name="drName" 
            required
            onChange={(e) => { 
              handleChange(e);
            }}
          />
 

            
          {/* *-*--*-*-*-*-*-*-*- mobile & email*-*-*-**-**-*-*-*/}
          <div
            style={{
              display: "flex",
              flexShrink: "1",
              alignItems: "center",
              justifyContent: "space-arround",
              margin: "2px 0px",
              padding: "5px 0px",
            }}
          >

            <div className="flex flex-row items-center w-full">
              < LocalPhoneOutlinedIcon />
              <TextInformationarea
                placeholder="Enter number (+91 **********)"
                name="number"
                // style={{ width: "100%" }}
                value={number}
                required
                onChange={(e) => {
                  handleNumberChange(e);
                  handleChange(e);
                }}
              />
            </div>

            <div className="flex flex-row items-center w-full">
              <EmailOutlinedIcon />
              <TextInformationarea
                placeholder="Enter Email (***@gmail.com)"
                name="email"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          {/* *-*--*-*-*-*-* addresss -*-*-**-*-*-*-*-**-**-*-*-*/}
          <div className="flex flex-row items-center">
            <HomeOutlinedIcon />
            <Textarea2
              placeholder="Enter organs Condition"
              name="organsCondition"
              required
              onChange={(e) => handleChange(e)}
            />

          </div>


          <div className="flex flex-row items-center">
            <DescriptionOutlinedIcon />
            <Textarea2
              placeholder="Write detailed description about patient problem..."
              name="diseaseDescription"
              required
              onChange={(e) => handleChange(e)}
            />

          </div>
          
          {/* *-*--*-*-*- Google Url-*-**-*-*-*-*-**-**-*-*-*/}
          <div className="flex flex-row items-center">
            <LanguageOutlinedIcon />
            <Textarea2
              placeholder="Enter Medicines..."
              name="medicines"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>




          <div className="flex flex-row items-center">
            <LanguageOutlinedIcon />
            <Textarea2
              placeholder="Remedies Recommended..."
              name="remediesRecommended"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          {/* *-*--*-*-*-*-*-*-*-*--*img*-*-*-*-*-**-**-*-*-*/}
          {/* <Image src={url} alt="Banner img..." /> */}


          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          {showError && (
            <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
              {errorMessage || 'Please fill out all the required fields.'}

            </div>
          )}
          {/* *-*--*-*-*-*-*-*-*-*-**-*-*-*-*-**-*-*-*-*-**-**-*-*-*/}

          <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
            <Button variant="contained" onClick={() => saveRecords()}>Save</Button>
          </div>

        </InsideContainer>
      </Container>
    </div>
  );
}



export default CreateRecords

