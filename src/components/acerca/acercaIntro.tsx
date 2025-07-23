// components/acerca/AcercaIntro.tsx
import Image from "next/image";
import { motion } from "framer-motion"

export const AcercaIntro: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-8"
    >
        <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden">
            <Image
            src="/photos/cipri2.jpg" // reemplazá con una imagen real
            alt="Foto de la fotógrafa"
            fill
            className="object-cover"
            />
        </div>
        <div className="text-center md:text-left max-w-xl space-y-4">
            <h2 className="text-3xl font-bold text-wheat">Hola, soy Cisa</h2>
            <p className="text-base leading-relaxed text-wheat">
                Soy fotógrafa con pasión por capturar momentos auténticos y naturales. Mi trabajo se inspira en la luz, las emociones y los pequeños detalles que cuentan grandes historias. Me especializo en sesiones al aire libre, producto y eventos sociales.
            </p>
        </div>
    </motion.div>
  );
}

export default AcercaIntro