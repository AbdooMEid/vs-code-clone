import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenFile } from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y }, setShowMenu }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { openedFile, removeTapById } = useSelector(
    (stat: RootState) => stat.tree
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  //**Handler */
  const closeAll = () => {
    dispatch(setOpenFile([]));
    setShowMenu(false);
  };
  const onClose = () => {
    const filtered = openedFile.filter((file) => file.id !== removeTapById);
    dispatch(setOpenFile(filtered));
    setShowMenu(false);
  };
  return (
    <div ref={menuRef}>
      <ul
        className="bg-gray-500 text-[#DADADA] w-32 z-10 origin-top-right divide-gray-100 rounded-md shadow-lg ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li onClick={onClose} className="cursor-pointer">
          Close
        </li>
        <li onClick={closeAll} className="cursor-pointer">
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;

//** UseEffect
//** Click Event
//** UseRef
