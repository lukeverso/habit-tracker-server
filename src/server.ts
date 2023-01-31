import Fastify from "fastify";
import CORS from '@fastify/cors';
import { appRoutes } from "./routes";

const app = Fastify();

app.register(CORS);
app.register(appRoutes);

app.listen({
     port: 3333
}).then(() => {
     console.log('HTTP server running.');
});