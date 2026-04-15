import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import ListaTarefas from "./paginas/ListaTarefas/ListaTarefas";
import CadastroCliente from "./paginas/CadastroCliente/CadastroCliente";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ListaClientes from './paginas/ListaClientes/ListaClientes';

const router = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },
  {
        path: 'lista-produtos',
        element: <ListaProdutos />,
  },

   {
        path: 'lista-tarefas',
        element: <ListaTarefas />,
  },
  
  {
    path: "lista-clientes",
    element: <ListaClientes />,
  },
  
  {
        path: 'cadastro-cliente',
        element: <CadastroCliente />,
  },
  

  {
    path: "*",
    element: <h3>Página não encontrada!!</h3>,
  },

]);


function App() {
  return (
   <>
     <Cabecalho />
     <RouterProvider router={router} />
     <Rodape />
     <ToastContainer />
   </>
 );
}
export default App;