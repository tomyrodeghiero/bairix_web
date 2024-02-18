'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const apkUrl = 'https://expo.dev/artifacts/eas/qih8KC5BteQDZnof3H7Tdn.aab';

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Discover Bairix
          </h4>
          <a href={apkUrl} className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <span className="font-normal text-[16px] text-white">
              Download App
            </span>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              BAIRIX
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2024 Bairix. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a rel="noopener noreferrer" href={social.link} target="_blank">
                  <img
                    key={social.name}
                    src={social.url}
                    alt={social.name}
                    className="w-[48] h-[48px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
