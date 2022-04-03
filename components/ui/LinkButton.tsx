import Link from 'next/link';

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
        className={`p-2 text-2xl transform rounded-sm -skew-x-12 border border-white ${backgroundColor}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
