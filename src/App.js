import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, ToastUtils } from './components';
import { Auth, Dashboard, Transactions } from './pages';

function App() {
  return (
    <BrowserRouter>
      <ToastUtils />
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='auth' element={<Auth />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;