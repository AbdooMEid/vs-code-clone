import { extensionIconPath } from "../constant";
import IconImage from "./IconImage";
import File from "./SVG/File";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPath, extension)
  ) {
    const isIcon = isFolder
      ? isOpen
        ? `${extensionIconPath[extension]}-open.svg`
        : `${extensionIconPath[extension]}.svg`
      : `${extensionIconPath[extension]}.svg`;

    return <IconImage src={isIcon} alt={extension} />;
  }

  if (isFolder && isOpen)
    return <IconImage src="/icons/folder-base-open.svg" alt={extension} />;
  if (isFolder && !isOpen)
    return <IconImage src="/icons/folder-base.svg" alt={extension} />;

  return <File />;
};

export default RenderFileIcon;
