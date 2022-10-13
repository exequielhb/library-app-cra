import React, { useState } from 'react';
import { loginUser } from '../../config/firebase';
import swal from 'sweetalert';

// usamos este hook para navegar entre paginas
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handlePassword = event => {
    setPassword(event.target.value);
  };

  // ------------------------------------

  const handleSubmit = () => {
    loginUser(email, password)
      .then((userCredential) => {
        swal("Success!", "You have successfully logged in!", "success");
        navigate('/booksform');
      })
      .catch((error) => {
        swal("Error!", "Something went wrong!", "error");
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  // ------------------------------------

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-700">
        <div>
          <div className="w-screen max-w-sm rounded-xl bg-white px-10 py-8 shadow-md">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <div>
                <label
                  className="mb-1 block font-semibold text-gray-600">Email
                <input
                  placeholder="your email"
                  value={email}
                  onChange={handleEmail}
                  className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"/></label>
              </div>
              <div>
                <label
                  className="mb-1 block font-semibold text-gray-600"
                >
                  Password
                
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                /></label>
              </div>
            </div>
            <button onClick={handleSubmit} className="mt-4 w-full rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 py-2 text-lg tracking-wide text-slate-50">
              Sign in
            </button>

            <div className="mt-4 text-center">
              No have account?{" "}
              <span
                onClick={() => navigate("/register")}
                style={{ color: "#293462", fontWeight: "bold", cursor: "pointer" }}>
                Register
              </span>
          </div>

          </div>
        </div>
      </div>
  )
};

export default Login;