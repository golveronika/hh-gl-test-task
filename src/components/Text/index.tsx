import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactElement | React.ReactNode | string;
  tag?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Text = ({ children, tag = "p", className = "", style = {} }: Props) => {
  const CustomTag: any = tag;

  return <CustomTag className={twMerge(className)} style={style}>{children}</CustomTag>;
};

export default Text;
