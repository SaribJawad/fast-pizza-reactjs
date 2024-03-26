/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../../features/menu/MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-300 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // fetch the data at the same time at it start rendering the route
  const menu = await getMenu();
  return menu;
}

export default Menu;
