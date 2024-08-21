import { useTranslation } from "react-i18next";
import WavyText from "../components/WavyText";
import { twMerge } from "tailwind-merge";
import Text from "../components/Text";
import useProducts from "./../api/query/useProducts";
import ProductsGrid from "../components/ProductsGrid";
import LayoutDefault from "../layouts/default";

const HomePage = () => {
  const { t } = useTranslation();

  const { data: productsData } = useProducts();

  return (
    <LayoutDefault>
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
          <Text
            tag={"h1"}
            className="font-bold text-white text-4xl md:text-7xl"
          >
            {t("title")}
          </Text>
        </div>
      </div>

      <div className="w-full container m-auto my-9 px-4 sm:px-0">
        {productsData?.products && (
          <ProductsGrid products={productsData?.products} />
        )}
      </div>
    </LayoutDefault>
  );
};

export default HomePage;
