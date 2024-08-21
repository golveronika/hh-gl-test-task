import { IProductsResponse } from "../../api/services/getProducts";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProductItem from "../ProductItem";

const ProductsGrid = ({ products }: IProductsResponse) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (products.length === 0)
    return <div className="flex w-full justify-center">{t("noProducts")}</div>;

  return (
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
      className="grid lg:grid-cols-3 sm:gap-4 gap-10 my-10 md:grid-cols-2"
    >
      {products.map((item) => (
        <motion.li
          key={item.code}
          whileHover={{
            scale: 1.03,
            boxShadow: "2px 8px 38px -6px rgba(0,0,0,0.45)",
            borderRadius: "30px",
          }}
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
          className="h-[260px] cursor-pointer"
        >
          <ProductItem product={item} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProductsGrid;
