import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { TextArea } from "../components/TextArea.tsx";
import jsonToTS from "json_to_ts";

export default function JSONToTS() {
  const [json, setJSON] = useState("");
  const [ts, setTS] = useState("");
  const trans = () => {
    let data;
    try {
      data = JSON.parse(json);
    } catch (error) {
      alert("Invalid JSON");
      return;
    }
    const arr = jsonToTS(data);
    setTS(arr.join("\n"));
  };
  const copy = async () => {
    if (!ts) {
      alert("No TypeScript");
      return;
    }
    await navigator.clipboard.writeText(ts);
    alert("Copied!");
  };
  return (
    <div class="gap-2 w-full">
      <section class="flex justify-center">
        <TextArea
          placeholder="Input JSON code"
          onChange={(e) => setJSON(e.currentTarget.value)}
        >
        </TextArea>
        <TextArea
          readonly
          placeholder="TypeScript interface"
          value={ts}
        >
        </TextArea>
      </section>
      <section class="w-full flex items-center justify-center mt-10">
        <Button onClick={trans}>JSON to TypeScript</Button>
        <Button onClick={copy}>Copy TypeScript</Button>
      </section>
    </div>
  );
}
