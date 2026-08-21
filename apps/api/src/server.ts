import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import "dotenv/config";
import { prisma } from "./lib/prisma.js";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
});

await app.register(helmet);

await app.register(jwt, {
  secret: process.env.JWT_SECRET ?? "development-secret",
});

app.get("/health", async () => {
  return {
    status: "ok",
    service: "motexa-api",
  };
});

app.get("/health/db", async (_request, reply) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    return {
      status: "ok",
      database: "connected",
    };
  } catch (error) {
    app.log.error(error);

    return reply.status(503).send({
      status: "error",
      database: "disconnected",
    });
  }
});

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

try {
  await app.listen({ port, host });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}