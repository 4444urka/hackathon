import { $host } from "./index";

export async function question(params:string) {
    const response = $host.post('/question', params);
    return response;

}