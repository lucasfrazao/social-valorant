import { Routes, Route, Navigate } from 'react-router-dom'
import AgentsInfo from '../views/AgentsInfo'
import GameInfo from '../views/GameInfo'
import Home from '../views/Home'
import MapsInfo from '../views/MapsInfo'
import WeaponsInfo from '../views/WeaponsInfo'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/general" element={<GameInfo />} />
      <Route path="/maps" element={<MapsInfo />} />
      <Route path="/agents" element={<AgentsInfo />} />
      <Route path="/weapons" element={<WeaponsInfo />} />
    </Routes>
  )
}
