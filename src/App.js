import './App.css';
import AdminPage from './Components/AdminPage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Sign_up from './Components/Sign_up';
import Login from './Components/Login';

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact Component={Sign_up} />
        <Route path='/login' exact Component={Login} />
        <Route path='/admin' exact Component={AdminPage} />
      </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
