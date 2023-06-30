import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  )
}
