import { useSelector } from "react-redux";
import Preview from "./components/Preview";
import RecursiveComponents from "./components/RecursiveComponents";
import ResizablePanel from "./components/ResizablePanel";
import { FileTree } from "./data/FileTree";
import { RootState } from "./app/store";
import WelcomeTap from "./components/WelcomeTap";

function App() {
  const { openedFile } = useSelector((stat: RootState) => stat.tree);

  return (
    <div className="">
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponents fileTree={FileTree} />
            </div>
          }
          rightPanel={openedFile.length ? <Preview /> : <WelcomeTap />}
        />
      </div>
    </div>
  );
}

export default App;
