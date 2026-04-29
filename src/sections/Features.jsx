import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import SectionHeader from '../components/ui/SectionHeader';
import { FaUserGraduate, FaFlask, FaBook, FaTrophy } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-4xl text-tia-secondary" />,
      title: 'Experienced Faculty',
      description: 'Our dedicated teachers bring years of experience and passion to every classroom.'
    },
    {
      icon: <FaFlask className="text-4xl text-tia-secondary" />,
      title: 'Modern Labs',
      description: 'State-of-the-art science and computer labs equipped with latest technology.'
    },
    {
      icon: <FaBook className="text-4xl text-tia-secondary" />,
      title: 'Comprehensive Curriculum',
      description: 'Holistic education covering academics, arts, sports, and character development.'
    },
    {
      icon: <FaTrophy className="text-4xl text-tia-secondary" />,
      title: 'Achievement Focused',
      description: 'Track record of academic excellence and extracurricular achievements.'
    }
  ];

  return (
    <section className="py-16 bg-tia-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose TIA?"
          subtitle="Discover what makes our institution the perfect choice for your child's education"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-tia-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;