import Link from 'next/link';
import { getBgAndTextColorStyle } from '../../utils/getOpposingColor';

type LinkButtonProps = {
  href: string;
  text: string;
  backgroundColor: string;
};
const LinkButton: React.FC<LinkButtonProps> = ({
  backgroundColor,
  href,
  text,
}) => {
  return (
    <Link href={href} passHref>
      <button
        className="p-2 text-2xl transform -skew-x-12 border-2 rounded-sm shadow-md"
        style={getBgAndTextColorStyle(backgroundColor, true, true)}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
