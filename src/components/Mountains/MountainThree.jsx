import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MountainThree() {
  const scrollRef = useRef(0);
  const mountainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      if (mountainRef.current) {
        mountainRef.current.style.transform = `translateX(${+scrollRef.current}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        ref={mountainRef}
        className="w-0 h-0 border-l-[600px] 
        border-l-transparent border-b-[900px] 
        border-b-indigo-800 border-r-[600px] 
        bg-transparent
        border-r-transparent fixed bottom-0 right-0"
        style={{
          position: "fixed",
          bottom: 0,
          right: 400,
        }}
      />
    </div>
  );
}
export default MountainThree;