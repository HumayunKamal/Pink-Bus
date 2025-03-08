import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

const Dialog = ({
  content,
  className,
}: {
  content: ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {content && (
        <motion.dialog
          open={Boolean(content)}
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
          {content}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
