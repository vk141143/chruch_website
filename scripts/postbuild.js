import fs from "fs";
import path from "path";

const outDir = path.resolve(process.cwd(), "dist", "server");
const target = path.resolve(process.cwd(), ".netlify", "functions-internal", "server", "main.mjs");

fs.mkdirSync(outDir, { recursive: true });

const rel = path.relative(outDir, target).replace(/\\/g, '/');
const shim = `export { default } from '${rel}'\n`;

fs.writeFileSync(path.join(outDir, "server.js"), shim);
console.log("Wrote shim:", path.join(outDir, "server.js"));
