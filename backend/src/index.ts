export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

		// オプションリクエスト (プリフライト) に対応
		if (request.method === 'OPTIONS') {
			return new Response(null, {
				status: 204,
				headers: {
					"Access-Control-Allow-Origin": "*", // 必要に応じて限定可能
					"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
				},
			});
		}

		let response: Response;

		switch (url.pathname) {
			case '/message':
				response = new Response('Hello, World!');
				break;

			case '/random':
				response = new Response(crypto.randomUUID());
				break;

			case '/api/todos':
				if (request.method === 'POST') {
					const body = await request.json();
					response = new Response(JSON.stringify({
						...body,
						id: crypto.randomUUID(),
					}), {
						status: 201,
						headers: { "Content-Type": "application/json" },
					});

				} else if (request.method === 'GET') {
					const todos = [
						{ id: "1", title: "サンプルTodo", completed: false },
					];
					response = new Response(JSON.stringify(todos), {
						headers: { "Content-Type": "application/json" },
					});

				} else if (request.method === 'PUT') {
					const updated = await request.json();
					response = new Response(JSON.stringify({
						message: "更新しました（仮）",
						updated,
					}), {
						headers: { "Content-Type": "application/json" },
					});

				} else if (request.method === 'DELETE') {
					response = new Response(JSON.stringify({
						message: "削除しました（仮）",
					}), {
						headers: { "Content-Type": "application/json" },
					});

				} else {
					response = new Response("Method Not Allowed", { status: 405 });
				}
				break;

			default:
				response = new Response('Not Found', { status: 404 });
		}

		const newHeaders = new Headers(response.headers);
		newHeaders.set("Access-Control-Allow-Origin", "*");
		
		return new Response(response.body, {
		  status: response.status,
		  statusText: response.statusText,
		  headers: newHeaders,
		});
	},
} satisfies ExportedHandler<Env>;
