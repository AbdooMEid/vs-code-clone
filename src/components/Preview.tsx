import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFileBar from "./OpenedFileBar";
import { RootState } from "../app/store";

const Preview = () => {
  const { clickedFile } = useSelector((stat: RootState) => stat.tree);
  return (
    <>
      <OpenedFileBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </>
  );
};

export default Preview;
