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
    <div className="mx-auto flex justify-center">
      <img
        src="/logotype.png"
        alt="logotype"
        className="w-40 md:w-48 object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
