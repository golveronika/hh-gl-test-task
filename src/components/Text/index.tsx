import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactElement | React.ReactNode | string;
  tag?: string;
  className?: string;
}

const Text = ({ children, tag = "p", className = "" }: Props) => {
  const CustomTag: any = tag;

  return <CustomTag className={twMerge(className)}>{children}</CustomTag>;
};

export default Text;
