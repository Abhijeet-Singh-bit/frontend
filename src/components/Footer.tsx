
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              HelpingHands
            </h2>
            <p className="text-sm leading-relaxed">
              We connect donors and needy people to build a better and
              supportive community. Together, we can make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Donate</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Medical Help</li>
              <li className="hover:text-white cursor-pointer">Food Support</li>
              <li className="hover:text-white cursor-pointer">Education Aid</li>
              <li className="hover:text-white cursor-pointer">Emergency Relief</li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect With Us
            </h3>
            <p className="text-sm mb-4">
              Email: support@helpinghands.com
            </p>

            <div className="flex space-x-4">
              <span className="bg-red-500 p-2 rounded-full hover:scale-110 transition">
                {/* <FaFacebookF className="text-white" /> */}
              </span>
              <span className="bg-red-500 p-2 rounded-full hover:scale-110 transition">
                {/* <FaInstagram className="text-white" /> */}
              </span>
              <span className="bg-red-500 p-2 rounded-full hover:scale-110 transition">
                {/* <FaTwitter className="text-white" /> */}
              </span>
              <span className="bg-red-500 p-2 rounded-full hover:scale-110 transition">
                {/* <FaLinkedinIn className="text-white" /> */}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} HelpingHands. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;