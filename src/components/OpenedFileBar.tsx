import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileTap from "./OpenedFileTap";
import { useState } from "react";
import ContextMenu from "./UI/ContextMenu";

const OpenedFileBar = () => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { openedFile } = useSelector((stat: RootState) => stat.tree);

  return (
    <div className="w-fit">
      <div
        className="flex items-center"
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFile.map((file) => (
          <OpenedFileTap key={file.id} file={file} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu position={menuPosition} setShowMenu={setShowMenu} />
      )}
    </div>
  );
};

export default OpenedFileBar;
