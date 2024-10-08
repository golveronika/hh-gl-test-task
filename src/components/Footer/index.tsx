/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Text from "../Text";

import iFacebook from "../../assets/icons/facebook.svg";
import iInstagram from "../../assets/icons/instagram.svg";
import iTwitter from "../../assets/icons/twitter.svg";
import iLinkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
  const { t } = useTranslation();

  const terms = t("footer", { returnObjects: true }) as Array<{
    title: string;
    url: string;
  }>;

  return (
    <footer className="w-full box-content relative flex justify-between flex-col md:flex-row container m-auto py-10 px-10">
      <div
        className={twMerge(
          "h-full w-full",
          "flex flex-col"
        )}
      >
        <div
          className={twMerge(
            "w-full",
            "flex",
            "opacity-[0.65]"
          )}
        >
          <a href="#">
            <img src={iFacebook} alt="Facebook" className="w-10 h-10 mr-2" />
          </a>
          <a href="#">
            <img src={iInstagram} alt="Instagram" className="w-10 h-10 mr-2" />
          </a>
          <a href="#">
            <img src={iTwitter} alt="Twitter" className="w-10 h-10 mr-2" />
          </a>
          <a href="#">
            <img src={iLinkedin} alt="Linkedin" className="w-10 h-10" />
          </a>
        </div>

        <Text tag={"span"} className="font-normal text-black text-m pt-4">
          {t("copyright")}
        </Text>
      </div>
      <div
        className={twMerge(
          "h-full w-full",
          "rounded-lg box-content",
          "flex-col md:flex-row pb-10 pt-10 md:pt-0"
        )}
      >
        {terms.map((item) => (
          <a href={item.url} key={item.title} className="block md:inline-block md:p-2 py-1 md:py-0 hover:underline">
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
