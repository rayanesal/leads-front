import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import NewRegister from '@/pages/NewRegister';
import ListAll from '@/pages/ListAll';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10">
        <Routes>
          <Route path="/" element={<NewRegister />} />
          <Route path="/list" element={<ListAll />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
