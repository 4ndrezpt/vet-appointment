import { useState, useEffect, useRef } from 'react';

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [expired, setExpired] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const generateOTP = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
    setExpired(false);
    setTimeLeft(5);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;

        const next = prev > 0 ? prev - 1 : 0;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        timeoutRef.current = setTimeout(() => {
          setExpired(true);
          timeoutRef.current = null;
        }, 1000);

        return next;
      });
    }, 1000);
  };

  let timerText = "";
  if (otp !== null && !expired) {
    timerText = timeLeft !== null ? `Expires in: ${timeLeft} seconds` : "";
  } else if (otp !== null && expired) {
    timerText = "OTP expired. Click the button to generate a new OTP.";
  }
  const isCounting = otp !== null && !expired && timeLeft !== null;

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp && timeLeft > 0 ? otp  : "Click 'Generate OTP' to get a code" }
      </h2>
      <p id="otp-timer" aria-live="polite">
        {timerText}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={isCounting}
      >
        Generate OTP
      </button>
    </div>
  );
};
