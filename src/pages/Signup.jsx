import React, { useEffect, useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import Logo from "../components/Logo";

const Signup = () => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(true);
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const profilePic = data.user.photoURL;
        const email = data.user.email;
        setValue(data.user.email);
        localStorage.setItem("email", email);
        localStorage.setItem("pic", profilePic);
        localStorage.setItem("authenticated", true);
        setauthenticated(true);
        navigate("/home");
        setCheck(false);
      })
      .catch((err) => navigate("/"));
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
      <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] dark:bg-[#1E1E2F] items-center w-full">
        {/* Left Side */}
        <div className="flex h-[60px] sm:h-[80px] sm:min-h-screen w-full sm:w-[75%] bg-[#4a48bb] dark:bg-[#4a48bb] clipped">
          <Logo></Logo>
          <div className="flex justify-center items-center">
            <h1 className="text-white font-bold text-[2rem] md:text-[3rem] lg:text-[4.3rem] clipped-opposite text-left">
              Sign Up To Get Started
            </h1>
          </div>
          <div className="fixed flex justify-center items-center w-full h-fit bottom-0 clipped-opposite mb-12">
            <div className="flex gap-x-6">
              <img alt="github" src={github} className="w-[34px] h-[34px]" />
              <img alt="twitter" src={twitter} className="w-[34px] h-[34px]" />
              <img alt="linkedin" src={linkedin} className="w-[34px] h-[34px]" />
              <img alt="discord" src={discord} className="w-[34px] h-[34px]" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col justify-between items-start px-6 gap-2">
              <h2 className="text-[18px] sm:text-[36px] text-black dark:text-white font-bold sm:leading-[43.88px]">
                Sign UP
              </h2>
              <p className="text-[16px] font-lato sm:leading-[19.2px] text-black dark:text-gray-300">
                Sign Up in to your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                onClick={handleClick}
                className="text-[12px] text-[#858585] dark:text-[#B0B0B0] w-[160px] sm:w-[180px] rounded-lg bg-white dark:bg-[#2E2E40] h-[40px] px-6 "
              >
                <div className="flex justify-between items-center">
                  <img src={google} alt="google" className="w-[14px] h-[14px]" />
                  Sign Up with Google
                </div>
              </button>
              <button className="text-[12px] text-[#858585] dark:text-[#B0B0B0] w-[150px] sm:w-[180px] rounded-lg bg-white dark:bg-[#2E2E40] h-[40px] px-6 ">
                <div className="flex justify-between items-center">
                  <img src={apple} alt="apple" className="w-[14px] h-[14px]" />
                  Sign Up with Apple
                </div>
              </button>
            </div>
            <div className="flex bg-white dark:bg-[#2E2E40] rounded-2xl flex-col items-center mx-auto">
              <form className="flex flex-col text-black dark:text-white px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className="bg-[#EAEAEA] dark:bg-[#3E3E50] dark:text-white w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] dark:bg-[#3E3E50] dark:text-white w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Password..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Confirm Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] dark:bg-[#3E3E50] dark:text-white w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Confirm Password..."
                  />
                </div>
                <button className="bg-[#605BFF] dark:bg-[#4A47D8] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;
