import { Separator } from "@/components/ui/separator";
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Facebook, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Our Address</h4>
            <span>1234 Learning St. </span>
            <span className="md:block">SkillUp City, 56789</span>
            <p className="text-center">Country</p>
          </div>
  
          {/* Contact Details Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Contact Us</h4>
            <p>Email: support@skillup.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
  
          {/* Social Links Section */}
          <div className="place-self-center">
            <h4 className="text-xl font-semibold mb-4 text-center">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Separator */}
        <Separator className="my-6" />
  
        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkillUp. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;
