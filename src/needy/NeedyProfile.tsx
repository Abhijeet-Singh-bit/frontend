import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";


type Errors = {
  email?: string;
  name?: string;
  contact?: string;
  address?: string;
  dob?: string;
  city?: string;
  gender?: string;
  image1?: string;
  image2?: string;
  otherinfo?: string;
  aadhaar_number? : string;
  name2?: string;
  };


const NeedyProfile = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [preview1, setPreview1] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [showAadhaar, setShowAadhaar] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Errors = {};

    if (!obj.email) newErrors.email = "Email is required";
    
    if (!obj.aadhaar_number) newErrors.aadhaar_number = "Email is required";
    if (!obj.name2) newErrors.name2 = "Email is required";

    if (!obj.name) newErrors.name = "Donor name is required";
    if (!obj.gender) newErrors.gender = "Select Gender";
    if (!obj.city) newErrors.city = "City is required";

    if (!obj.contact || obj.contact.length < 10)
      newErrors.contact = "Valid contact number required";

    if (!obj.address) newErrors.address = "Address is required";
    if (!obj.dob) newErrors.dob = "Date of birth is required";
    

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
    city:  "",
    gender:  "",
    otherinfo:  "",
    name2: "",
    aadhaar_number: "",

    
  });

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
    // alert("Clicked");
    if (!validate()) return;
    
       let url = "http://localhost:2026/api/Needyprofile";
         
    
        const fd = new FormData();
        if (obj.email) fd.append("email", obj.email);
        if (obj.name) fd.append("name", obj.name);
        if (obj.contact) fd.append("contact", obj.contact);
        if (obj.address) fd.append("address", obj.address);
        if (obj.dob) fd.append("dob", obj.dob);
        if (obj.city) fd.append("city", obj.city);
        if (obj.gender) fd.append("gender", obj.gender);
        if (obj.otherinfo) fd.append("otherinfo", obj.otherinfo);

        if (image1) 
         {
           fd.append("image1", image1);
         }

        if (image2) 
         {
           fd.append("image2", image2);
         }

          let resp = await axios.post(url, fd, {headers: {'Content-Type': 'multipart/form-data'  } });
          //alert(JSON.stringify(resp.data));
          if (resp.data.status === true) 
          {
           alert(resp.data.msg);
          }

          else 
            {
           alert(resp.data.msg);
            }
    };

    // ================ Update =================// 

    const update = async () => { 
    // alert("Clicked");

    let url = "http://localhost:2026/api/UpdateNeedy";

    const fdu = new FormData();
        if (obj.email) fdu.append("email", obj.email);
        if (obj.name) fdu.append("name", obj.name);
        if (obj.contact) fdu.append("contact", obj.contact);
        if (obj.address) fdu.append("address", obj.address);
        if (obj.dob) fdu.append("dob", obj.dob);
        if (obj.city) fdu.append("city", obj.city);
        if (obj.gender) fdu.append("gender", obj.gender);
        if (obj.otherinfo) fdu.append("otherinfo", obj.otherinfo);
    

    if (image1 instanceof File) 
      {
        fdu.append("image1", image1);
      }


    if (image2 instanceof File) 
      {
        fdu.append("image2", image2);
      }

      
  let token = localStorage.getItem("token");

  let resp = await axios.post(url, fdu, {  headers: {"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`,}})
  
  if(resp.data.status === true)
    {
     alert(resp.data.msg);
    }
  else
    {
      alert(resp.data.msg);
    }  
}
  
  
// ================================================================================================//
    
const search = async () => {

  let url = "http://localhost:2026/api/fetchOneNeedy";   
  let email = { email: obj.email };

  let resp = await axios.post(
    url,
    email,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  if (resp.data.status === true) {

    resp.data.doc.dob = resp.data.doc.dob?.split("T")[0];

    setObj(resp.data.doc);
    setPreview2(resp.data.doc.image2);
    setPreview1(resp.data.doc.image1);

    setShowAadhaar(true);   // 👈 SHOW FIELDS HERE
  } 
  else {
    alert(resp.data.msg);
    setShowAadhaar(false);  // 👈 HIDE IF NOT FOUND
  }
};
// ================================================================================================//
  return (
  <section>
  <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-xl rounded-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">


  {/* LEFT IMAGE (Hidden on Mobile) */}
      <div className="hidden md:flex md:w-1/3 items-center justify-center bg-slate-50">
        <img
          src="/Needy.jpg"
          alt="Donor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-2/3 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-red-500 mb-6">
          Needy Registration
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
            <label className="font-medium">Name of Needy</label>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           
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

        <div className="mt-4">
             <label className="font-medium">City</label>
               <input
               type="text"
               name="city"
               className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
               value={obj.city}
               onChange={doUpdate}
              />
                 {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
           </div>


         <div className="mt-4">
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

        </div>

 

        {/* DOB + OCCUPATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="font-medium">Address</label>
            <input
              type="text"
              name="address"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.address}
              onChange={doUpdate}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div>
            <label className="font-medium">Gender</label>
            <select
              name="gender"
              className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
              value={obj.gender}
              onChange={doUpdate}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* IMAGE UPLOADS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="font-medium">Adhar Card</label>
            <input
              type="file"
              className="border border-gray-400 p-2 mt-1 rounded w-full"
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
            <label className="font-medium">Needy pic</label>
            <input
              type="file"
              className="border border-gray-400  mt-1 p-2 rounded w-full"
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

{/* Adhar information */}
       {showAadhaar && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 ">

    <div>
      <label className="font-medium">Adhar Name</label>
      <input
        name="adharname"
        readOnly
        className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
        value={obj.name2}
      />
    </div>

    <div>
      <label className="font-medium">Adhar Number</label>
      <input
        name="adharnumber"
        readOnly
        className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
        value={obj.aadhaar_number}
      />
    </div>

  </div>
)}
{/* Adhar information */}

    {/* ADDRESS */}
        <div className="mt-4 ">
          <label className="font-medium">Other Info</label>
          <textarea
            name="otherinfo"
            className="w-full border border-gray-400 px-3 py-2 rounded mt-1"
            value={obj.otherinfo}
            onChange={doUpdate}
          />
          {errors.otherinfo && <p className="text-red-500 text-sm">{errors.otherinfo}</p>}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button onClick={save} className="bg-red-500 text-white px-6 py-2 rounded">
            Save
          </button>
          <button onClick={update} className="bg-green-600 text-white px-6 py-2 rounded">
            Update
          </button>
          <button onClick={search} className="bg-red-500 text-white px-6 py-2 rounded">
            Search
          </button>
        </div>
      </div>

    

    </div>

 

  </div>

   <div >
   
      <Footer></Footer>
 
   </div>

   </section>


);

};

export default NeedyProfile;


