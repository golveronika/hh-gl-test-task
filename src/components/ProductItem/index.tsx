import { IProduct } from "../../api/services/getProducts";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Text from "../Text";

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="rounded-lg bg-gray-500 w-full h-full relative"
      style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={twMerge(
          "absolute top-0 right-0 w-full h-full",
          "bg-gradient-to-b from-transparent via-transparent to-[#ffffff]",
          "rounded-lg",
          "flex flex-col justify-end items-start p-5"
        )}
      >
        <Text
          tag={"h1"}
          className="text-3xl font-normal text-shadow-sm shadow-[#000000ba]"
          style={{ color: "white" }}
        >
          {product.name}
        </Text>
        <Text tag={"span"} className="font-normal text-[#0d0d0d] text-xl">
          {t("priceFrom", { price: product.price })}
        </Text>
      </div>
    </div>
  );
};

export default ProductItem;