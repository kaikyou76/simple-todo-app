const BASE_URL = "https://spring-frog-3bdf.kai-kyou.workers.dev/api/todos";

export async function getTodos() {
  const res = await fetch(`${BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("データが取得できませんでした");
  }
  return res.json() as Promise<Todo[]>;
}
