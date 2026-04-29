import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md border border-gray-200 p-6 transition-all duration-300';

  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;