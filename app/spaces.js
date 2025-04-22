import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpaceCard from '../components/SpaceCard';

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: spaces, error } = await supabase.from('spaces').select('*');

  if (error) {
    console.error('Error fetching spaces:', error);
    return { props: { spaces: [] } };
  }

  return {
    props: { spaces },
    revalidate: 60, // ISR: Revalidate every 60 seconds
  };
}

export default function Spaces({ spaces }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-12"
        >
          Nos espaces de coworking
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <SpaceCard key={space.id} space={space} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}