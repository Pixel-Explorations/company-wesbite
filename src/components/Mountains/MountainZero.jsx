import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MountainZero() {
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
        className="w-0 h-0 border-l-[200px] 
        border-l-transparent border-b-[500px] 
        border-b-indigo-950 border-r-[200px] 
        bg-transparent 
        border-r-transparent fixed bottom-0 left-0"
        style={{
          position: "fixed",
          bottom: 0,
          left: -100,
        }}
      />
    </div>
  );
}
export default MountainZero;