import { Reveal } from "./reveal";
import { Button } from "./ui/button";
import Image from "next/image";

export function TeamCard({
  id,
  title,
  description,
  image,
  reversed = false,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center"
    >
      <Reveal delay={120} className={reversed ? "xl:order-2" : "xl:order-1"}>
        <h2 className="text-3xl md:text-5xl font-bold text-center md:text-start mb-4 text-balance">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-center md:text-start text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button
          variant="default"
          className="mt-6 mx-auto md:mx-0 block w-full md:w-auto text-base md:text-lg px-6 py-3"
        >
          Visitar redes
        </Button>
      </Reveal>

      <Reveal delay={240} className={reversed ? "xl:order-1" : "xl:order-2"}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="rounded-xl mx-auto shadow-sm"
          style={{ width: "100%", height: "auto" }}
        />
      </Reveal>
    </section>
  );
}
