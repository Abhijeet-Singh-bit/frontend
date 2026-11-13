import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




type Errors = {
  email?: string;
  name?: string;
  contact?: string;
  address?: string;
  dob?: string;
  occupation?: string;
};


const DonorForm = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [preview1, setPreview1] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!obj.email) newErrors.email = "Email is required";
    if (!obj.name) newErrors.name = "Donor name is required";
    if (!obj.contact || obj.contact.length < 10)
      newErrors.contact = "Valid contact number required";
    if (!obj.address) newErrors.address = "Address is required";
    if (!obj.dob) newErrors.dob = "Date of birth is required";
    if (!obj.occupation) newErrors.occupation = "Select occupation";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const [obj, setObj] = useState<Errors>
  ({
    email: "",
    name: "",
    contact: "",
    address: "",
    dob: "",
    occupation: "",

    
  });

  const navigate = useNavigate();

  function doUpdate( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
   {
    const {name , value} =event.target;
    setObj(prev =>({...prev, [name]: value,}));

  }

  const handleImage = (
    file: File | null,
    setImage: Function,
    setPreview: Function
  ) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

// ================================================================================================//
 
const save = async () => {
  if (!validate()) return;

  const url = `${import.meta.env.VITE_API_URL}/api/profile`;

  const fd = new FormData();

  if (obj.email) fd.append("email", obj.email);
  if (obj.name) fd.append("name", obj.name);
  if (obj.contact) fd.append("contact", obj.contact);
  if (obj.address) fd.append("address", obj.address);
  if (obj.dob) fd.append("dob", obj.dob);
  if (obj.occupation) fd.append("occupation", obj.occupation);
  if (image1) fd.append("image1", image1);
  if (image2) fd.append("image2", image2);

  const token = localStorage.getItem("token");

  try {
    const resp = await axios.post(url, fd, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    alert(resp.data.msg);

  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      alert("Your session has expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/loginnav");
    } else {
      alert("Something went wrong. Try again.");
    }
  }
};



   
const update = async () => {
 
  const url = `${import.meta.env.VITE_API_URLL}/api/update`;

  const fdu = new FormData();

  if (obj.email) fdu.append("email", obj.email);
  if (obj.contact) fdu.append("contact", obj.contact);
  if (obj.name) fdu.append("name", obj.name);
  if (obj.dob) fdu.append("dob", obj.dob);
  if (obj.address) fdu.append("address", obj.address);
  if (obj.occupation) fdu.append("occupation", obj.occupation);

  if (image1 instanceof File) {
    fdu.append("image1", image1);
  }

  if (image2 instanceof File) {
    fdu.append("image2", image2);
  }

  const token = localStorage.getItem("token");

  try {
    const resp = await axios.post(url, fdu, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    alert(resp.data.msg);

  } catch (err: any) {
    if (err.response?.status === 401) {
      alert("Your session has expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/loginnav");
    } else {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  }
};

  
  
// ================================================================================================//
    
    const search = async () => {
     alert("Clicked");
      let url = "http://localhost:2026/api/fetchOneUser";   
      
      let email = {email:obj.email}
      let resp= await axios.post(url,email,{headers: { "Content-Type": "application/x-www-form-urlencoded" }});
      alert(JSON.stringify(resp.data));       
       
      if (resp.data.status === true ) {
        resp.data.doc.dob = resp.data.doc.dob.split("T")[0];
        
        setObj(resp.data.doc); 
        setPreview2(resp.data.doc.image1);
        setPreview1(resp.data.doc.image2);
        
    }
     else 
      {
        alert(resp.data.msg);
      }
    };
// ================================================================================================//
  return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-xl rounded-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">

      {/* LEFT FORM SECTION */}
      <div className="w-full md:w-2/3 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">
          Donor Registration
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
            <label className="font-medium">Name of Donor</label>
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

        {/* CONTACT */}
        <div className="mt-4">
          <label className="font-medium">Contact Number</label>
          <input
            type="tel"
            name="contact"
            className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
            value={obj.contact}
            onChange={doUpdate}
          />
          {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
        </div>

        {/* ADDRESS */}
        <div className="mt-4">
          <label className="font-medium">Address</label>
          <textarea
            name="address"
            className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
            value={obj.address}
            onChange={doUpdate}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* DOB + OCCUPATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.dob}
              onChange={doUpdate}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          <div>
            <label className="font-medium">Occupation</label>
            <select
              name="occupation"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.occupation}
              onChange={doUpdate}
            >
              <option value="">Select</option>
              <option value="Private Job">Private Job</option>
              <option value="Government Job">Government Job</option>
              <option value="Business">Business</option>
              <option value="Student">Student</option>
            </select>
            {errors.occupation && (
              <p className="text-red-500 text-sm">{errors.occupation}</p>
            )}
          </div>
        </div>

        {/* IMAGE UPLOADS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <input
              type="file"
              className="border border-gray-400 p-2 rounded w-full"
              accept="image/*"
              onChange={(e) =>
                handleImage(e.target.files?.[0] || null, setImage1, setPreview1)
              }
            />
            {preview1 && (
              <img
                src={preview1}
                className="mt-2 h-32 w-full object-cover rounded"
              />
            )}
          </div>

          <div>
            <input
              type="file"
              className="border border-gray-400 p-2 rounded w-full"
              accept="image/*"
              onChange={(e) =>
                handleImage(e.target.files?.[0] || null, setImage2, setPreview2)
              }
            />
            {preview2 && (
              <img
                src={preview2}
                className="mt-2 h-32 w-full object-cover rounded"
              />
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button onClick={save} className="bg-indigo-600 text-white px-6 py-2 rounded">
            Save
          </button>
          <button onClick={update} className="bg-green-600 text-white px-6 py-2 rounded">
            Update
          </button>
          <button onClick={search} className="bg-gray-700 text-white px-6 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/3 items-center justify-center bg-slate-50">
        <img
          src="/Donor.png"
          alt="Donor"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
);

};

export default DonorForm;
