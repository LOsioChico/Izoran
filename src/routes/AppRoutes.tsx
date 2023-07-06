import { Auth } from '@/app/auth'
import { useAuthStore } from '@/infrastructure/state'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, NotFound, SearchPage } from '../presentation/pages'
import { Layout } from '../presentation/shared/Layout'
import { useAuth } from '@/auth'
import { ImSpinner9 } from 'react-icons/im'

export const AppRoutes: React.FC = () => {
  useAuth()
  const { user } = useAuthStore()

  if (user === null) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <ImSpinner9 className='h-12 w-12 animate-spin' />
      </div>
    )
  }

  return (
    <BrowserRouter>
      {user === undefined && <Auth />}
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/search/:query' element={<SearchPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
