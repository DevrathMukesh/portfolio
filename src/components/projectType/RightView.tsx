/* eslint-disable react/prop-types */
import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const RightView = ({ id, name, description, img, tech, source, demo }: any) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 lg:mt-[120px] xl:grid-cols-12 gap-10">
      {/* Project Image */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px) brightness(50%)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px) brightness(100%)" }
            : { opacity: 1, filter: "blur(6px) brightness(50%)" }
        }
        transition={{ duration: 1 }}
        className="col-span-7 flex justify-center brightness-50 transition-all duration-700 ease-in-out hover:z-20 hover:scale-[1.05] hover:brightness-100"
      >
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex w-fit items-center justify-center"
        >
          <Image
            width={500}
            height={300}
            src={img}
            alt={name}
            className="cursor-pointer rounded-md"
          />
        </a>
      </motion.div>

      {/* Project Details */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-5 flex flex-col items-end"
      >
        {/* Project Title */}
        <h3 className="text-3xl font-bold text-heading text-right">{name}</h3>

        {/* Description */}
        <div className="mt-4 w-full rounded-lg bg-bgDark p-4 shadow-md shadow-slate-800">
          {description?.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 flex-none text-textWhite" />
              <p className="text-sm text-textWhite">{item}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-heading">
          {tech?.map((item: string, i: number) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md bg-slate-700 text-textWhite"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-6">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-1"
            >
              <GitHubIcon className="text-heading" />
              <span className="absolute top-8 -left-[50%] w-[100px] whitespace-nowrap text-xs text-textLight opacity-0 group-hover:opacity-100">
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-1"
            >
              <LaunchIcon className="text-heading" />
              <span className="absolute top-8 -left-[30%] w-fit whitespace-nowrap text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RightView;
