import { useSelector } from "react-redux";
import CreateUser from "../features/users/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  console.log(username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-3xl font-semibold ">
        The best pizza.
        <br />
        <span className="text-red-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu">Continue browsing, {username}</Button>
      )}
    </div>
  );
}

export default Home;
