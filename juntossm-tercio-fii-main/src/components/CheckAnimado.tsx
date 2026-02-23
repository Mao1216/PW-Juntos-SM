const CheckAnimado = () => {
  return (
    <div className="w-20 h-20 flex items-center justify-center">
      <svg viewBox="0 0 52 52" className="w-20 h-20">
        <circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          className="circle"
        />
        <path
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          d="M14 27l7 7 16-16"
          className="check"
        />
      </svg>
    </div>
  );
};

export default CheckAnimado;