"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Heading = ({
  title,
  title2,
  other,
  spacing,
}: {
  title?: string;
  title2?: string;
  other?: string;
  spacing?: boolean;
}) => {
  // Title Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const titleVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className={`font-bold text-2xl ${title2 ? "text-center md:text-4xl" : "md:text-6xl lg:text-7xl"} ${other ? "md:text-4xl max-w-md" : ""} ${spacing ? "pt-36" : ""}`}
      ref={ref}
      variants={titleVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {title} <br /> {title2} {other}
    </motion.h1>
  );
};

export default Heading;
