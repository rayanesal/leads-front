import api from '@/services/api';

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'NEW' | 'IN_CONTACT' | 'CONVERTED';
  createdAt: string;
}

type ListAllFilters = {
  startDate: Date | null;
  endDate: Date | null;
  status: string;
}


export const getAllLeads = async (filters: ListAllFilters): Promise<Lead[]> => {
  const params = new URLSearchParams();
  if (filters.startDate) params.append('data_from', filters.startDate.toISOString().split('T')[0]);
  if (filters.endDate) params.append('data_to', filters.endDate.toISOString().split('T')[0]);
  if (filters.status) params.append('status', filters.status);

  const response = await api.get<{ leads: Lead[] }>(`/list-all?${params.toString()}`);
  return response.data.leads;
};
