import prisma from "@/lib/db";
import { inngest } from "./client";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";


const google =createGoogleGenerativeAI();
export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
   const {steps } = await step.ai.wrap("gemini-generate-text",generateText,{
    model:google("gemini-2.5-flash"),
    system:"You are a helpful assistant that can generate text based on the user's request.",
    prompt:"What is 2 + 2 ?",
    experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
   });
   return steps;
  }
);