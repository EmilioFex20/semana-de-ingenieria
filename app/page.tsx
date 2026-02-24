import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center font-sans bg-white">
      <div className="w-full md:mt-10">
        <Image
          src="/Image.png"
          alt="Ingenio Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "80%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
    </div>
  );
}
