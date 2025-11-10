"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ManualTriggerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ManualTriggerDialog = ({
  open,
  onOpenChange
}:ManualTriggerDialogProps)=> {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manual Trigger</DialogTitle>
        <DialogDescription>
          Configure the settings for the Manual Trigger node.
        </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">Manual Trigger is required by user</p>
        </div>
        {/* Settings content goes here */}
      </DialogContent>
    </Dialog>
  )
}
