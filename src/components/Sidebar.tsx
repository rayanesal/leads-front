import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">Leads</h1>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="block p-2 rounded hover:bg-gray-700">
              Captura de Leads
            </Link>
          </li>
          <li>
            <Link to="/list" className="block p-2 rounded hover:bg-gray-700">
              Lista de Leads
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
