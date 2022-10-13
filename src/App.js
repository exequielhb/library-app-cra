import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksForm from "./components/BooksForm";
import BooksList from "./components/BooksList";

import Login from "./components/login/Login";
import Register from "./components/login/Register";
import { AuthProvider } from "./context/authContext";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-200 font-sans">
      <BrowserRouter>
        {/* Provider corresponde a la Api context */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />

            {/* Rutas del login/register */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Rutas privadas */}
            {/* Redirige al componente Loginsc SOLAMENTE si esta logeado */}
            <Route
              path="booksform"
              element={
                <PrivateRoutes>
                  <BooksForm />
                </PrivateRoutes>
              }
            />

            <Route
              path="updatebook/:id"
              element={
                <PrivateRoutes>
                  <BooksForm />
                </PrivateRoutes>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
