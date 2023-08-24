import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Feed/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
