import { Elysia } from "elysia";

const app = new Elysia()
        .get('/hello', () => {
              return {
                  message: 'Hello World!'
              }
          })
          .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
