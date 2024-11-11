interface IProps {
  src: string;
  alt?: string;
  className?: string;
}
const IconImage = ({
  src,
  alt,
  className = "w-5 h-5  mr-1 cursor-pointer",
}: IProps) => {
  return <img className={className} src={src} alt={alt} />;
};

export default IconImage;
