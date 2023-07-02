import { Auth } from '@/app/auth'
import { useAuthStore } from '@/infrastructure/state'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../presentation/pages'
import { Layout } from '../presentation/shared/Layout'

export const AppRoutes: React.FC = () => {
  const { user } = useAuthStore()
  return (
    <BrowserRouter>
      {user === undefined && <Auth />}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
