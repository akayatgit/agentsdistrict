'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        Home
      </h2>
      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        About Us
      </h2>
      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        Our Agents
      </h2>
      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        How it Works
      </h2>
      <h2 className="font-extrabold test-[24px] text-white leading-[30px]">
        Success Stories
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;
