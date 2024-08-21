import { useTranslation } from "react-i18next";
import Text from "../components/Text";
import useProducts from "./../api/query/useProducts";
import useFees from "./../api/query/useFees";
import LayoutDefault from "../layouts/default";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOMEPAGE_ROUTE } from "../utils/constants";

const ProductPage = () => {
  const { t } = useTranslation();
  const { code } = useParams();

  const { data: productsData } = useProducts(code);
  const { data: feesData } = useFees();
  const product = productsData?.products[0];

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [extra, setExtra] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(product.printing);
      setExtra(product.incl_extra);
    }
  }, [product]);

  useEffect(() => {
    if (quantity && product?.price) {
      const price = product.price * (quantity / product.printing);

      // Some items qualify as being sales tax free, whereas, by default, others are not. Sales tax is 7%.
      const tax =
        product.incl_tax && feesData?.tax ? (price * feesData.tax) / 100 : 0;

      // The base margin is 11% for all jobs this problem.
      const job =
        product.incl_job && feesData?.job
          ? (price * (extra ? feesData.extra + feesData.job : feesData.job)) /
            100
          : 0;

      let total = price + tax + job;

      // The final cost is rounded to the nearest even cent. Individual items are rounded to the nearest cent.
      if (Math.trunc(total) < total && total % 2 !== 0) {
        let underbust = Number(
          (total - Math.trunc(total)).toString().replace("0.", "").slice(0, 2)
        );
        underbust = underbust % 2 ? underbust + 1 : underbust;
        total = Math.trunc(total) + Number("0." + underbust);
      }

      setTotal(total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, product, extra]);

  return (
    <LayoutDefault>
      <div className="w-full container m-auto my-9 px-4 sm:px-0">
        {!product && (
          <>
            <Text tag={"span"} className="font-bold text-xl md:text-xl">
              {t("productNotFound")}
            </Text>
            <a
              href={HOMEPAGE_ROUTE}
              className="block mt-10 font-bold text-xl text-green-400"
            >
              {t("homepage")}
            </a>
          </>
        )}
        {product && feesData && (
          <>
            <Text tag={"h1"} className="font-bold text-4xl md:text-7xl">
              {product.name}
            </Text>

            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover h-96 my-6"
              />

              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col">
                  <div className="flex flex-nowrap items-end">
                    <Text tag={"span"} className="font-normal text-xl pr-3">
                      {t("price")}
                    </Text>
                    <Text tag={"h2"} className="font-bold text-2xl">
                      {product.price * (quantity / product.printing)}$
                    </Text>
                  </div>

                  {product.incl_tax && (
                    <div className="flex flex-nowrap items-end">
                      <Text tag={"span"} className="font-normal text-xl">
                        {t("tax")}
                        <Text
                          tag={"span"}
                          className="font-bold text-2xl pl-3 text-red-500"
                        >
                          {feesData.tax}%
                        </Text>
                      </Text>
                    </div>
                  )}

                  {product.incl_job && (
                    <div className="flex flex-nowrap items-end">
                      <Text tag={"span"} className="font-normal text-xl">
                        {t("job")}
                        <Text
                          tag={"span"}
                          className="font-bold text-2xl pl-3 text-red-500"
                        >
                          {extra ? feesData.extra + feesData.job : feesData.job}
                          %
                        </Text>
                      </Text>
                    </div>
                  )}

                  {product.extra &&
                    product.extra.length > 0 &&
                    product.extra.length === 1 && (
                      <div className="flex flex-col mt-4">
                        <Text tag={"span"} className="font-normal text-xl">
                          {t("extra")}
                        </Text>
                        <label className="flex items-center cursor-pointer">
                          <input
                            className="border-gray-300 rounded h-5 w-5 mr-2"
                            type="checkbox"
                            checked={extra}
                            onChange={() => setExtra(!extra)}
                          />
                          <Text tag={"span"} className="font-normal text-xl">
                            {product.extra[0].name}
                          </Text>
                        </label>
                      </div>
                    )}

                  {product.extra && product.extra.length > 1 && (
                    <div className="flex flex-col mt-4">
                      <Text tag={"span"} className="font-normal text-xl">
                        {t("extra")}
                      </Text>

                      <select
                        onChange={(e) => {
                          const value = !!e.target.value;
                          setExtra(value);
                        }}
                        className=" w-full p-3 px-2 border border-gray-300 rounded bg-white"
                      >
                        {!product.incl_extra && (
                          <option value="">Please choose&hellip;</option>
                        )}
                        {product.extra.map((item) => (
                          <option value={item.code}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="flex flex-col mt-4">
                    <Text tag={"span"} className="font-normal text-xl">
                      {t("quantity")}
                    </Text>
                    <div className="my-2 w-fit qty-input flex items-center overflow-hidden border-slate-400 rounded-md border ">
                      <button
                        className="qty-count qty-count--minus font-bold text-2xl w-16"
                        data-action="minus"
                        onClick={() => {
                          if (quantity > product.printing)
                            setQuantity(quantity - product.printing);
                        }}
                        type="button"
                      >
                        -
                      </button>

                      <input
                        type="number"
                        className="border border-gray-300 rounded-md p-4 w-28 text-center"
                        readOnly
                        min={0}
                        value={quantity}
                      />

                      <button
                        className="qty-count qty-count--add font-bold text-2xl w-16"
                        data-action="add"
                        type="button"
                        onClick={() => setQuantity(quantity + product.printing)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className=" flex justify-start mt-4 md:mt-0 items-start md:items-end align-top w-full flex-col">
                  <Text tag={"span"} className="font-normal block text-2xl">
                    {t("total")}
                  </Text>
                  <Text
                    tag={"span"}
                    className="font-bold block text-4xl text-cyan-600"
                  >
                    {total} $
                  </Text>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </LayoutDefault>
  );
};

export default ProductPage;
