import { Reveal } from "./reveal";
import { Button } from "./ui/button";
import Image from "next/image";

export function TeamCard({
  title,
  description,
  image,
  reversed = false,
}: {
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
      <Reveal delay={120} className={reversed ? "xl:order-2" : "xl:order-1"}>
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start mb-5">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-center md:text-start mx-auto opacity-55">
          {description}
        </p>
        <Button
          variant="default"
          className="mt-5 mx-auto md:mx-0 block w-full md:w-auto text-lg md:text-xl h-full"
        >
          Visitar redes
        </Button>
      </Reveal>

      <Reveal delay={240} className={reversed ? "xl:order-1" : "xl:order-2"}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={800}
          className="rounded-lg mx-auto h-full"
        />
      </Reveal>
    </div>
  );
}
