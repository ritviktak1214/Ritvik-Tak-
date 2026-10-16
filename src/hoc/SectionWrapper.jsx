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
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 w-full overflow-hidden`}
        id={idName}
      >
        <span className="block absolute -top-24" aria-hidden="true">&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
