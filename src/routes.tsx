import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produto } from './pages/Produtos'
import { Lista } from './pages/Lista'
import { Contato } from './pages/Contato'
import { Contatos } from './pages/Contatos'


export const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/carrinho'
            element={<Carrinho />}
          />
          <Route
            path='/produto'
            element={<Produto />}
          />
          <Route
            path='/produto/:id'
            element={<Produto />}
          />
          <Route
            path='/contato'
            element={<Contato />}
          />
          <Route
            path='/contato/:id'
            element={<Contato />}
          />
          <Route
            path='/lista'
            element={<Lista />}
          />
          <Route
            path='/contatos'
            element={<Contatos />}
          />
          <Route
            path='/contatos/:id'
            element={<Contatos />}
          />


        </Routes>
      </BrowserRouter>
    </>
  )
}
