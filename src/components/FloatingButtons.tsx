import React from 'react';
import { motion } from 'motion/react';
import { UI_TEXT } from '../constants';

const ZALO_ICON_URL = 'https://longchaupharma.com/resources/layout1/images/sodienthoaizalo.svg';
const ZALO_LINK = 'https://zalo.me/vi/';
const PHONE_ICON_URL = 'https://longchaupharma.com/resources/layout1/images/sodienthoai.svg';
const MESSAGE_ICON_URL = 'https://longchaupharma.com/resources/layout1/images/sodienthoaisms.svg';

const FloatingButtons = () => (
  <div className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col gap-3">
    <motion.a
      href={ZALO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="h-12 w-12 rounded-full shadow-lg cursor-pointer flex items-center justify-center overflow-hidden"
      aria-label={UI_TEXT.ZALO}
    >
      <img src={ZALO_ICON_URL} alt={UI_TEXT.ZALO} className="h-full w-full object-contain" />
    </motion.a>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="h-12 w-12 rounded-full shadow-lg cursor-pointer flex items-center justify-center overflow-hidden"
    >
      <img
        src={PHONE_ICON_URL}
        alt={UI_TEXT.HOTLINE_LABEL}
        className="h-full w-full object-contain animate-phone-shake"
      />
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="h-12 w-12 rounded-full shadow-lg cursor-pointer flex items-center justify-center overflow-hidden"
    >
      <img src={MESSAGE_ICON_URL} alt="SMS" className="h-full w-full object-contain" />
    </motion.div>
  </div>
);

export default FloatingButtons;
