import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="bg-black py-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white text-center text-4xl mb-16"
      >
        Education
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* Bachelor's Degree */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-neutral-900 border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold text-white">
            Bachelor of Engineering in Electrical
          </h3>
          <p className="text-sm text-gray-500">Pune University | 2021 - 2024</p>
          <p className="mt-4 text-gray-300">
            Graduated with an 8.5 CGPA, focusing on problem-solving and analytical thinking. Participated in various projects and hackathons.
          </p>
        </motion.div>

        {/* Front-End Development Training */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="bg-neutral-900 border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold text-white">
            Front-End Development Training
          </h3>
          <p className="text-sm text-gray-500">Felix IT Systems | 2024</p>
          <p className="mt-4 text-gray-300">
            Six-month training focused on modern web development, React.js, and frameworks like Tailwind CSS and Bootstrap.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
