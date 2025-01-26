import { AnimatePresence, motion } from "motion/react";

const Dialog = ({ error, className }: { error: string; className?: string }) => (
  <AnimatePresence>
    {error && (
      <motion.dialog
        open={Boolean(error)}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          y: 10,
          transition: { ease: "easeIn" },
        }}
        className={className}
      >
        {error}
      </motion.dialog>
    )}
  </AnimatePresence>
);

export default Dialog;
