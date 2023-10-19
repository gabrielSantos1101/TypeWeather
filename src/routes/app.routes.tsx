import { Route, Routes } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Search } from '../pages/Search'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
