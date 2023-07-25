
import './App.css';
import LandingPage from './Component/Homepage/LandingPage';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import VisatypePage from './Component/VisatypePage/VisatypePage';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path="/visa-type" element={<VisatypePage/>} />
      </Routes>
      </BrowserRouter>
      {/* <LandingPage/> */}
      </>
   
  );
}

export default App;
