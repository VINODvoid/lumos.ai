import {betterAuth} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma"
import prisma from "@/lib/db";
import {checkout, polar, portal} from "@polar-sh/better-auth"
import { polarClient } from "./polar";
export const auth = betterAuth({
    database:prismaAdapter(prisma,{
        provider:"postgresql"
    }),
    emailAndPassword:{
        enabled:true,
        autoSignIn:true, 
    },
    plugins:[
        polar({
            client:polarClient,
            createCustomerOnSignUp:true,
            use:[
                checkout({
                    products:[
                        {
                            productId:"9e6c93df-c079-4897-a5cd-c2151ae02ed9",
                            slug:"lumos.ai-pro",
                        }
                    ],
                    successUrl:process.env.POLAR_SUCCESS_URL,
                    authenticatedUsersOnly:true,
                }),
                portal(),
            ]
        })
    ]
    
});