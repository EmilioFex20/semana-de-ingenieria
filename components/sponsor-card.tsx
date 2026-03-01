import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SponsorsCard({
  title,
  description,
  range,
}: {
  title?: string;
  description: string[];
  range?: string;
}) {
  return (
    <Card className="w-full bg-[#f2f2f2] flex flex-col">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl font-bold text-center md:text-start">
          {title || "Participar en concursos"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg md:text-xl font-normal flex flex-col gap-8 flex-1">
        <p className="text-4xl md:text-5xl font-bold text-black text-center md:text-start">
          {range}
        </p>
        <ul className="ml-5 text-md md:text-lg leading-6 font-medium text-[#6d6d6d] list-none">
          {description.map((item, idx) => (
            <li
              className="mb-2 marker:text-[#0146e9] [&::marker]:content-['✓__']"
              key={`${item}-${idx}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <Button
            variant="default"
            size="lg"
            className="mt-5 mx-auto md:mx-0 block w-full text-lg md:text-xl"
          >
            Contáctanos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
