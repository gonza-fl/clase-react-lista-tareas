import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Landing } from './pages/Landing.jsx';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
