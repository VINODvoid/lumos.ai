import Link from "next/link"
import Image from "next/image"
const AuthLayout = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className="bg-muted flex min-h-svh flex-col justify-center gap-6 p-6 md:p-10 items-center">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href={"/"} className="flex items-center gap-2 self-center font-medium">
                <Image src={"/logo.svg"} alt="lumos.ai" width={30} height={30}/>Lumos.AI
                </Link>
            {children}
            </div>
        </div>
    )
}

export default AuthLayout;