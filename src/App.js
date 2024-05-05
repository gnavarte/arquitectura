import './App.css';
import UserProvider from './context/UserProvider';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <UserProvider>
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    </UserProvider>
  );
}

export default App;
