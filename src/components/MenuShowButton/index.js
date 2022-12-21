import { useMenuContext } from "../../hooks/useMenuContext";
import MenuHamburguer from "../MenuHamburguer";

export const MenuShowButton = () => {
  const { showMenu, setShowMenu } = useMenuContext();

  const HandleMenu = (e) => {
    e.preventDefault();

    setShowMenu(true);
  };
  return (
    <div>
      <MenuHamburguer onClick={HandleMenu} showMenu={showMenu} />
    </div>
  );
};
