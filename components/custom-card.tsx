import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            "Pon a prueba tus habilidades técnicas y creativas participando en los concursos de la Semana de Ingeniería. Forma equipo, resuelve retos y vive la experiencia de competir en un entorno colaborativo."}
        </p>

        <div className="mt-auto">
          <Button
            variant="default"
            size="lg"
            className="w-full text-base md:text-lg mt-4 bg-brand hover:bg-brand/90 text-white"
          >
            Inscribete aquí
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
