import { 
  eklavyaLogo, 
  phoneCallIcon, 
  sharpEmailIcon, 
  locationFilledIcon,
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  youtubeIcon,
  instagramIcon
} from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#35113D] text-white relative">
      <div className="max-w-[1273px] pt-10 pb-16 mx-auto px-4">
        <div className="flex justify-between items-start">
          {/* Logo and Address Section */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="relative size-14 mt-10" >
                  <div className="absolute inset-0 bg-eklavya-dark-green rounded-xl" />
                  <Image
                    src={eklavyaLogo}
                    alt="Eklavya Logo"
                    width={47}
                    height={44}
                    className="absolute left-[6.46px] top-[7.38px] brightness-0 invert"
                  />
                </div>
                <div className="text-5xl font-semibold font-Quicksand leading-[65.56px] tracking-wide">
                  eklavya
                </div>
              </div>
              <div className="text-sm font-semibold font-Quicksand leading-tight tracking-tight ml-[80px] mt-[-20px]">
                making learning accessible
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-start">
                <Image
                  src={locationFilledIcon}
                  alt="Location"
                  width={24}
                  height={24}
                  className="text-white"
                />
                <div className="max-w-[288px] text-base font-graphie tracking-tight">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-6 w-24">
            <div className="text-[#B289BB] text-lg font-graphie leading-relaxed tracking-tight">
              Company
            </div>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              Sitemap
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-6 w-32">
            <div className="text-[#B289BB] text-lg font-graphie leading-relaxed tracking-tight">
              Legal
            </div>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              Terms & Services
            </a>
            <a
              href="#"
              className="text-white text-base font-graphie underline tracking-tight"
            >
              Terms of Use
            </a>
          </div>

          {/* Help & Support Section */}
          <div className="flex flex-col gap-6">
            <div className="text-[#B289BB] text-lg font-graphie leading-relaxed tracking-tight">
              Help & Support
            </div>
            <div className="flex items-center gap-6">
              <Image src={phoneCallIcon} alt="Phone" width={24} height={24} />
              <span className="text-white text-base font-graphie tracking-tight">
                +1012 3456 789
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Image src={sharpEmailIcon} alt="Email" width={24} height={24} />
              <a
                href="mailto:demo@gmail.com"
                className="text-white text-base font-graphie underline tracking-tight"
              >
                demo@gmail.com
              </a>
            </div>
            <button className="px-4 py-2.5 bg-[#5E256B] rounded-[10.05px] text-neutral-200 text-base font-bold font-graphie uppercase leading-none tracking-wide">
              Send a message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright and Social Links */}
      <div className="max-w-[1255px] mx-auto px-4">
        <div className="border-t border-white/30 pt-8 pb-8 flex justify-between items-center">
          <div className="text-white text-base font-graphie tracking-tight">
            © 2025 Eklavya. All rights reserved.
          </div>
          <div className="flex gap-2">
            {/* Social Media Icons */}
            <a href="#" className="hover:opacity-80">
              <Image src={facebookIcon} alt="Facebook" width={24} height={24} className="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src={twitterIcon} alt="X (Twitter)" width={24} height={24} className="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} className="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src={youtubeIcon} alt="YouTube" width={24} height={24} className="" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Image src={instagramIcon} alt="Instagram" width={24} height={24} className="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
