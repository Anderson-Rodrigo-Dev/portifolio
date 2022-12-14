import { useMenuContext } from "../../hooks/useMenuContext";
import MenuHamburguer from "../MenuHamburguer";

export const MenuShowButton = () => {
  const { showMenu, setShowMenu } = useMenuContext();

  const handleMenu = (e) => {
    e.preventDefault();

    setShowMenu(true);
  };

  return (
    <div>
      <MenuHamburguer onClick={handleMenu} showMenu={showMenu} />
    </div>
  );
};
