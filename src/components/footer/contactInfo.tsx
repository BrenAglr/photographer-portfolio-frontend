import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-2">
      <p className="text-base">cisa.ph07@gmail.com</p>
      <p className="text-base">+54 261 541 6440</p>
      <Link href="/contact" className="text-sm ">
        Contacto
      </Link>
      <div className="flex gap-4 mt-2">
        <a
          href="https://www.instagram.com/cisa___photos?igsh=MTk5amE4cWV0eTd2Zw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} className="hover:text-pink-400 transition" />
        </a>
        {/* <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} className="hover:text-blue-400 transition" />
        </a> */}
      </div>
    </div>
  );
}
export default ContactInfo