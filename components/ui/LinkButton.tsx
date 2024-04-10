import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { blackWhiteOpposite } from "../../utils/colorUtils";

type LinkButtonProps = {
  text: string;
  color: string;
} & React.PropsWithChildren<LinkProps>;
const LinkButton: React.FC<LinkButtonProps> = ({ color, href, text }) => {
  return (
    <Link href={href} passHref>
      <button
        className={clsx(
          "p-2 text-2xl transform    border-2 rounded-sm  transition-all duration-300 ease-in-out",
          blackWhiteOpposite(color).text,
          color === "#FFF"
            ? "hover:bg-black/20 hover:border-black/60 border-black/40"
            : "hover:bg-white/20 hover:border-white/60 border-white/40"
        )}
        // style={getBgAndTextColorStyle(color)}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
