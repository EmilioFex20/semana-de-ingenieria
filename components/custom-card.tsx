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

export function CustomCard({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Card className="w-full text-black bg-[#f2f2f2] flex flex-col">
      <CardHeader className="xl:min-h-[4.5rem]">
        <CardTitle className="text-xl md:text-2xl font-bold">
          {title || "Participar en concursos"}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-lg md:text-xl text-[#6d6d6d] font-normal flex flex-col gap-4 flex-1">
        <p>
          {description ||
            "Pon a prueba tus habilidades técnicas y creativas participando en los concursos de la Semana de Ingeniería. Forma equipo, resuelve retos y vive la experiencia de competir en un entorno colaborativo."}
        </p>

        <div className="mt-auto">
          <Button
            variant="default"
            size="lg"
            className="mt-5 mx-auto md:mx-0 block w-full text-lg md:text-xl"
          >
            Inscribete aquí
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
