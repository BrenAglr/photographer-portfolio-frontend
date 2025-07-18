import { motion } from "framer-motion"
// components/acerca/AcercaFrase.tsx
export default function AcercaFrase() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
    >
        <div className="text-center max-w-2xl mx-auto">
            <p className="italic text-xl font-light text-wheat">
                “Creo en la belleza de lo simple, en la luz natural y en las historias
                que se cuentan con una imagen sincera.”
            </p>
        </div>
    </motion.div>

  );
}
