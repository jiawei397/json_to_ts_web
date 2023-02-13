import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import JsonToTs from "../islands/JSONToTs.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div class="p-4 w-full">
        <JsonToTs />
      </div>
      <Footer />
    </>
  );
}
