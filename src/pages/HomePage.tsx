import SmoothScrollProvider from "./../providers/smoothScroll";
import { useTranslation } from "react-i18next";
import WavyText from "../components/WavyText";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";

import Text from "../components/Text";
import { useRef } from "react";

const HomePage = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SmoothScrollProvider>
      <div
        className={twMerge(
          "h-screen w-full",
          "flex items-center justify-center",
          "bg-gradient-to-br from-[#FA8BFF] via-[#2BD2FF] to-[#2BFF88]"
        )}
      >
        <div className="relative">
          <WavyText
            text={t("supTitle")}
            className="font-bold absolute text-3xl -top-10 -left-10 text-green-light"
          />
          <Text tag={"h1"} className="font-bold text-white text-7xl">
            {t("title")}
          </Text>
        </div>
      </div>

      <div className="w-full container m-auto">
        <motion.ul
          ref={ref}
          initial="closed"
          animate={isInView ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 },
            },
          }}
          className="grid grid-cols-3 gap-4 my-10"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}
              className="h-[260px] cursor-pointer bg-red-500"
            >
              {i}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SmoothScrollProvider>
  );
};

export default HomePage;
