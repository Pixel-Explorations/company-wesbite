import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function MountainOne() {
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
        className="w-0 h-0 border-l-[350px] 
        border-l-transparent border-b-[700px] 
        border-b-purple-900 border-r-[350px] 
        bg-transparent 
        border-r-transparent fixed bottom-0 left-0"
        style={{
          position: "fixed",
          bottom: 0,
          left: 50,
        }}
      />
      <div style={{ height: "500vh" }} />
    </div>
  );
}
export default MountainOne;