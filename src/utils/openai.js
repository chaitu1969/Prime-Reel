import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_AI_KEY,
  dangerouslyAllowBrowser: true,
  baseURL: "https://api.aimlapi.com/v1",
});

export default openai;
