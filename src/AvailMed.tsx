import { useState } from "react";
import axios from "axios";


type Errors = {
  email?: string;
  name?: string;
  salts?: string;
  quantity?: string;
  units?: string;
  dom?: string;
  doe?: string;
  company?: string;
};


const DonorForm = () => {
const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!obj.email) newErrors.email = "Email is required";
    if (!obj.name) newErrors.name = "Medicine name is required";
    if (!obj.quantity || Number(obj.quantity) <= 0)
    newErrors.quantity = "Quantity must be greater than 0";
    if (!obj.salts) newErrors.salts = "Salts is required";
    if (!obj.doe) newErrors.doe = "Date of Expiry is required";
    if (!obj.dom) newErrors.dom = "Date o fManufacturing is Required";
    if (!obj.units) newErrors.dom = "Units is Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const [obj, setObj] = useState<Errors>
  ({
    email: "",
    name: "",
    units: "",
    salts: "",
    doe: "",
    dom: "",
    quantity: "",
    company:"",

    
  });

  function doUpdate( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
   {
    const {name , value} =event.target;
    setObj(prev =>({...prev, [name]: value,}));

  }



// ================================================================================================//
  const save = async () => {
    alert("Clicked");
    if (!validate()) return;
    
      let url = "http://localhost:2026/api/AvailMed";
      let resp = await axios.post(url, obj);
      //alert(JSON.stringify(resp.data));
      if (resp.data.status === true) 
       {
        alert(resp.data.msg);
       }

      else {
        alert(resp.data.msg);
      }

    };

// ================================================================================================//
    
   
// ================================================================================================//
  return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-xl rounded-xl w-200 max-w-6xl flex flex-col md:flex-row overflow-hidden">

      {/* LEFT FORM SECTION */}
      <div className="w-full md:w-200.5 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-red-600 mb-6">
          Avail Medicine
        </h2>

        {/* EMAIL + NAME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              autoFocus
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.email}
              onChange={doUpdate}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="font-medium">Medicine Name</label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.name}
              onChange={doUpdate}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
        </div>

        {/* UNIT + QUANTITY + SALTS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div>
            <label className="font-medium">Salts</label>
            <input
              type="text"
              name="salts"
              autoFocus
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.salts}
              onChange={doUpdate}
            />
            {errors.salts && <p className="text-red-500 text-sm">{errors.salts}</p>}
          </div>

          <div>
            <label className="font-medium">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.quantity}
              onChange={doUpdate}
            />
            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
          </div>

          <div>
          <label className="font-medium">Unit</label>
            <select
              name="units"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.units}
              onChange={doUpdate}
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {errors.units && (
              <p className="text-red-500 text-sm">{errors.units}</p>
            )}

          </div>

                  <div>
            <label className="font-medium">Company</label>
            <input
              type="text"
              name="company"
              autoFocus
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.company}
              onChange={doUpdate}
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>

        </div>

        

        {/* doe + dom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-medium">Date of Manufacturing</label>
            <input
              type="date"
              name="dom"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.dom}
              onChange={doUpdate}
            />
            {errors.dom && <p className="text-red-500 text-sm">{errors.dom}</p>}
          </div>

          <div>
            <label className="font-medium">Date of Expiry</label>
             <input
              type="date"
              name="doe"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.doe}
              onChange={doUpdate}
            />
            {errors.doe && <p className="text-red-500 text-sm">{errors.doe}</p>}
          </div>
        </div>
  

        {/* BUTTONS */}
     
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button onClick={save} className="bg-red-600 text-white  px-6 py-2 rounded">
                 Avail Medicine
          </button>
         
        </div>
       
      </div>

     

    </div>
  </div>
);

};

export default DonorForm;
