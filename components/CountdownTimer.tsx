import React, { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 15 * 60; // Reset loop for scarcity/bias effect
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-brand-pink font-bold text-2xl md:text-4xl font-mono my-4 bg-white py-2 px-4 rounded-lg shadow-sm border border-brand-light w-fit mx-auto">
      <span className="animate-pulse">⏱️</span>
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};