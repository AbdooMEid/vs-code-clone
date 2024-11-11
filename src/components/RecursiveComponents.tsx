import { useState } from "react";
import { IFile } from "../interface";
import ArrowRight from "./SVG/ArrowRight";
import ArrowBottom from "./SVG/ArrowBottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClickedFile, setOpenFile } from "../app/features/fileTreeSlice";
import { doesFileObjExists } from "../utils/function";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponents = ({ fileTree }: IProps) => {
  const dispatch = useDispatch();
  const { openedFile } = useSelector((stat: RootState) => stat.tree);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //** Handler
  const toggleFolder = () => setIsOpen((prev) => !prev);
  const existsFileClicked = () => {
    const exists = doesFileObjExists(openedFile, fileTree.id);
    dispatch(
      setClickedFile({
        fileContent: fileTree.content,
        fileName: fileTree.name,
        activeTapId: fileTree.id,
      })
    );
    if (exists) return;
    dispatch(setOpenFile([...openedFile, fileTree]));
  };
  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {fileTree.isFolder ? (
          <div className="flex items-center " onClick={toggleFolder}>
            {isOpen ? <ArrowBottom /> : <ArrowRight />}
            <RenderFileIcon
              fileName={fileTree.name}
              isFolder={fileTree.isFolder}
              isOpen={isOpen}
            />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div
            className="flex items-center mr-2 ml-3"
            onClick={existsFileClicked}
          >
            <RenderFileIcon fileName={fileTree.name} />
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        fileTree.children &&
        fileTree.children.map((file, idx) => (
          <RecursiveComponents fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponents;
