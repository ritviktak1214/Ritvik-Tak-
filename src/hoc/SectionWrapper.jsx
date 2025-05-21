import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        {/* Anchor target for navigation (optional styling handled via Tailwind) */}
        <span className="block absolute -top-20" aria-hidden="true"></span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
