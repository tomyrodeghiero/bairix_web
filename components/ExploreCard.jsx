'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative rounded-lg ${active === id ? 'lg:flex-[3] flex-[20]' : 'lg:flex-[1.5] flex-[7.5]'
      } flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer md:h-[900px]`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet"
      className="absolute w-full object-contain rounded-lg"
    />
  </motion.div>
);

export default ExploreCard;

