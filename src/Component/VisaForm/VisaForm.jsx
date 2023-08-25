import React,{useState,useEffect} from 'react'
import NavbarPage from '../NavbarPage'
import { Container } from 'react-bootstrap'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import VisaFormDetails from './VisaStepper/VisaFormDetails';
import VisaDocument from './VisaStepper/VisaDocument';
import VisaPayment from './VisaStepper/VisaPayment'
import { useLocation } from 'react-router-dom';
import VisaValidation from './VisaStepper/VisaValidation';
import Footer from '../Footer/Footer';
import { fetchApplication } from "../AllApi/LandingApi";
import Loder from "../Loader/Loader";

const VisaForm = () => {

  const location = useLocation();
  const data = location?.state

  const [application, setApplication] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const fetchApplicationForms = async () => {
    setisLoading(true);
    const fd = {
      from_countries: data.data.from_country._id,
      to_countries: data.data.to_country._id,
      visa_type: data.data.visa_type._id,
    };
    try {
      let res = await fetchApplication(fd);
      setApplication(res.data.data);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error, "error");
    }
  };

  useEffect(() => {
    fetchApplicationForms();
  }, []);

    const steps = [
      "Validation",
        "Personal Details",
        // "Upload Documents",
        "Payment"
      ];
      const[step , setStep] = useState(0)

  return (
    <>
    <NavbarPage/>
    <Container>

        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {step===0?<VisaValidation setStep={setStep} step={step} data={data}/>:step===1?
         <VisaFormDetails setStep={setStep} step={step} data={data}/>:step===2?
      <VisaPayment setStep={setStep} step={step}/>:""
    }
    </Container>
    <Footer/>
    <Loder loading={isLoading} />
    </>
  )
}

export default VisaForm;