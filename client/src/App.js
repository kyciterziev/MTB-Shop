import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Layout from "./components/layout/Layout";
import HomePage from './pages/home/HomePage';
import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import './App.css';

function App() {
    return (
        <div className="main">
            <AuthProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact-us" element={<ContactsPage />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>} />
                    </Route>
                </Routes>
            </AuthProvider>
        </div >
    );
}

export default App;
