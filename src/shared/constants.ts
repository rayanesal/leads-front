import type { SelectOption } from '@/components/Select';
import type { Lead } from '@/services/list-all';

export const statusFilterOptions: SelectOption[] = [
  { value: '', label: 'Todos' },
  { value: 'NEW', label: 'Novo' },
  { value: 'IN_CONTACT', label: 'Em Contato' },
  { value: 'CONVERTED', label: 'Convertido' },
];

export const getRowStatusOptions = (current: Lead['status']): SelectOption[] => {
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
  return [{ value: 'CONVERTED', label: 'Convertido' }];
};
