import { Auth } from '@/app/auth'
import { useAuthStore } from '@/infrastructure/state'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../presentation/pages'
import { Layout } from '../presentation/shared/Layout'
import { useAuth } from '@/auth'

export const AppRoutes: React.FC = () => {
  useAuth()
  const { user } = useAuthStore()

  if (user === null) {
    return <div>Loading...</div>
  }

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
