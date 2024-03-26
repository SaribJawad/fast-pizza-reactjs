import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  // since we are using this as the error element then this component can get accces to the error that has accured
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
