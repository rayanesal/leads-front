import api from '@/services/api';

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'NEW' | 'IN_CONTACT' | 'CONVERTED';
  createdAt: string;
};

type ListAllFilters = {
  startDate: Date | null;
  endDate: Date | null;
  status: string;
  limit: number;
  offset: number;
};

type LeadsResponse = {
  leads: Lead[];
  total: number;
};

export const getAllLeads = async (filters: ListAllFilters): Promise<LeadsResponse> => {
  const params = new URLSearchParams();

  if (filters.startDate) params.append('data_from', filters.startDate.toISOString().split('T')[0]);
  if (filters.endDate) params.append('data_to', filters.endDate.toISOString().split('T')[0]);
  if (filters.status) params.append('status', filters.status);
  params.append('limit', String(filters.limit));
  params.append('offset', String(filters.offset));

  const response = await api.get<LeadsResponse>(`/list-all?${params.toString()}`);
  return response.data;
};
