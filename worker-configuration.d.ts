interface Env {
  DB: D1Database;

  BUCKET: R2Bucket;

  CACHE: KVNamespace;

  JWT_SECRET: string;
  ENVIRONMENT: "development" | "production" | "staging";
  [key: string]: unknown;
}
