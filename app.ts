import { red } from 'https://deno.land/std@0.124.0/fmt/colors.ts';
import { serve } from 'https://deno.land/std/http/mod.ts'
const hola = "hola mundo";
console.log(hola);
const port = 3000;

const handler = (request : Request): Response => {
	const url = new URL(request.url);
	console.log(url);
	const params = url.searchParams.get('params');
	console.log(params);
	return new Response(JSON.stringify({ message: 'Hola Mundo', url, params}), {
		status: 201,
		headers:{
			"content-type": "application/json, charset=utf-8"
		},
	})
}
await serve(handler,{port})