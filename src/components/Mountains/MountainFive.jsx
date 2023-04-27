import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MountainFour() {
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
        className="w-0 h-0 border-l-[400px] 
        border-l-transparent border-b-[700px] 
        border-b-blue-900 border-r-[400px] 
        bg-transparent 
        border-r-transparent fixed bottom-0 right-0"
        style={{
          position: "fixed",
          bottom: 0,
          right: -200,
        }}
      />
    </div>
  );
}
export default MountainFour;