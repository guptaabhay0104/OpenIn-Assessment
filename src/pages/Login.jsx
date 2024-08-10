// import React, { useEffect, useState } from "react";
// import { auth, provider } from "../Firebase";
// import { signInWithPopup } from "firebase/auth";
// import { Navigate, useNavigate } from "react-router-dom";
// import google from "../assets/google-icon 1.png";
// import apple from "../assets/apple 1.png";
// import github from "../assets/github.svg";
// import twitter from "../assets/twitter.svg";
// import linkedin from "../assets/linkedin.svg";
// import discord from "../assets/discord.svg";
// import Logo from "../components/Logo";

// const Login = () => {
//   const [value, setValue] = useState("");
//   const [check, setCheck] = useState(true);
//   const navigate = useNavigate();
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem(localStorage.getItem("authenticated") || false)
//   );

//   const handleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         const profilePic = data.user.photoURL;
//         const email = data.user.email;
//         setValue(data.user.email);
//         localStorage.setItem("email", email);
//         localStorage.setItem("pic", profilePic);
//         localStorage.setItem("authenticated", true);
//         setauthenticated(true);
//         navigate("/home");
//         setCheck(false);
//       })
//       .catch((err) => navigate("/"));
//   };

//   const navigateSignup = () => {
//     navigate('/signup');
//   };


//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authenticated");
//     if (loggedInUser) {
//       setauthenticated(true);
//     }
//     setCheck(false);
//   }, []);

//   console.log(authenticated);
//   if (authenticated && !check) {
//     return <Navigate replace to="/home" />;
//   } else {
//     return (
//       <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full">
//         <div className="flex h-[60px] sm:h-[80px] sm:min-h-screen w-full sm:w-[75%] bg-[#605BFF] clipped">
//           <Logo></Logo>
//           <div className=" flex justify-center items-center ml-[15%]">
//             <h1 className=" text-white font-bold text-[2rem] md:text-[3rem] lg:text-[4.5rem] clipped-opposite">
//               BASE
//             </h1>
//           </div>
//           <div className="fixed flex justify-center items-center w-full h-fit bottom-0 clipped-opposite mb-12">
//             <div className="flex gap-x-6">
//               <img src={github} className="w-[34px] h-[34px]" />
//               <img src={twitter} className="w-[34px] h-[34px]" />
//               <img src={linkedin} className="w-[34px] h-[34px]" />
//               <img src={discord} className="w-[34px] h-[34px]" />
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
//           <div className="flex flex-col justify-center gap-4">
//             <div className="flex flex-col justify-between items-start px-6 gap-2">
//               <h2 className="text-[18px] sm:text-[36px] text-black font-bold sm:leading-[43.88px]">
//                 Sign In
//               </h2>
//               <p className="text-[16px] font-lato sm:leading-[19.2px] text-black">
//                 Sign in to your account
//               </p>
//             </div>
//             <div className="flex justify-center items-center gap-[10px]">
//               <button
//                 onClick={handleClick}
//                 className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 "
//               >
//                 <div className="flex justify-between items-center">
//                   <img
//                     src={google}
//                     alt="google"
//                     className="w-[14px] h-[14px]"
//                   />
//                   Sign in with Google
//                 </div>
//               </button>
//               <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
//                 <div className="flex justify-between items-center">
//                   <img src={apple} alt="google" className="w-[14px] h-[14px]" />
//                   Sign in with Apple
//                 </div>
//               </button>
//             </div>
//             <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
//               <form className="flex flex-col text-black px-10 py-6 gap-4">
//                 <div className="flex flex-col justify-between gap-2">
//                   <h1 className="text-[16px] font-lato leading-[19.2px]">
//                     Email Address
//                   </h1>
//                   <input
//                     className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
//                     placeholder="Email..."
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between gap-2">
//                   <h1 className="text-[16px] font-lato leading-[19.2px]">
//                     Password
//                   </h1>
//                   <input
//                     className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
//                     placeholder="Password..."
//                   />
//                 </div>
//                 <p className="text-[#346BD4] cursor-pointer">
//                   Forgot password?
//                 </p>
//                 <button onClick={handleClick} className="bg-[#605BFF] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
//                   Sign In
//                 </button>
//               </form>
//             </div>
//             <p className="text-[#858585] mx-auto">
//               Don't have an account?{" "}
//               <span onClick={navigateSignup} className="text-[#346BD4] cursor-pointer">
//                 Register here
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default Login;


// import React, { useEffect, useState } from "react";
// import { auth, provider } from "../Firebase";
// import { signInWithPopup } from "firebase/auth";
// import { Navigate, useNavigate } from "react-router-dom";
// import google from "../assets/google-icon 1.png";
// import apple from "../assets/apple 1.png";
// import github from "../assets/github.svg";
// import twitter from "../assets/twitter.svg";
// import linkedin from "../assets/linkedin.svg";
// import discord from "../assets/discord.svg";
// import Logo from "../components/Logo";

// const Login = () => {
//   const [authenticated, setauthenticated] = useState(
//     localStorage.getItem("authenticated") || false
//   );
//   const [check, setCheck] = useState(true);
//   const navigate = useNavigate();

//   const handleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         const profilePic = data.user.photoURL;
//         const email = data.user.email;
//         localStorage.setItem("email", email);
//         localStorage.setItem("pic", profilePic);
//         localStorage.setItem("authenticated", true);
//         setauthenticated(true);
//         navigate("/home");
//         setCheck(false);
//       })
//       .catch((err) => navigate("/"));
//   };

//   const navigateSignup = () => {
//     navigate('/signup');
//   };

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("authenticated");
//     if (loggedInUser) {
//       setauthenticated(true);
//     }
//     setCheck(false);
//   }, []);

//   if (authenticated && !check) {
//     return <Navigate replace to="/home" />;
//   } else {
//     return (
//       <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full">
//         {/* Outer Container */}
//         <div className="relative h-[940px] top-[24px] left-[32px] w-[704px] bg-gradient-to-tr from-[#4a48bb] to-[#382ebf] p-[32px] rounded-3xl">
//           {/* Inner Container */}
//           <div className="bg-[#b47ae440] w-[600px] h-[840px] p-[13.02px_21.71px] rounded-tl-[28.94px] relative overflow-hidden">
//             {/* Logo and Text */}
//             <div className="flex flex-col gap-[11.58px]">
//   <Logo className="mb-4" />
//   <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mt-4 font-bold">
//     Generate detailed reports with just one click
//   </h2>
// </div>

//             {/* Image */}
//             <img
//               src="https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qzGBvOUvE7SyJhwY0mi-qasmqR9Uju-~tDu2-Qhj7AmSKuEj3uRp7b39RlXavs4PueBANlIgFX8I8T1mz-12s4yZpmmiHmuCPudajjddLnhCiyl01U5eEoNdPur7UUvA4MbnLPJqj0OnFk~gvLIphUJcVWKmNalEyNL234N-LFxz~Fod~fe5dvcfTTybXeB2uTrjYTi-L7JTGPH7HNcDNyha2ozGde5RLXIKEbhMa8onADgBn1ytVg9OUiuSckQU6jJFm-Ju9l6sYYs0zJ-gl5bygV3KNtZ3sGQ1FYVle8l~ESNclzasqK0OnhKc8wDrtex3MtuI8x~iaMDN04g4JA__"
//               alt="Report"
//               className="absolute bottom-0 right-0 w-[380px] h-auto rounded-tl-[15px]"
//             />
//           </div>
//         </div>

//         {/* Right side with Sign In form */}
//         <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
//           <div className="flex flex-col justify-center gap-4">
//             <div className="flex flex-col justify-between items-start px-6 gap-2">
//               <h2 className="text-[18px] sm:text-[36px] text-black font-bold sm:leading-[43.88px]">
//                 Sign In
//               </h2>
//               <p className="text-[16px] font-lato sm:leading-[19.2px] text-black">
//                 Sign in to your account
//               </p>
//             </div>
//             <div className="flex justify-center items-center gap-[10px]">
//               <button
//                 onClick={handleClick}
//                 className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 "
//               >
//                 <div className="flex justify-between items-center">
//                   <img
//                     src={google}
//                     alt="google"
//                     className="w-[14px] h-[14px]"
//                   />
//                   Sign in with Google
//                 </div>
//               </button>
//               <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
//                 <div className="flex justify-between items-center">
//                   <img src={apple} alt="google" className="w-[14px] h-[14px]" />
//                   Sign in with Apple
//                 </div>
//               </button>
//             </div>
//             <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
//               <form className="flex flex-col text-black px-10 py-6 gap-4">
//                 <div className="flex flex-col justify-between gap-2">
//                   <h1 className="text-[16px] font-lato leading-[19.2px]">
//                     Email Address
//                   </h1>
//                   <input
//                     className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
//                     placeholder="Email..."
//                   />
//                 </div>
//                 <div className="flex flex-col justify-between gap-2">
//                   <h1 className="text-[16px] font-lato leading-[19.2px]">
//                     Password
//                   </h1>
//                   <input
//                     className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
//                     placeholder="Password..."
//                   />
//                 </div>
//                 <p className="text-[#346BD4] cursor-pointer">
//                   Forgot password?
//                 </p>
//                 <button onClick={handleClick} className="bg-[#605BFF] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
//                   Sign In
//                 </button>
//               </form>
//             </div>
//             <p className="text-[#858585] mx-auto">
//               Don't have an account?{" "}
//               <span onClick={navigateSignup} className="text-[#346BD4] cursor-pointer">
//                 Register here
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

// export default Login;


import React, { useEffect, useState, useContext } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";
import Logo from "../components/Logo";

const Login = () => {
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setauthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch((err) => navigate("/"));
  };

  const navigateSignup = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(true);
    }
    setCheck(false);
  }, []);

  if (authenticated && !check) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] dark:bg-gray-900 items-center w-full">
        {/* Outer Container */}
        <div className="relative h-[940px] top-[24px] left-[32px] w-[704px] bg-gradient-to-tr from-[#4a48bb] to-[#382ebf] p-[32px] rounded-3xl dark:bg-gradient-to-tr dark:from-[#382ebf] dark:to-[#4a48bb]">
          {/* Inner Container */}
          <div className="bg-[#b47ae440] dark:bg-[#2e2cb5a0] w-[600px] h-[840px] p-[13.02px_21.71px] rounded-tl-[28.94px] relative overflow-hidden">
            {/* Logo and Text */}
            <div className="flex flex-col gap-[11.58px]">
              <Logo className="mb-4" />
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mt-4 font-bold">
                Generate detailed reports with just one click
              </h2>
            </div>

            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/ecc4/49ea/6b53db2801f7197a6cf3c0f494d01327?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qzGBvOUvE7SyJhwY0mi-qasmqR9Uju-~tDu2-Qhj7AmSKuEj3uRp7b39RlXavs4PueBANlIgFX8I8T1mz-12s4yZpmmiHmuCPudajjddLnhCiyl01U5eEoNdPur7UUvA4MbnLPJqj0OnFk~gvLIphUJcVWKmNalEyNL234N-LFxz~Fod~fe5dvcfTTybXeB2uTrjYTi-L7JTGPH7HNcDNyha2ozGde5RLXIKEbhMa8onADgBn1ytVg9OUiuSckQU6jJFm-Ju9l6sYYs0zJ-gl5bygV3KNtZ3sGQ1FYVle8l~ESNclzasqK0OnhKc8wDrtex3MtuI8x~iaMDN04g4JA__"
              alt="Report"
              className="absolute bottom-0 right-0 w-[380px] h-auto rounded-tl-[15px]"
            />
          </div>
        </div>

        {/* Right side with Sign In form */}
        <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center dark:text-white">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-between items-start px-6 gap-2">
              <h2 className="text-[18px] sm:text-[36px] text-black dark:text-white font-bold sm:leading-[43.88px]">
                Sign In
              </h2>
              <p className="text-[16px] font-lato sm:leading-[19.2px] text-black dark:text-gray-300">
                Sign in to your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleClick}
                className="text-[12px] text-[#858585] dark:text-gray-300 w-[160px] sm:w-[180px] rounded-lg bg-white dark:bg-gray-700 h-[40px] px-6 "
              >
                <div className="flex justify-between items-center">
                  <img
                    src={google}
                    alt="google"
                    className="w-[14px] h-[14px]"
                  />
                  Sign in with Google
                </div>
              </button>
              <button className="text-[12px] text-[#858585] dark:text-gray-300 w-[150px] sm:w-[180px] rounded-lg bg-white dark:bg-gray-700 h-[40px] px-6 ">
                <div className="flex justify-between items-center">
                  <img src={apple} alt="google" className="w-[14px] h-[14px]" />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <div className="flex bg-white dark:bg-gray-700 rounded-2xl flex-col items-center mx-auto">
              <form className="flex flex-col text-black dark:text-gray-300 px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className="bg-[#EAEAEA] dark:bg-gray-600 dark:text-white w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] dark:bg-gray-600 dark:text-white w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Password..."
                  />
                </div>
                <p className="text-[#346BD4] dark:text-[#346BD4] cursor-pointer">
                  Forgot password?
                </p>
                <button onClick={handleClick} className="bg-[#4a48bb] dark:bg-[#4a48bb] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
                  Sign In
                </button>
              </form>
            </div>
            <p className="text-[#858585] dark:text-gray-300 mx-auto">
              Don't have an account?{" "}
              <span onClick={navigateSignup} className="text-[#4a48bb] dark:text-[#4a48bb] cursor-pointer">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
