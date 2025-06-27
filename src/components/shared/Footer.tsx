import { eklavyaLogo } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#35113D]  text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo */}
        <div>
          <div className="mb-4">
            <div 
              className="rounded-lg flex items-center justify-center bg-eklavya-dark-green"
              style={{ width: '50px', height: '50px', borderRadius: '9.23px' }}
            >
              <Image
                src={eklavyaLogo}
                alt="Eklavya Logo"
                width={39}
                height={37}
                className="brightness-0 invert"
              />
            </div>
          </div>
        </div>

        {/* Column 2: Reach us */}
        <div>
          <h3 className="font-semibold mb-4">Reach Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-white">📞</span> <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✉️</span> <span>demo@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-white">📍</span>
              <span>
                132 Dartmouth Street
                <br />
                Boston, Massachusetts 02156
                <br />
                United States
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>

        {/* Column 5: Help & Support */}
        <div>
          <h3 className="font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Parents</a>
            </li>
            <li>
              <a href="#">Teachers</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
