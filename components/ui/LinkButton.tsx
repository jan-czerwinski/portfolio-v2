import Link, { LinkProps } from "next/link";
import { getBgAndTextColorStyle } from "../../utils/colorUtils";

type LinkButtonProps = {
  text: string;
  backgroundColor: string;
} & React.PropsWithChildren<LinkProps>;
const LinkButton: React.FC<LinkButtonProps> = ({
  backgroundColor,
  href,
  text,
}) => {
  return (
    <Link href={href} passHref>
      <button
        className="p-2 text-2xl transform -skew-x-12 border-2 rounded-sm shadow-md"
        style={getBgAndTextColorStyle(backgroundColor)}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
