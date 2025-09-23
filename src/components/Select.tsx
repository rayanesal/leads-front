export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
};

export function Select({ value, onChange, options, className = '', disabled = false, name, id }: SelectProps) {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${className}`}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
