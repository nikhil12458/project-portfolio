import TextReveal from "@/components/TextReveal";

export default function Home() {
  return (
    <main className="h-[300vh] w-full bg-[#010101]">
      <div className="h-[50%]"></div>
      <TextReveal splitBy="chars" trigger="scroll" className="text[5rem] text-white">
        Hello Everyone
      </TextReveal>
    </main>
  );
}
