"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactText = () => {
  return (
    <div className="flex flex-col h-full justify-top sm:p-10 text-chocolate">
      <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
        ¿Tenés una idea en mente? Contame y hagámosla realidad juntas.
      </h2>

      <div className="transition">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-xl rounded-2xl p-8 mb-8 space-y-6 text-chocolate
            bg-white/10 backdrop-blur-md border border-white/20
            shadow-xl shadow-black/30"
        >
          <h4 className="text-[16px] md:text-[18px] truncate w-full text-left text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-snug">
            cisa.ph07@gmail.com
          </h4>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-snug">
            +54 261 541 6440
          </h4>

          <div className="flex gap-4 my-4">
            <a
              href="https://www.instagram.com/cisa___photos?igsh=MTk5amE4cWV0eTd2Zw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={32} className="hover:text-pink-400 transition" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} className="hover:text-blue-400 transition" />
            </a> */}
          </div>
        </motion.div>

        <p className="text-base sm:text-lg text-softblack/80">
        Momentos únicos merecen ser retratados. Estoy a un mensaje de distancia.
        </p>
      </div>
    </div>
  );
};

export default ContactText;
