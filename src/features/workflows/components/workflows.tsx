"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import {
  useCreateWorkflow,
  useSuspenseWorkflows,
} from "../hooks/use-workflows";
import { useUpgradeModal } from "@/hooks/use-upgrade-modal";
import { useRouter } from "next/navigation";

export const WorkflowList = () => {
  const workflows = useSuspenseWorkflows();

  return (
    <div className="flex flex-1 justify-center items-center">
      <p>{JSON.stringify(workflows.data, null, 2)}</p>
    </div>
  );
};

export const WorkflowHeader = ({ disabled }: { disabled?: boolean }) => {
  const createWorkflow = useCreateWorkflow();
  const {handleError,modal} = useUpgradeModal();
  const router = useRouter();



  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onSuccess:(data)=>{
        router.push(`/workflows/${data.id}`)
      },
      onError: (error) => {
        handleError(error)
      },
    });
  };
  return (
    <>
    {modal}
      <EntityHeader
        title="Workflows"
        description="Create and Manage your workflows"
        onNew={handleCreate}
        newButtonLabel="New Workflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};
export const WorkflowContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
