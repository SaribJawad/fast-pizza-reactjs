import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-600 underline"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className="text-sm   text-blue-600 underline">
      {children}
    </Link>
  );
}

export default LinkButton;
