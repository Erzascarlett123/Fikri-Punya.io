import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Schedule() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-primary">Jadwal & Lokasi</h2>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-primary" />
          12 Rabiul Awal 1446 H - 10 Februari 2025
        </p>
        <p className="mt-2 text-lg flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          Masjid Agung Al-Ikhlas, Jakarta
        </p>
      </motion.div>
    </section>
  );
}
