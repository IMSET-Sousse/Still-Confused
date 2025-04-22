import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    spaceId: '',
    date: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Réservation envoyée avec succès !');
        setFormData({ name: '', email: '', spaceId: '', date: '' });
      } else {
        setStatus('Erreur lors de l’envoi. Veuillez réessayer.');
      }
    } catch (error) {
      setStatus('Erreur lors de l’envoi. Veuillez réessayer.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="spaceId" className="block text-gray-700 font-semibold mb-2">
          Espace
        </label>
        <select
          id="spaceId"
          name="spaceId"
          value={formData.spaceId}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Sélectionnez un espace</option>
          <option value="1">Bureau partagé</option>
          <option value="2">Bureau privé</option>
          <option value="3">Salle de réunion</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Réserver
      </button>
      {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
    </motion.form>
  );
}