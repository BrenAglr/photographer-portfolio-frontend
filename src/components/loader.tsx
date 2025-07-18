"use client";

interface Props {
  logoSrc: string;
}

export const Loader: React.FC<Props> = ({ logoSrc }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm z-50">
      <img src={logoSrc} alt="Cargando..." className="h-20 w-auto animate-pulse mb-4" />
      <h4 className="text-lg font-medium text-chocolate animate-pulse">Cargando...</h4>
    </div>
  );
};
