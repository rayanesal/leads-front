import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Select } from '@/components/Select';
import { Input } from '@/components/Input';
import { TableHeader, TableRow } from '@/components/Table';
import { getAllLeads, type Lead } from '@/services/list-all';
import { toggleLeadStatus } from '@/services/toggle-status';
import { getRowStatusOptions, statusFilterOptions } from '@/shared/constants';

export default function ListAll() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [status, setStatus] = useState('');

  const fetchLeads = async () => {
    try {
      const leads = await getAllLeads({ startDate, endDate, status });
      setLeads(leads);
    } catch (error) {
      toast.error('Erro ao buscar leads.');
      console.error(error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'IN_CONTACT' | 'CONVERTED') => {
    try {
      await toggleLeadStatus(id, newStatus);
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
        <Input
          id="date_from"
          label="Data de Início"
          type="date"
          value={startDate ? startDate.toISOString().split('T')[0] : ''}
          onChange={(v) => setStartDate(v ? new Date(v) : null)}
          containerClassName="mb-0"
        />
        <Input
          id="date_to"
          label="Data de Fim"
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(v) => setEndDate(v ? new Date(v) : null)}
          containerClassName="mb-0"
        />
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <Select value={status} onChange={setStatus} options={statusFilterOptions} />
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