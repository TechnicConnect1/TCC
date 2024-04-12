import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import GlobalStyle from './styles/global';
import { Servico, Orcamento, Orcamento1,Home, Cadastro, Login, Feed} from './pages';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servico' element={<Servico />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/orcamento' element={<Orcamento />} />
        <Route path='/orcamento1' element={<Orcamento1 />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
