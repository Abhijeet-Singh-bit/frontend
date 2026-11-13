import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Home from "./Home";
import Loginnav from "./Loginprocess";
import DonorForm from "../src/ProfileDonor";
import MedicineForm from "./AvailMed"; 
import Medmanger from "./Medmanager";
import NeedyProfile from "./needy/NeedyProfile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Loginnav" element={<Loginnav />} />
        <Route path="/Donorp" element={<DonorForm />} />
        <Route path="/Medicine" element={<MedicineForm />} />
        <Route path="/Medmanger" element={<Medmanger/>} />
        <Route path="/NeedyProfile" element={<NeedyProfile/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
