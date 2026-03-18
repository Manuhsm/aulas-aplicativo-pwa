import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

const router = createBrowserRouter([
 {
   path: '',
   element: <PaginaInicial />,
 },
]);


function App() {
  return (
   <>
     <Cabecalho />
     <RouterProvider router={router} />
     <Rodape />
   </>
 );
}
export default App;