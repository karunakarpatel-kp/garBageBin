"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import MovieList from "./MovieList";

const FinalUIRender = () => {
  const [showUI, setShowUI] = useState<boolean | null>(null); // Null to indicate loading
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("bommaVisited");
      const now = new Date().getTime();

      if (localData) {
        const parsedData = JSON.parse(localData);
        const expiryTime = parsedData.expiryTime;

        if (now > expiryTime) {
          // Time expired, show Landing Page and clear storage
          localStorage.removeItem("bommaVisited");
          setShowUI(true);
        } else {
          // Valid data exists, decide UI
          setShowUI(parsedData.value === "true");
        }
      } else {
        // No data in localStorage, set initial value
        const expiryTime = now + 3 * 1000; // 3 seconds for testing
        localStorage.setItem("bommaVisited", JSON.stringify({ value: "true", expiryTime }));
        setShowUI(true);
      }
    }
    setLoading(false); // Set loading to false after processing
  }, []);

  const onEnterBtnClickHandler = () => {
    const now = new Date().getTime();
    // const expiryTime = now + 3 * 1000; // Reset expiry for 3 seconds (testing)
    const expiryTime = now + 1 * 24 * 60 * 60 * 1000; // 1 days in milliseconds

    localStorage.setItem("bommaVisited", JSON.stringify({ value: "false", expiryTime }));
    setShowUI(false);
  };

  if (loading) {
    return null; // Prevent UI rendering while loading
  }

  return <>{showUI ? <LandingPage onEnterBtnClickHandler={onEnterBtnClickHandler} /> : <MovieList />}</>;
};

export default FinalUIRender;
