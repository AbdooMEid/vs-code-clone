import { v4 as uuidv4 } from "uuid";
import { IFile } from "../interface";

export const FileTree: IFile = {
  id: uuidv4(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuidv4(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: ".vite",
          isFolder: true,
          children: [
            { id: uuidv4(), name: "react.js", isFolder: false },
            {
              id: uuidv4(),
              name: "react.jsx",
              isFolder: false,
              content: `
import OpenedFileBar from "./components/OpenedFileBar";
import RecursiveComponents from "./components/RecursiveComponents";
import { FileTree } from "./data/FileTree";

function App() {
  return (
    <div className="my-2">
      <div className="flex h-screen">
        <div className="w-64 border-r-[1px] border-[#ffffff1f]">
          <RecursiveComponents fileTree={FileTree} />
        </div>
        <OpenedFileBar />
      </div>
    </div>
  );
}

export default App;`,
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "index.css",
          isFolder: false,
          content: "abdelrahman",
        },
        {
          id: uuidv4(),
          name: "index.html",
          isFolder: false,
          content: "<h1>Hello VS Code Clone!</h1>",
        },
        {
          id: uuidv4(),
          name: "Button.jsx",
          isFolder: false,
          content: `
interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneDark}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "1.2rem",
      }}
      showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;`,
        },
      ],
    },
    {
      id: uuidv4(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuidv4(),
              name: "Button.tsx",
              isFolder: false,
              content: `export interface FileSystem {
            name : string;
            isFolder : boolean;
            children : string[];
            content : string;
            }`,
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      name: "style",
      isFolder: true,
      children: [
        {
          id: uuidv4(),
          name: "style.css",
          isFolder: false,
          content: `div {
      margin : 1px; 
      padding : 2px;
      background: red;
        color : black;
          }`,
        },
      ],
    },
  ],
};
