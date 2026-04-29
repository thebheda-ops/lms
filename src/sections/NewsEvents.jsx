import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

const NewsEvents = () => {
  const notices = [
    'School will remain closed on Monday due to public holiday.',
    'Parent-Teacher meeting scheduled for next Saturday.',
    'Admission forms for Grade 1 are now available.',
    'Annual Sports Day will be held on March 15th.',
    'Science Fair registration opens next week.',
    'Winter break starts from December 20th.',
    'New library books have arrived - check them out!',
    'Art exhibition showcasing student work this weekend.'
  ];

  const news = [
    {
      title: 'TIA Students Excel in National Science Olympiad',
      date: '2024-03-15',
      excerpt: 'Our students brought home multiple medals in this year\'s National Science Olympiad, showcasing their scientific prowess.',
      image: '/news1.jpg'
    },
    {
      title: 'New Computer Lab Inauguration',
      date: '2024-03-10',
      excerpt: 'State-of-the-art computer lab equipped with latest technology inaugurated by the school management.',
      image: '/news2.jpg'
    },
    {
      title: 'Annual Cultural Program Highlights',
      date: '2024-03-05',
      excerpt: 'Students showcased their talents in music, dance, and drama during the annual cultural program.',
      image: '/news3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-tia-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="News & Events"
          subtitle="Stay updated with the latest happenings at TIA"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notice Board */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-tia-primary mb-4 flex items-center">
                <span className="w-2 h-8 bg-tia-secondary mr-3"></span>
                Notice Board
              </h3>

              <div className="h-96 overflow-hidden relative">
                <motion.div
                  className="space-y-3"
                  animate={{ y: [0, -100 * notices.length] }}
                  transition={{
                    duration: notices.length * 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  {[...notices, ...notices].map((notice, index) => (
                    <div key={index} className="bg-tia-grey p-3 rounded border-l-4 border-tia-primary">
                      <p className="text-sm text-gray-700">{notice}</p>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Latest News */}
          <div className="lg:col-span-2">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-tia-secondary text-white px-2 py-1 rounded text-xs font-medium">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-tia-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.excerpt}
                      </p>
                      <button className="text-tia-primary hover:text-red-700 font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;