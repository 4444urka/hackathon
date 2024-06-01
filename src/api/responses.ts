import { Question } from "../types/questionResponse";
import { $host } from "./index";

// Определите тип данных для ответа сервера
interface ServerResponse {
  query: string;
  // Добавьте другие поля, если они есть
}

export async function question(params: Question): Promise<ServerResponse> {
  try {
    const response = await $host.post<ServerResponse>("/question", params);
    return response.data; // Доступ к данным ответа сервера через response.data
  } catch (error) {
    throw error; // Выбросить ошибку, если запрос завершился неудачей
  }
}