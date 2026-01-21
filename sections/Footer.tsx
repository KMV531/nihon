"use client";

import Heading from "@/components/Heading";
import ProfileCard from "@/components/ProfileCard";
import ProfileCard2 from "@/components/ProfileCard2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const profileCard1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const ref2 = useRef(null);
  const isInView2 = useInView(ref, { once: true });
  const profileCard2 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <footer className="mt-32 mb-20 flex flex-col space-y-8 items-center justify-center">
      <Heading title="UNLOCKED: THE DEV TEAM" title2="- Kaihatsu chimu" />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <motion.div
          ref={ref}
          variants={profileCard1}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <ProfileCard
            name="Vinny Brayan"
            title="DESIGN & CODE SENSEI"
            handle="vinny"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/vinny-avatar.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          variants={profileCard2}
          initial="initial"
          animate={isInView2 ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <ProfileCard2
            name="Maxime Marme"
            title="CONTENT JOSHU"
            handle="maxime"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/maxime-avatar.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
