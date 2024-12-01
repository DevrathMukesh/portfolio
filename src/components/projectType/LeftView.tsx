import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const LeftView = ({ id, name, description, img, tech, source, demo }: any) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  return (
    <div className="mt-[80px] grid grid-cols-1 gap-10 md:px-10 xl:mt-[120px] xl:grid-cols-12">
      {/* Project Details */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: -50 }}
        animate={inViewContent && { opacity: 1, x: 0 }}
        viewport={{
          once: true,
          amount: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative order-2 col-span-5 flex w-full flex-col items-start xl:order-1"
      >
        {/* Project Title */}
        <h3 className="w-full px-3 py-2 text-left text-3xl font-bold text-heading transition-all duration-300 ease-in-out">
          {name}
        </h3>

        {/* Description */}
        <div className="mt-4 w-full rounded-lg bg-bgDark p-4 shadow-md shadow-slate-800">
          {description.map((item: any, i: number) => (
            <div key={i} className="flex items-start gap-2">
              <ArrowRight className="h-5 w-5 flex-none text-textWhite" />
              <p className="text-sm text-textWhite">{item}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-heading">
          {tech?.map((item: any, i: number) => (
            <span
              key={i}
              className="px-2 py-1 bg-slate-700 rounded-md text-textWhite"
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
              <span className="absolute top-8 -left-[50%] w-fit whitespace-nowrap text-xs text-textLight opacity-0 group-hover:opacity-100">
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Project Image */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px)" }
            : { opacity: 1, filter: "blur(6px)" }
        }
        transition={{ duration: 1 }}
        className="order-1 col-span-7 flex justify-center xl:order-2"
      >
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center"
        >
          <Image
            width={500}
            height={300}
            src={img}
            alt={name}
            priority={true}
            className="rounded-md object-cover hover:scale-[1.05] transition-transform"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default LeftView;
