import ArrowRight from "./SVG/ArrowRight";
// import Folder from "./SVG/Folder";
interface IProps {
  folderName: string;
}
const FolderComponents = ({ folderName }: IProps) => {
  return (
    <div className="flex items-center">
      <ArrowRight />
      <span className="mr-2">
      </span>
      <span>{folderName}</span>
    </div>
  );
};

export default FolderComponents;
