import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import Layout from "./components/layout/Layout";
import HomePage from './pages/home/HomePage';
import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import CatalogPage from "./pages/catalog/CatalogPage";

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
                    </Route>
                </Routes>
            </AuthProvider>
        </div >
    );
}

export default App;