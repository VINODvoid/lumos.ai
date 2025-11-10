"use client"

import {createId} from "@paralleldrive/cuid2"
import { useReactFlow } from "@xyflow/react"
import {
  GlobeIcon,
  MousePointerIcon,
} from "lucide-react"
import { useCallback } from "react"
import { toast } from "sonner"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription
} from "@/components/ui/sheet"
import { NodeType } from "@/generated/prisma"
import { Separator } from "./ui/separator"
import { positive } from "zod"

export type NodeTypeOptions = {
  type: NodeType;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?:string}> | string;
};

const triggerNodes: NodeTypeOptions[] = [
  {
    type: NodeType.MANUAL_TRIGGER,
    label: "Manual Trigger",
    description: "Start the workflow manually clicking the trigger node.",
    icon: MousePointerIcon,
  },];

const executionNodes: NodeTypeOptions[] = [
  {
    type: NodeType.HTTP_REQUEST,
    label: "HTTP Request",
    description: "Make HTTP requests to external APIs and services.",
    icon: GlobeIcon,
  }
]

interface NodeSelectorProps {
  open:boolean;
  onOpenChange:(open:boolean)=>void;
  children:React.ReactNode;
}

export function NodeSelector({open, onOpenChange, children}:NodeSelectorProps) {
  const {setNodes , getNodes,screenToFlowPosition} = useReactFlow();
  const handleNodeSelect = useCallback((selection:NodeTypeOptions)=>{
    if(selection.type===NodeType.MANUAL_TRIGGER){
      const nodes = getNodes();
      const hasManualTrigger = nodes.some((node)=>node.type === NodeType.MANUAL_TRIGGER);
      if(hasManualTrigger){
        toast.error("A Manual Trigger node already exists in the workflow.");
        return;
      }
    }
    setNodes((nodes)=> {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const flowPosition = screenToFlowPosition({x: centerX+(Math.random()-0.5)*200, y: centerY});
      const newNode ={

        id: createId(),
        data:{},
        position:flowPosition,
        type: selection.type,
      }

      // Filter out INITIAL placeholder nodes when adding a new node
      const filteredNodes = nodes.filter((node)=>node.type !== "INITIAL");
      return [...filteredNodes, newNode]
    })
    onOpenChange(false);
  },[setNodes, getNodes, onOpenChange, screenToFlowPosition]);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto" side="right">
        <SheetHeader>
          <SheetTitle>Select a node</SheetTitle>
          <SheetDescription>
            Choose a node to add to your workflow.
          </SheetDescription>
        </SheetHeader>
        <div>
          {triggerNodes.map((nodeType) => {
            const Icon = nodeType.icon;
            return (
              <div
                key={nodeType.type}
                className="w-full justify-start h-auto py-5 px-4 rounded-none cursor-pointer border-l-2 border-transparent hover:border-l-primary"
                onClick={() => handleNodeSelect(nodeType)}
              >
                <div className="flex items-center gap-6 overflow-hidden ">
                  {typeof Icon === 'string' ? (
                    <img
                      src={Icon}
                      alt={nodeType.label}
                      className="size-5 object-contain rounded-sm"
                    />
                  ) : (
                    <Icon className="size-5" />
                  )}
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium text-sm ">
                      {nodeType.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {nodeType.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Separator className=""/>
        <div>
          {executionNodes.map((nodeType) => {
            const Icon = nodeType.icon;
            return (
              <div
                key={nodeType.type}
                className="w-full justify-start h-auto py-5 px-4 rounded-none cursor-pointer border-l-2 border-transparent hover:border-l-primary"
                onClick={() => handleNodeSelect(nodeType)}
              >
                <div className="flex items-center gap-6 overflow-hidden ">
                  {typeof Icon === 'string' ? (
                    <img
                      src={Icon}
                      alt={nodeType.label}
                      className="size-5 object-contain rounded-sm"
                    />
                  ) : (
                    <Icon className="size-5" />
                  )}
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium text-sm ">
                      {nodeType.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {nodeType.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );

}


