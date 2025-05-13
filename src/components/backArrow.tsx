import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // o el ícono que prefieras

interface Props {
  href: string;
}

export const BackArrow: React.FC<Props> = ({ href }) => {
  return (
    <Link href={href} className="flex items-center text-powder hover:text-chocolate mb-4 transition">
      <ArrowLeft className="mr-2" size={20} />
      Volver
    </Link>
  );
};
