"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  
  return (
    <section className="sm:px-6 sm:pt-[80px]" id="contact">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>

      <div className="relative mt-10 flex flex-col items-center gap-6 py-12 md:flex-row md:items-start">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h5 className="my-2 text-2xl font-bold text-heading md:text-3xl">
            Why Be Shy, Say Hi...
          </h5>
          <p className="max-w-lg text-base text-textWhite">
            Feel free to reach out to me via any of the platforms below. Whether
            it&apos;s about new opportunities or just to connect, I&apos;d love to hear
            from you!
          </p>
          <div className="mt-6 flex flex-row justify-center gap-6 md:justify-start">
            <a
              href="https://www.linkedin.com/in/mukesh-kumar-65948b225/"
              aria-label="LinkedIn Profile"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px]"
              target="_blank"
            >
              <BsLinkedin className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/DevrathMukesh"
              aria-label="GitHub Profile"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px]"
              target="_blank"
            >
              <BsGithub className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                GitHub
              </span>
            </a>
            <a
              href="mailto:officialmukeshdevrath@gmail.com"
              aria-label="Send an Email"
              target="_blank"
              className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px]"
            >
              <HiMailOpen className="size-7" />
              <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                Email
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }}
          transition={{ duration: 1 }}
          className="mt-10 w-full p-4 md:mt-0 md:w-[40%]"
        >
          <div className="mx-auto mt-8 flex max-w-md items-center lg:max-w-lg">
            <p className="text-md text-textPara">
              You can reach me via email at{" "}
              <a
                href="mailto:officialmukeshdevrath@gmail.com"
                className="text-blue-500"
              >
                officialmukeshdevrath@gmail.com
              </a>
              <br />
              Or give me a call at{" "}
              <br />
              <span className="text-blue-500">+91-783-7865-802</span>.
            </p>
          </div>
        </motion.div>
      </div>

      <footer className="flex items-center text-center pb-6">
        <span className="mx-auto text-textPara">
          © {new Date().getFullYear()} - Mukesh Kumar
        </span>
      </footer>
    </section>
  );
};

export default Contact;
