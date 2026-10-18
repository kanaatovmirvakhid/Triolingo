import { GoogleGenAI } from "@google/genai";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const ai = new GoogleGenAI({ apiKey: config.geminiApiKey });
  const body = await readBody(event)

  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash-lite",
    input: body.text,
  });

  if (!interaction.output_text) {
    throw createError({
      status: 400,
      statusText: 'Нет текста',
    })
  }

  return(interaction.output_text);
})


