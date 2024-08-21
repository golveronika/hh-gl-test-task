import Text from "../components/Text";
import { useTranslation } from "react-i18next";
import { HOMEPAGE_ROUTE } from "./../utils/constants";


const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-10 w-full flex flex-col items-center justify-center'>

      <Text tag={"h1"} className="block font-bold text-7xl">404</Text>
      <Text tag={"h1"} className="block font-bold text-3xl">{t('notFound')}</Text>

      <a href={HOMEPAGE_ROUTE} className="block mt-10 font-bold text-xl text-green-400">{t('homepage')}</a>


    </div>
  )
}

export default PageNotFound