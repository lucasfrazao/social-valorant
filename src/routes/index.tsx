import { Routes, Route, Navigate } from 'react-router-dom'
import Accounts from '../views/Accounts'
import Home from '../views/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/accounts" element={<Accounts />} />
    </Routes>
  )
}
