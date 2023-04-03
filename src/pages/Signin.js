// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Layout from "../components/Layout/Layout";
// import { BsFillEyeFill } from "react-icons/bs";
// import { toast } from "react-toastify";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import OAuth from "../components/OAuth";
// import "../styles/signin.css";

// export const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = formData;
//   const navaigate = useNavigate();

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   //loginHandler
//   const loginHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const auth = getAuth();
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       if (userCredential.user) {
//         toast.success("Login Success");
//         navaigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Invalid E-mail or Password");
//     }
//   };
//   return (
//     <Layout>
//       <div className="d-flex align-items-center justify-content-center w-100 mt-4">
//         <form className="bg-light p-4" onSubmit={loginHandler}>
//           <h4 className="bg-dark p-2 mt-2 text-light text-center">Sign In </h4>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={onChange}
//               className="form-control"
//               id="email"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={onChange}
//               className="form-control"
//               id="password"
//             />
//             <span>
//               show password{" "}
//               <BsFillEyeFill
//                 className="ms-2"
//                 style={{ cursor: "pointer" }}
//                 onClick={() => {
//                   setShowPassword((prevState) => !prevState);
//                 }}
//               ></BsFillEyeFill>
//             </span>
//             <Link to="/forgotPassword">Forgot Password</Link>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Sign in{" "}
//           </button>
//           <OAuth />
//           <div className="mt-2">
//             <span>New User </span>
//             <Link to="/signup">Sign up</Link>
//           </div>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Signin;
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import Layout from "./../components/Layout/Layout";
import OAuth from "../components/OAuth";
import "../styles/signin.css";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  //loginHandler
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success("Login Success");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email Or Password");
    }
  };
  return (
    <Layout title="signin - house marketplace">
      <div className="row m-4 signin-container ">
        <div className="col-md-6">
          <img src="./assets/SignIn-Image.jpg" alt="login" />
        </div>
        <div className="col-md-6 signin-container-col2">
          <form onSubmit={loginHandler}>
            <h4 className=" text-center">Sign In</h4>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={onChange}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={onChange}
                className="form-control"
                id="password"
              />
            </div>
            <div className="mb-3 show-pass-forgot">
              <span>
                <BsFillEyeFill
                  className="text-danger ms-2 "
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowPassword((prevState) => !prevState);
                  }}
                />{" "}
                show password
              </span>{" "}
              |
              <Link to="/forgot-password" className="ms-4">
                forgot Password
              </Link>
            </div>
            <button type="submit" className="btn signinbutton">
              Sign in
            </button>
            <span className="ms-4 new-user"> New User</span>{" "}
            <Link to="/signup">Sign up !</Link>
            <OAuth />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
