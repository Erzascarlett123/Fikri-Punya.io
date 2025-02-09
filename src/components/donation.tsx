import { FaGift, FaMoneyBillWave } from "react-icons/fa";

export default function Donation() {
  return (
    <section className="py-12 text-center bg-gray-100">
      <h2 className="text-3xl font-bold text-primary">Hadiah & Donasi</h2>
      <p className="mt-2 text-gray-700">Jika ingin memberi hadiah:</p>
      <div className="mt-4 flex flex-col gap-2">
        <p><FaMoneyBillWave className="inline text-green-500" /> Transfer ke Dana / BCA</p>
        <p><FaGift className="inline text-yellow-500" /> Bawa hadiah langsung ke lokasi</p>
      </div>
    </section>
  );
}
