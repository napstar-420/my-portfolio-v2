import { motion } from 'framer-motion';

interface ComponentProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamBurgerBtn({ isOpen, onClick }: ComponentProps) {
  return (
    <motion.div whileTap={{ scale: 1.2 }}>
      <button onClick={onClick}>
        <div
          className={`h-0.5 w-7 bg-neutral-100 transition-all ${
            isOpen ? 'translate-y-1.5 rotate-45' : ''
          }`}
        ></div>
        <div
          className={`my-1 h-0.5 w-7 bg-neutral-100 transition-all ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 bg-neutral-100 transition-all ${
            isOpen ? '-translate-y-1.5 -rotate-45' : ''
          }`}
        ></div>
      </button>
    </motion.div>
  );
}
