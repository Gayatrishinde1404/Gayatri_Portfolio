import React from 'react';
import cryptoimg from '../assets/crypto.png';
import recipeimg from '../assets/Recepi.png';
import fruitShopImage from '../assets/FruitShop.png';
import felixLearningHubImage from '../assets/FelixLearningHub.png';
import weatherAppImage from '../assets/Wether.png';
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="my-24 text-white bg-black">
      {/* Animated Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        {/* Project 1: Cryptocurrency Tracker */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={cryptoimg}
            alt="Cryptocurrency Tracker"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Cryptocurrency Tracker</h3>
            <p className="mt-2 text-gray-300">
             A crypto tracker showing real-time prices, trends, and historical data with API integration. Users can search coins and view market details.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, Tailwind CSS, API Integration</p>
          </motion.div>
        </motion.div>

        {/* Project 2: Recipe Finder */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={recipeimg}
            alt="Recipe Finder"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Recipe Finder</h3>
            <p className="mt-2 text-gray-300">
              A recipe app that suggests meals based on ingredients, fetching details, instructions, and images from an API.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API Integration</p>
          </motion.div>
        </motion.div>

        {/* Project 3: Felix Learning Hub */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={felixLearningHubImage}
            alt="Felix Learning Hub"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Felix Learning Hub</h3>
            <p className="mt-2 text-gray-300">
             Felix Learning Hub is a platform with course tracking, quizzes, and a discussion forum for students. Built with React.js, Tailwind CSS, Node.js, Express.js, and MongoDB.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, Tailwind CSS, Express.js, MongoDB, Node.js, Postman</p>
          </motion.div>
        </motion.div>

        {/* Project 4: Fruit Shop */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={fruitShopImage}
            alt="Fruit Shop"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Fruit Shop</h3>
            <p className="mt-2 text-gray-300">
             An interactive fruit shop landing page with a visually appealing UI, categorized fruit listings, and an intuitive design for a seamless browsing experience.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript</p>
          </motion.div>
        </motion.div>

        {/* Project 5: Weather App */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={weatherAppImage}
            alt="Weather App"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Weather App</h3>
            <p className="mt-2 text-gray-300">
               A weather app providing real-time updates, temperature details, humidity, wind speed, and future forecasts for any location.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API Integration</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
