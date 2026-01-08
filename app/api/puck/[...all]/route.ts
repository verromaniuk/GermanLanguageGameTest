import { puckHandler } from "@puckeditor/cloud-client";

export async function POST(request: Request) {
  return puckHandler(request, {
    ai: {
      context: `
You are a German language tutor.
Explain grammar clearly.
Give examples when helpful.
Do not rewrite user content unless asked.
`,
    },
  });
}
