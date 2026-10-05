'use client';

import { motion } from 'framer-motion';
import { WhatsAppIcon } from './Icons';
import { waLink } from '@/lib/site';

export default function WhatsAppFab() {
  return (
    <motion.a
      className="fab"
      href={waLink('Hello Young Vam Gadgets, I want to make an enquiry.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, rotate: -90 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}
