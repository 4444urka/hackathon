import { Question } from "../types/questionResponse";
import { $host } from "./index";

export async function question(params: Question) {
  try {
    const response = await $host.post("/question", params);
    return response;
  } catch (error) {
    throw error;
  }
}
