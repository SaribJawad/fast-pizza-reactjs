/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "duration-300 text-sm inline-block rounded-full  bg-red-500  font-semibold uppercase tracking-widest text-stone-800 transition-colors hover:bg-red-400";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "duration-300 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-widest text-stone-400 transition-colors hover:bg-stone-800 px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
