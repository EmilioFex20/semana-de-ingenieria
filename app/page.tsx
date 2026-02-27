import Image from "next/image";
import HeroImage from "@/components/hero-image";
import CircuitLines from "@/components/circuit-lines";

export default function Home() {
  return (
    <div className="flex justify-center font-sans bg-[#0146e9] md:bg-white text-black">
      <div className="w-full md:w-4/6 h-full md:mt-10">
        {/* Animated circuit lines overlay */}
        <CircuitLines />
        <HeroImage />
      </div>
    </div>
  );
}
