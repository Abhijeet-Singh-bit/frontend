// import { Link } from "react-router-dom";
// import viteLogo from "/vite.svg";
// export default function HomeNavbar() {
//   return (
//     <nav className="bg-white ring-2 ring-indigo-500 px-6 py-3 flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <img src={viteLogo} alt="Vite" className="w-8" />
//         <span className="font-bold text-indigo-600">MyApp</span>
//       </div>

//       <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//         Signup
//       </Link>

      
//       <Link to="/Donorp" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//        DonorForm
//       </Link>


//       <Link to="/Medicine" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//        AvailMedForm
//       </Link>


//       <Link to="/Medmanger" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//       Medmanger
//       </Link>



//       <Link to="/NeedyProfile" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
//            NeedyProfile
//       </Link>
      
//     </nav>
//   );
// }



import { Link } from "react-router-dom";
import { Heart, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-[#E4E9DF] bg-[#F8F8F2]/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.08 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#214D3D] text-[#D8E8CF]"
          >
            <Heart size={23} fill="currentColor" />
          </motion.div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#214D3D]">
              Ek<span className="font-serif italic text-[#739477]">Zaria.</span>
            </h1>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#87958B]">
              Sharing with purpose
            </p>
          </div>
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 sm:flex">

          <Link
            to="/login"
            className="rounded-full border border-[#C9D8CA] px-7 py-3 text-sm font-semibold text-[#214D3D] transition-all duration-300 hover:border-[#214D3D] hover:bg-[#EAF0E7]"
          >
            Login
          </Link>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to="/signup"
              className="flex items-center gap-2 rounded-full bg-[#214D3D] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-green-900/10 transition-all duration-300 hover:bg-[#32634D]"
            >
              Sign Up
              <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DCE5DA] text-[#214D3D] sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#E4E9DF] bg-[#F8F8F2] sm:hidden"
          >
            <div className="flex flex-col gap-3 px-6 py-5">

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-[#C9D8CA] py-3 text-center font-semibold text-[#214D3D] transition hover:bg-[#EAF0E7]"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#214D3D] py-3 font-semibold text-white transition hover:bg-[#32634D]"
              >
                Sign Up
                <ArrowRight size={17} />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
