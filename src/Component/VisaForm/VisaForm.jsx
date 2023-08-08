import React,{useState} from 'react'
import NavbarPage from '../NavbarPage'
import { Container } from 'react-bootstrap'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import VisaFormDetails from './VisaStepper/VisaFormDetails';
import VisaDocument from './VisaStepper/VisaDocument';
import VisaPayment from './VisaStepper/VisaPayment'

const VisaForm = () => {

    const steps = [
        "Personal Details",
        "Upload Documents",
        "Payment"
      ];
      const[step , setStep] = useState(0)

  return (
    <>
    <NavbarPage/>
    <Container>
        <div>
            <h3>Application Form</h3>
        </div>

        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* {step===0? <VisaFormDetails setStep={setStep} step={step}/>:step===1? 
      <VisaDocument setStep={setStep} step={step}/>:step===2?
      <VisaPayment setStep={setStep} step={step}/>:""
    } */}
    </Container>
    </>
  )
}

export default VisaForm;