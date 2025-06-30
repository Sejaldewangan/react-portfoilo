import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

function MyApps() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className=" flex flex-col justify-center items-center overflow-hidden relative w-[800px]  ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
        className="w-[100%] h-auto rounded-[10px]"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div className=" absolute bottom-0  -translate-y-[50%] select-none  text-white p-5-10 rounded-[50%] right-10 bg-[rgba(0, 0, 0, 0.3)]" onClick={() => paginate(-1)}>
        ‹
      </div>
      <div className=" absolute bottom-0  -translate-y-[50%] select-none  text-white p-5-10 rounded-[50%] left-10 bg-[rgba(0, 0, 0, 0.3)]" onClick={() => paginate(1)}>
        ›
      </div>
    </div>
  );
}

export default MyApps;
