import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  subtitle,
  className = '',
  center = true,
  ...props
}) => {
  const alignment = center ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-12 ${alignment} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;