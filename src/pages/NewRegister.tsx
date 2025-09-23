import { useState } from 'react';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { newRegister } from '@/services/new-register';
import { toast } from 'react-toastify';

export default function NewRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await newRegister({ name, email, phone });
    } catch (error) {
      toast.error('Erro ao cadastrar lead.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Captura de Leads</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <Input id="name" label="Nome" value={name} onChange={setName} required containerClassName="mb-4" />
        <Input id="email" label="Email" type="email" value={email} onChange={setEmail} required containerClassName="mb-4" />
        <Input id="phone" label="Telefone" value={phone} onChange={setPhone} required containerClassName="mb-6" />
        <div className="flex items-center justify-between">
          <Button type="submit" variant="success">
            Cadastrar e ir para o WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}