import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 py-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Bienvenue dans votre espace de coworking
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Des bureaux modernes, des salles de réunion et une communauté dynamique.
          </p>
          <Link href="/spaces">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Découvrir nos espaces
            </button>
          </Link>
        </motion.section>

        {/* Features Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">Espaces flexibles</h3>
              <p className="text-gray-600">
                Bureaux partagés, privés ou salles de réunion adaptés à vos besoins.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">Communauté</h3>
              <p className="text-gray-600">
                Rejoignez une communauté de professionnels et participez à nos événements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white shadow-lg rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">Équipements modernes</h3>
              <p className="text-gray-600">
                Wi-Fi haut débit, café à volonté et salles équipées.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}