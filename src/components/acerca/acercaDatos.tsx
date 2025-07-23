import { motion } from "framer-motion"
// components/acerca/AcercaDatos.tsx
const datos = [
  { label: "Nombre", value: "Cipriana Sayavedra" },
  { label: "Ubicación", value: "Mendoza, Argentina" },
  { label: "Signo", value: "Leo" },
  { label: "Cumple", value: "07/08/2000" },
];

export const AcercaDatos: React.FC = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {datos.map((d) => (
            <div
            key={d.label}
            className="bg-chocolate text-wheat rounded-2xl p-4 shadow-lg"
            >
                <h3 className="text-sm uppercase tracking-wide">{d.label}</h3>
                <p className="text-lg font-semibold">{d.value}</p>
            </div>
            ))}
        </div>
    </motion.div>
  );
}

export default AcercaDatos