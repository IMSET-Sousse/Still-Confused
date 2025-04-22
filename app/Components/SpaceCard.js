import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function SpaceCard({ space }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Image
        src={space.image || '/placeholder.jpg'}
        alt={space.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
        <p className="text-gray-600 mb-4">{space.description}</p>
        <p className="text-blue-600 font-bold mb-4">{space.price} €/jour</p>
        <Link href="/book">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Réserver
          </button>
        </Link>
      </div>
    </motion.div>
  );
}