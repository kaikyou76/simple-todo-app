import { Todo } from "../types/Todo"; 
//const BASE_URL = "https://spring-frog-3bdf.kai-kyou.workers.dev";
//const BASE_URL = "http://127.0.0.1:8787";//バックエンド
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function createTodo(todo: Todo): Promise<Todo> {
  try {
    const res = await fetch(`${BASE_URL}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await res.json().catch(() => null); // ✅ ここで1回だけ読む

    if (!res.ok) {
      throw new Error(data?.message || "データを登録できませんでした");
    }

    return data; // ここで data を返す✅ ここで1回だけ返す
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : "ネットワークエラーが発生しました"
    );
  }
}

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("データが取得できませんでした");
  }
  return res.json() as Promise<Todo[]>;
}
