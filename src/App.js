import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container , Row, Col} from 'react-bootstrap';
import Signup from './components/Signup';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoutes';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<Login />} />
              <Route path='/home' 
              element = {<ProtectedRoute><Home /></ProtectedRoute>}
               />
              <Route path='/signup' element = {<Signup />} />
            </Routes>
          </BrowserRouter>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
