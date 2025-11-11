import React, { useRef, useState, useEffect } from "react";
const ScrollToTop = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={topRef} className="scroll-page">
      <h2>=== Top Section ===</h2>
      <p>Welcome to our long scrollable page!</p>
      {[...Array(40)].map((_, i) => (
        <p key={i}>Section content line {i + 1}</p>
      ))}
      <div ref={bottomRef} className="bottom">
        <h3>=== Bottom Section ===</h3>
      </div>
      {showButton && (
        <>
          <button className="scroll-btn scroll-top" onClick={scrollToTop}>
            ↑ Scroll to Top
          </button>
          <button className="scroll-btn scroll-bottom" onClick={scrollToBottom}>
            ↓ Scroll to Bottom
          </button>
        </>
      )}
    </div>
  );
};
export default ScrollToTop;






















