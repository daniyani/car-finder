import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/app.ts",
    output: {
        dir: "dist",
        format: "iife"
    },
    plugins: [nodeResolve(), typescript()]
}