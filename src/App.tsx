import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;

