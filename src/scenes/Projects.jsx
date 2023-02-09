import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, url, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  console.log(projectTitle);

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={url} rel="noreferrer" target="_blank">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{desc}</p>
        </div>
        <img
          className="w-full"
          src={require(`../assets/${projectTitle}.png`)}
          alt={projectTitle}
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-40">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="mobile:relative mobile:text-deep-blue mobile:font-semibold z-20 mobile:before:content-brush before:absolute before:-left-[25px] before:-top-[90px] before:z-[-1]">
              PROJECTS
            </span>
          </p>
          <div className="flex justify-center mt-16">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10  ">
          Here are some of my personal projects from my learning path.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="tablet:grid tablet:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-rose-800 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            PERSONAL PROJECTS
          </div>
          <Project
            title="admin dashboard"
            url="https://rychowiak.github.io/admin-dashboard/"
            desc="React Admin dashboard with material ui, data grid and dark-light mode"
          />
          <Project
            title="social app"
            url="https://rychowiak.github.io/socialMediaApp/"
            desc="React Social media app with "
          />

          {/* ROW 2 */}
          <Project title="Book Ecommerce" desc="Ecommerce with React and strapi for storing data, coming soon..."/>
          <Project title="portfolio 4" />
          <Project title="portfolio 5" />
          {/* ROW 3 */}
          <Project title="portfolio 6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
