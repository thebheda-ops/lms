import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const Academics = () => {
  const levels = [
    {
      title: 'Primary Level',
      grades: 'Grade 1 - 5',
      description: 'Building strong foundations in literacy, numeracy, and basic sciences with creative learning methods.',
      features: ['Interactive Learning', 'Art & Music', 'Physical Education', 'Basic Computer Skills'],
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Lower Secondary',
      grades: 'Grade 6 - 8',
      description: 'Developing critical thinking and problem-solving skills with comprehensive subject coverage.',
      features: ['Advanced Mathematics', 'Science Experiments', 'Social Studies', 'Language Arts'],
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Secondary Level',
      grades: 'Grade 9 - 10',
      description: 'Preparing students for higher education with specialized subjects and career guidance.',
      features: ['SLC Preparation', 'Optional Subjects', 'Career Counseling', 'Advanced Labs'],
      color: 'bg-purple-50 hover:bg-purple-100'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Academic Programs"
          subtitle="Comprehensive education from primary to secondary level"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              className={`rounded-lg p-8 transition-all duration-300 cursor-pointer ${level.color} border-2 border-transparent hover:border-primary hover:shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {level.title}
                </h3>
                <p className="text-lg font-semibold text-secondary mb-4">
                  {level.grades}
                </p>
                <p className="text-gray-700 mb-6">
                  {level.description}
                </p>

                <ul className="text-left space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;