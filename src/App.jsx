import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import Navbar from './components/Navbar'
import ManagePermissions from './pages/PermissionsManagement'
import PrivacyPolicy from './pages/AdditionalInformation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <Layout >
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path='/permissions' element={<ManagePermissions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Layout>

    </>
  )
}

export default App
