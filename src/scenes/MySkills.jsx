import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import skills from "../assets/skills-image.png";
import html from "../assets/html5-original.svg";
import css from "../assets/css3-original.svg";
import js from "../assets/javascript-original.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwindcss.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/expressjs-icon.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import SkillCard from "../components/SkillCard";

const MySkills = () => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER */}
      <div className="mobile:flex mobile:justify-between mobile:gap-16 mt-32">
        <motion.div
          className="mobile:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-rose-800">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I've always been a person that likes to find solutions to any
            problem that i face & always excited to learn new things.
          </p>
        </motion.div>
        {/* IMAGE SECTION */}
        <div className="mt-16 mobile:mt-0">
          {isDesktop ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img alt="skills" className="z-10" src={skills} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skills} />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="mt-16 gap-32">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-center mb-16">Front End</p>
          <div className="flex justify-evenly ">
            <SkillCard logoImage={html} name="Html" />
            <SkillCard logoImage={css} name="Css" />
            <SkillCard logoImage={js} name="JavaScript" />
            <SkillCard logoImage={react} name="React" />
            <SkillCard logoImage={tailwind} name="Tailwind" />
          </div>
          <p className="text-center my-16">Back End</p>
          <div className="flex justify-evenly ">
            <SkillCard logoImage={node} name="NodeJS" />
            <SkillCard logoImage={express} name="Express" />
            <SkillCard logoImage={mysql} name="MySQL" />
            <SkillCard logoImage={mongodb} name="MongoDB" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
