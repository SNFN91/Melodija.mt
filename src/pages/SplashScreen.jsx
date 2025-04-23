import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splashImage from '../assets/splash.png';      // ✅ correct path
import '../App.css';
                              // ✅ correct relative path

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={splashImage} alt="Melodija.mt Splash" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
