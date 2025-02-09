import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Picture from "../assets/images/ustadz-abi-nu-anyar.jpeg";

export default function Speaker() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary">Penceramah</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Foto Penceramah */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={Picture}
            alt="Ustadz"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Informasi Penceramah */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">Ustadz Abi Hidayat</h3>
          <p className="mt-2 text-gray-600">
          Ustadz Adi Hidayat, kelahiran 11 September 1984 di Pandeglang, Banten, 
          adalah seorang ulama dan pendakwah terkemuka di Indonesia yang sangat dikenal 
          karena penguasaan mendalamnya terhadap Al-Qur'an dan hadits. Beliau menempuh pendidikan 
          agama di Pondok Pesantren Darul Arqam Muhammadiyah Garut dan melanjutkan studi di Libya.
           Selain aktif dalam dakwah, Ustadz Adi Hidayat juga mendirikan Quantum Akhyar Institute
            pada tahun 2013 dan memiliki kanal YouTube "Adi Hidayat Official" untuk menyebarkan ajaran Islam. 
            Sejak 2022, beliau menjabat sebagai Wakil Ketua I Majelis Tabligh Pimpinan Pusat Muhammadiyah.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://youtube.com/AdiHidayatOfficial" target="_blank">
              <FaYoutube className="text-red-500 text-2xl" />
            </a>
            <a href="https://instagram.com/adihidayatofficial" target="_blank">
              <FaInstagram className="text-pink-500 text-2xl" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
