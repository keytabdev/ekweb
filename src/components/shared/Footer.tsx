import { eklavyaLogo, phoneCallIcon, sharpEmailIcon, locationFilledIcon } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#35113D] text-white pt-6 pb-10">
      <div 
        className="mx-auto flex justify-center items-start"
        style={{ 
          width: '1924px', 
          padding: '64px 144px',
          gap: '114px'
        }}
      >
        {/* Column 1: Logo */}
        <div className="flex flex-col items-start">
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
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Reach Us</h3>
          <div className="space-y-6">
            <div className="flex items-center" style={{ gap: '25px' }}>
              <Image 
                src={phoneCallIcon} 
                alt="Phone" 
                width={24} 
                height={24} 
              />
              <span style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>+1012 3456 789</span>
            </div>
            <div className="flex items-center" style={{ gap: '25px' }}>
              <Image 
                src={sharpEmailIcon} 
                alt="Email" 
                width={24} 
                height={24} 
              />
              <span style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>demo@gmail.com</span>
            </div>
            <div className="flex items-start" style={{ gap: '25px' }}>
              <Image 
                src={locationFilledIcon} 
                alt="Location" 
                width={24} 
                height={24} 
                className="mt-1"
              />
              <span style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>
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
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>About</a>
            </li>
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Contact</a>
            </li>
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Privacy Policy</a>
            </li>
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Terms & Services</a>
            </li>
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Terms of Use</a>
            </li>
          </ul>
        </div>

        {/* Column 5: Help & Support */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Parents</a>
            </li>
            <li>
              <a href="#" style={{
                color: '#FFF',
                fontFamily: 'Graphie',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                letterSpacing: '0.16px'
              }}>Teachers</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
