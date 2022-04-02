import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  text: string;
};
const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <button className="text-lg border border-white rounded-md">{text}</button>
    </Link>
  );
};

export default LinkButton;
