import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpenFile,
  setRemoveTapById,
} from "../app/features/fileTreeSlice";
import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}
const OpenedFileTap = ({ file }: IProps) => {
  const { clickedFile, openedFile } = useSelector(
    (stat: RootState) => stat.tree
  );
  const dispatch = useDispatch();
  //** Handler
  const onClickedFile = () => {
    dispatch(
      setClickedFile({
        fileContent: file.content,
        fileName: file.name,
        activeTapId: file.id,
      })
    );
  };

  const onRemove = (selectedId: string) => {
    const filtered = openedFile.filter((file) => file.id !== selectedId);
    const lastTap = filtered[filtered.length - 1];
    if (!lastTap) {
      dispatch(setOpenFile([]));
      dispatch(
        setClickedFile({
          activeTapId: null,
          fileContent: "",
          fileName: "",
        })
      );
      return;
    }
    const { id, name, content } = lastTap;
    dispatch(setOpenFile(filtered));
    dispatch(
      setClickedFile({
        activeTapId: id,
        fileContent: content,
        fileName: name,
      })
    );
  };
  return (
    <div
      className={`flex items-center p-2 border-b-2 ${
        file.id === clickedFile.activeTapId
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onClickedFile}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setRemoveTapById(file.id));
      }}
    >
      <RenderFileIcon fileName={file.name} />
      <span className=" duration-300 flex justify-center items-center w-fit p-1 cursor-pointer mx-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFileTap;
