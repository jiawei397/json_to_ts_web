import { Head } from "$fresh/runtime.ts";
import YamlToTs from "../islands/JSONToTs.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>JSON to TypeScript interface</title>
      </Head>
      <div class="p-4 w-full">
        <YamlToTs />
      </div>
    </>
  );
}
