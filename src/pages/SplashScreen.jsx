import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImage from '../assets/splash.png';      // ✅ correct path
import '../App.css';
                              // ✅ correct relative path

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, [navigate]);import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splashImage from "../assets/splash.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // 
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fdf5e6]">
      <img src={splashImage} alt="Melodija.mt Splash" className="w-72 h-auto mb-6" />
      <p className="text-xl font-semibold text-gray-700">Loading Melodija.mt...</p>
    </div>
  );
};

export default SplashScreen;


  return (
    <div className="splash-screen">
      <img src={splashImage} alt="Melodija.mt Splash" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
