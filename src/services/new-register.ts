import api from '@/services/api';
import { toast } from 'react-toastify';

type LeadData = {
  name: string;
  email: string;
  phone: string;
}

export const newRegister = async (data: LeadData) => {
  const whatsappContact = import.meta.env.VITE_WHATSAPP_CONTACT;

  const response = await api.post('/new-register', data);

  if (response.status === 201) {
    toast.success('Lead cadastrado com sucesso!');
  }

  window.open(`https://wa.me/${whatsappContact}`, '_blank');
};