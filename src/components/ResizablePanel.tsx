import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}
const ResizablePanel = ({
  defaultLayout,
  rightPanel,
  leftPanel,
  showLeftPanel,
}: IProps) => {
  defaultLayout = [20, 80];
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="conditional"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-r-[1px] border-[#ffffff1f]2" />
        </>
      )}
      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};

export default ResizablePanel;
