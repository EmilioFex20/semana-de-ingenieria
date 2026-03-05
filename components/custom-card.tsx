import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CustomCard({
  title,
  description,
  url,
}: {
  title?: string;
  description?: string;
  url?: string;
}) {
  return (
    <Card className="h-full border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col rounded-xl">
      <CardHeader className="xl:min-h-[4.5rem] pb-2">
        <CardTitle className="text-xl md:text-2xl font-bold">
          {title || "Participar en concursos"}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-base md:text-lg text-muted-foreground leading-relaxed flex flex-col gap-4 flex-1">
        <p>{description}</p>

        <div className="mt-auto">
          {url ? (
            <Link href={url} passHref>
              <Button
                variant="default"
                size="lg"
                className="w-full text-base md:text-lg mt-4 bg-brand hover:bg-brand/90 text-white"
              >
                Inscribete aquí
              </Button>
            </Link>
          ) : (
            <Button
              variant="default"
              size="lg"
              className="w-full text-base md:text-lg mt-4 bg-brand hover:bg-brand/90 text-white"
            >
              Inscribete aquí
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
