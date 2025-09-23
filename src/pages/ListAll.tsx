import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import api from '@/services/api';
import { Select, type SelectOption } from '@/components/Select';
import { TableHeader, TableRow } from '@/components/Table';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'NEW' | 'IN_CONTACT' | 'CONVERTED';
  createdAt: string;
}

export default function ListAll() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [status, setStatus] = useState('');

  const statusFilterOptions: SelectOption[] = useMemo(
    () => [
      { value: '', label: 'Todos' },
      { value: 'NEW', label: 'Novo' },
      { value: 'IN_CONTACT', label: 'Em Contato' },
      { value: 'CONVERTED', label: 'Convertido' },
    ],
    []
  );

  const getRowStatusOptions = (current: Lead['status']): SelectOption[] => {
    if (current === 'NEW') {
      return [
        { value: 'NEW', label: 'Novo', disabled: true },
        { value: 'IN_CONTACT', label: 'Em Contato' },
        { value: 'CONVERTED', label: 'Convertido' },
      ];
    }
    if (current === 'IN_CONTACT') {
      return [
        { value: 'IN_CONTACT', label: 'Em Contato' },
        { value: 'CONVERTED', label: 'Convertido' },
      ];
    }
    return [
      { value: 'CONVERTED', label: 'Convertido' },
    ];
  };

  const fetchLeads = async () => {
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('data_from', startDate.toISOString().split('T')[0]);
      if (endDate) params.append('data_to', endDate.toISOString().split('T')[0]);
      if (status) params.append('status', status);

      const response = await api.get(`/list-all?${params.toString()}`);
      setLeads(response.data.leads);
    } catch (error) {
      toast.error('Erro ao buscar leads.');
      console.error(error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'IN_CONTACT' | 'CONVERTED') => {
    try {
      await api.get(`/toggle-status?id=${id}&status=${newStatus}`);
      toast.success('Status do lead atualizado!');
      fetchLeads();
    } catch (error) {
      toast.error('Erro ao atualizar status do lead.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [startDate, endDate, status]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Lista de Leads</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center space-x-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Data de Início</label>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Data de Fim</label>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <Select
            value={status}
            onChange={setStatus}
            options={statusFilterOptions}
          />
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <table className="min-w-full">
          <TableHeader titles={["Nome", "Email", "Telefone", "Data", "Status"]} />
          <tbody>
            {leads.map((lead) => (
              <TableRow
                key={lead.id}
                cells={[
                  lead.name,
                  lead.email,
                  lead.phone,
                  new Date(lead.createdAt).toLocaleDateString(),
                  <Select
                    key={`status-${lead.id}`}
                    value={lead.status}
                    onChange={(value) => handleStatusChange(lead.id, value as 'IN_CONTACT' | 'CONVERTED')}
                    options={getRowStatusOptions(lead.status)}
                    disabled={lead.status === 'CONVERTED'}
                  />,
                ]}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}