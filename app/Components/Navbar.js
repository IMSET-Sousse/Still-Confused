import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold">Coworking Hub</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/spaces" className="hover:underline">
            Espaces
          </Link>
          <Link href="/book" className="hover:underline">
            Réserver
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/spaces" className="hover:underline">
            Espaces
          </Link>
          <Link href="/book" className="hover:underline">
            Réserver
          </Link>
        </div>
      )}
    </nav>
  );
}


