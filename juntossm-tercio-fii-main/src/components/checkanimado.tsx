import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function CheckAnimado() {
  const [mostrar, setMostrar] = useState(false);

  const activar = () => {
    setMostrar(true);
    setTimeout(() => setMostrar(false), 3000); // desaparece en 3s
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={activar}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Enviar
      </button>

      <div
        className={`transition-all duration-500 transform ${
          mostrar
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75"
        }`}
      >
        <CheckCircle2 className="text-green-500 w-16 h-16" />
      </div>
    </div>
  );
}