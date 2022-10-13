import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../config/firebase";
import swal from 'sweetalert';




const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //-----------------------
  const handleRegister = () => {
    registerUser(email, password)
      .then((userCredential) => {
        swal("Success!", "You have successfully registered!", "success");
        navigate("/login");
      })
      .catch((error) => {
        swal("Error!", "Something went wrong!", "error");
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  // ----------------------



  return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-700">
        <div>
          <div className="w-screen max-w-sm rounded-xl bg-white px-10 py-8 shadow-md">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Register
              </h1>
              <div>
                <label
                  className="mb-1 block font-semibold text-gray-600">Email
                <input
                  placeholder="email@address.com"
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
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className="w-full rounded-md bg-indigo-50 px-4 py-2 outline-none"
                /></label>
              </div>
            </div>
            <button onClick={handleRegister} className="mt-4 w-full rounded-md bg-gradient-to-tr from-blue-600 to-indigo-600 py-2 text-lg tracking-wide text-slate-50">
              Register
            </button>

            <div className="mt-4 text-center">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                style={{ color: "#293462", fontWeight: "bold", cursor: "pointer" }}>
                Log in
              </span>
          </div>

          </div>
        </div>
      </div>
);

};

export default Register;
