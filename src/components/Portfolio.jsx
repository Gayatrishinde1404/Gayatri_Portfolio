import React from 'react';
import mealProjectImage from '../assets/Recepi.png';
import covidTrackerImage from '../assets/Covid-19.png';
import fruitShopImage from '../assets/FruitShop.png';
import googleKeepCloneImage from '../assets/Google_Keep_Clone.png';
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
        {/* Project 1: Find Meal for Your Ingredients */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={mealProjectImage}
            alt="Find Meal for Your Ingredients"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Find Meal for Your Ingredients</h3>
            <p className="mt-2 text-gray-300">
              A website to search for meals based on input ingredients, using an external meal API.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API</p>
          </motion.div>
        </motion.div>

        {/* Project 2: Covid-19 Tracker */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={covidTrackerImage}
            alt="Covid-19 Tracker"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Covid-19 Tracker</h3>
            <p className="mt-2 text-gray-300">
              A real-time tracker fetching Covid-19 statistics using RapidAPI.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API</p>
          </motion.div>
        </motion.div>

        {/* Project 3: FruitShop */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={fruitShopImage}
            alt="FruitShop"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">FruitShop</h3>
            <p className="mt-2 text-gray-300">
              Fruit Shop Store: A user-friendly website offering seamless online fruit shopping with interactive features.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React, Tailwind CSS, Framer Motion</p>
          </motion.div>
        </motion.div>

        {/* Project 4: Google Keep Clone */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={googleKeepCloneImage}
            alt="Google Keep Clone"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Google Keep Clone</h3>
            <p className="mt-2 text-gray-300">
              A clone of Google Keep for note-taking, implementing state management.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, React Hooks, Tailwind CSS</p>
          </motion.div>
        </motion.div>

        {/* Project 5: Weather Forecasting App */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={weatherAppImage}
            alt="Weather Forecasting App"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Weather Forecasting App</h3>
            <p className="mt-2 text-gray-300">
              A React-based application displaying detailed weather data for cities with a clean and user-friendly interface.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, CSS, JavaScript, API Integration</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
