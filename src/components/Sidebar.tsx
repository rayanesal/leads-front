import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-slate-100 p-6">
      <img src="leads_logo.svg" alt="Leads Logo" className="mt-10 w-32 mx-auto mb-10" />
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block p-2 rounded hover:bg-slate-700">
              Captura de Leads
            </Link>
          </li>
          <li>
            <Link to="/list" className="block p-2 rounded hover:bg-slate-700">
              Lista de Leads
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
