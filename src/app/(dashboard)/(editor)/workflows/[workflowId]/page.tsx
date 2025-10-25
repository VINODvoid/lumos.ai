
interface PageProps{
    params:Promise<{workflowId:string}>
}

const Page = async ({params}:PageProps) => {
    const {workflowId} = await params;
    return (
        <div>
            <h1>workflowId id: {workflowId}</h1>
        </div>
    )
}

export default Page;