import  { useState, useEffect } from 'react';

const CountDown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(`${currentYear}-11-03T00:00:00`);

 
    if (now > targetDate) {
      targetDate = new Date(`${currentYear + 1}-11-03T00:00:00`);
    }

    const difference = targetDate - now;

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Birthday</h1>
      <p>
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
      </p>
    </div>
  );
};

export default CountDown;
