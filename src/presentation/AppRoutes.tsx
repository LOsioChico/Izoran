import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages'
import { Layout } from './shared/Layout'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
