import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Mountain() {
  const scrollRef = useRef(0);
  const mountainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateX(${-scrollRef.current}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        ref={mountainRef}
        className="w-0 h-0 border-l-[275px] 
        border-l-transparent border-b-[500px] 
        border-b-indigo-800 border-r-[275px] 
        border-r-transparent absolute bottom-0 left-0"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
      <div style={{ height: "200vh" }} />
    </div>
  );
}
export default Mountain;