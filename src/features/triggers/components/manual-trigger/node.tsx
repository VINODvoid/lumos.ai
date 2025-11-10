import { NodeProps } from "@xyflow/react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointer, MousePointerIcon } from "lucide-react";
import { memo } from "react";

export const ManualTriggerNode = memo((
  props:NodeProps
)=>
  {
    return(
      <>
      <BaseTriggerNode
      {...props}
      icon={MousePointerIcon}
      name="Manual Trigger"
      onDoubleClick={()=>{}}
      onSettings={()=>{}}
      //TODO status={nodeStatus}
      //TODO onSettings={handleOpenSettings}
      // TODO onDoubleClick={handleOpenSettings}
      />
      </>
    )
  });
