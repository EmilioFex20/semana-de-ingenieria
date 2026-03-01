import {
  Card,
  CardContent,
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
    <Card className="h-full border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col rounded-xl">
      <CardHeader className="xl:min-h-[4.5rem] pb-2">
        <CardTitle className="text-xl md:text-2xl font-bold">
          {title || "Participar en concursos"}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-base md:text-lg text-muted-foreground leading-relaxed flex flex-col gap-4 flex-1">
        <p>
          {description ||
            "Pon a prueba tus habilidades tecnicas y creativas participando en los concursos de la Semana de Ingenieria. Forma equipo, resuelve retos y vive la experiencia de competir en un entorno colaborativo."}
        </p>

        <div className="mt-auto">
          <Button
            variant="default"
            size="lg"
            className="w-full text-base md:text-lg mt-4"
          >
            Inscribete aqui
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
