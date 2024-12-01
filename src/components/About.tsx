"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import about from "@/assets/profile-pic.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 flex flex-col items-center justify-between gap-10 py-0 lg:flex-row">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
          }}
          animate={
            inViewContent
              ? {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }
              : { opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <DotLottieReact
            src="https://lottie.host/ed91ad1a-8c0f-4b52-bd39-f633c244042f/wjA5n9SelO.lottie"
            loop
            autoplay
            width={300}
            height={400}
            className="size-[300px] cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[350px]"
          />
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            inViewContent
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 xl:px-4"
        >
          <p>
            Hey there! I&apos;m
            <span className="font-semibold text-heading"> Mukesh Kumar </span>
            – a dedicated computer engineering student at Thapar Institute of Engineering and Technology with a strong focus on machine learning, data engineering, and software development. I thrive on transforming data into actionable insights and enjoy building intelligent, data-driven solutions that prioritize both scalability and impact.
            <br />
            My journey in tech is about more than just understanding frameworks; it’s about exploring the depth of data through machine learning and data analysis, and developing robust engineering solutions that align with industry needs. With hands-on experience in Python, SQL, and frameworks like Pandas and Scikit-Learn, I am committed to a continuous learning path in advanced data engineering and machine learning, pushing the boundaries of what tech can achieve.
          </p>

          <div className="mt-6 w-full sm:mt-0">
            <div className="w-full">
              <h5 className="mt-4 text-xl font-bold text-textWhite">
                Education
              </h5>
              <div className="">
                <h5 className="text-lg font-medium">
                  Thapar Institute of Engineering and Technology
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading"
                  >
                    <p>
                      Bachelor of Computer Engineering <br />
                      <small>2021 - 2025</small>
                    </p>
                    <span>GPA: 7.64</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full">
              <h5 className="mb-0.5 mt-2 text-xl font-bold text-textWhite">
                Achievements
              </h5>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Published <span className="font-bold text-heading">4 datasets</span> on Kaggle, improving data resources for the research community.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Achieved <span className="font-bold text-heading">Bronze Medal</span> on Kaggle for dataset quality and reliability.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Gained <span className="font-bold text-heading">Contributor status</span> on Kaggle, aiming for Expert level.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Created and managed <span className="font-bold text-heading">800+ subscriber YouTube channel</span> *Creative Wolf*, focusing on PowerPoint and design tutorials.
                  </div>
                </div>
                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Participated in <span className="font-bold text-heading">Flipkart GRiD 5.0 - Health+ Track</span>, demonstrating dedication and expertise in health-focused challenges. <a href="https://unstop.com/certificate-preview/121bf495-d138-483a-aef8-fbe8dbe7ff79" className="ml-2 inline-block text-white bg-green-600 py-1 px-2 rounded-sm text-[10px] font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105" target="_blank">View Certificate</a>
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Participated in <span className="font-bold text-heading">Flipkart GRiD 6.0 - Software Development Track</span>, contributing to innovative solutions in software development. <a href="https://unstop.com/certificate-preview/7287eb61-1afa-4a16-b5bc-539a41177314" className="ml-2 inline-block text-white bg-green-600 py-1 px-2 rounded-sm text-[10px] font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105" target="_blank">View Certificate</a>
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Participated in <span className="font-bold text-heading">TATA Crucible Campus Quiz 2024</span>, showcasing analytical and strategic skills in a competitive quiz environment. <a href="https://unstop.com/certificate-preview/d3d77973-2caf-47a9-a4fd-8d696aac6d50" className="ml-2 inline-block text-white bg-green-600 py-1 px-2 rounded-sm text-[10px] font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105" target="_blank">View Certificate</a>
                  </div>
                </div>

                <div className="flex items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div className="text-sm text-gray-500">
                    Cleared Round 1 of  <span className="font-bold text-heading">Naukri Campus Young Turks</span>, demonstrating analytical skills and adaptability. <a href="https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/6707fe385abe131f423e775a?utm_source=certificate&utm_medium=copy&utm_campaign=6707fe385abe131f423e775a" className="ml-2 inline-block text-white bg-green-600 py-1 px-2 rounded-sm text-[10px] font-medium transition-all duration-300 hover:bg-green-700 hover:scale-105" target="_blank">View Certificate</a>
                  </div>
                </div>


              </div>
            </div>

            <div className="mt-6 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                Coding Profiles
              </h5>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://leetcode.com/u/Mukesh_Devrath/"
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-[#1d1d1d] px-3 py-2 text-sm font-medium text-orange-300 transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiLeetcode className="size-6" />
                </a>
                {/* <a
                  href="https://www.geeksforgeeks.org/user/mkumar51u6/"
                  target="_blank"
                  title="GeeksForGeeks"
                  className="flex items-center gap-1 rounded-md bg-green-700 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiGeeksforgeeks className="size-6" />
                </a> */}
                {/* Additional coding profiles can be added here if necessary */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
