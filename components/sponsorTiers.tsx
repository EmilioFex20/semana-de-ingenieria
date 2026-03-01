import { Reveal } from "./reveal";
import { SponsorsCard } from "./sponsor-card";

export function SponsorTiers() {
  return (
    <div className="flex flex-col md:flex-row mx-auto gap-8">
      <Reveal delay={0}>
        <SponsorsCard
          title="Básico"
          range="$500 - $1,999"
          description={[
            "Public thanks on our social media.",
            "Digital certificate as a 'FoxCoding Contributor'.",
            "Award ceremony.",
          ]}
        />
      </Reveal>
      <Reveal delay={120}>
        <SponsorsCard
          title="Intemedio"
          range="$2,000 - $4,999"
          description={[
            "Everything from the Bronze tier",
            "Logo on competition t-shirts.",
            "Opportunities for collaboration.",
            "Mention in VOCETYS articles.",
          ]}
        />
      </Reveal>
      <Reveal delay={240}>
        <SponsorsCard
          title="Avanzado"
          range="$5,000 - $9,999"
          description={[
            "Everything from the Silver tier",
            "Preferential access to FoxCoding talent placement.",
            "Opportunity to give a technical talk.",
          ]}
        />
      </Reveal>
    </div>
  );
}
