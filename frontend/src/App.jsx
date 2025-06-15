import { Routes, Route } from 'react-router-dom';
import Logger from './pages/Logger';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Logger />} />
    </Routes>
  );
}

export default App;
