import api from '@/services/api';
import { toast } from 'react-toastify';

export const toggleLeadStatus = async (id: string, newStatus: 'IN_CONTACT' | 'CONVERTED') => {
  await api.get(`/toggle-status?id=${id}&status=${newStatus}`);
  toast.success('Status do lead atualizado!');
};
