import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '@/services/api';

export default function NewRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const whatsappContact = import.meta.env.VITE_WHATSAPP_CONTACT;

      await api.post('/new-register', { name, email, phone });
      toast.success('Lead cadastrado com sucesso!');
      window.open(`https://wa.me/${whatsappContact}`, '_blank');
    } catch (error) {
      toast.error('Erro ao cadastrar lead.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Captura de Leads</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Telefone
          </label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cadastrar e ir para o WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}