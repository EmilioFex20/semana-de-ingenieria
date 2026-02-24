import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white">
      <div className="text-center">
        <Image src="/Image.png" alt="Ingenio Logo" width={400} height={400} />
      </div>
    </div>
  );
}
