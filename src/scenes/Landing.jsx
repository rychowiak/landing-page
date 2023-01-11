import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import user from "../assets/profile-img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="desktop:flex desktop:justify-between desktop:items-center desktop:h-full gap-16 py:10"
    >
      {/* IMAGE SECTION */}
      <div className="desktop:order-2 flex justify-center basis-3/5 z-10 mt-16 desktop:mt-32">
        {isDesktop ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-[100px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile"
              src={user}
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] desktop:max-w-[600px] rounded-[100px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src={user}
            className="z-10 w-full max-w-[400px] desktop:max-w-[600px] rounded-[400px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 desktop:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center desktop:text-start">
            Rich Sepúlveda
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Hi i'm Rich, i am a self taught web developer who likes to learn new
            things and build beautiful, functional websites and web
            applications.
          </p>
        </motion.div>
        {/* ACTIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainbow-blue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
