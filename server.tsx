import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest/mod.ts";
import { bgBlue, bgGreen, bgRed, bgBlack, bgWhite } from 'https://deno.land/std@0.124.0/fmt/colors.ts';


const args = Deno.args;
console.log(args);

function printColored(){
  for(let i= 0; i< args.length; i++){
    if(args[i]==='blue'){
      console.log(bgBlue(args[i]))
    } else if (args[i]==='green'){
      console.log(bgGreen(args[i]))
    } else if (args[i]==='red'){
      console.log(bgRed(args[i]))
    } else if (args[i]==='black'){
      console.log(bgBlack(args[i]))
    } else {
      console.log(bgWhite(args[i]))
    }
  }
}

const colores=[];
const app = createApp();
app.handle("/", async (req) => {
  printColored();
  const listItems = args.map((color, idx) =>
  <li style={{ color: color }} key="{item}" >Colors {color}</li>
  );
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>CoderHouse</title>
        </head>
        <body>
          <h1>Hello Servest!</h1>
          <ul>
            <li style={{ color:'black' }}>Colors {args.join(' - ')}</li>
            {listItems}
            



          </ul>
        </body>
      </html>,
    ),
  });
});
app.listen({ port: 8888 });