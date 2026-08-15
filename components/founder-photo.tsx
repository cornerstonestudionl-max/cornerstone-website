import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Het portret.
 *
 * De foto staat op een lichte achtergrond, dus het vlak eronder is vast crème
 * in plaats van meebewegend met het thema. In het lichte thema loopt het beeld
 * daardoor naadloos over in de pagina; in het donkere thema wordt het een
 * lichtvlak dat de aandacht pakt. Allebei bedoeld.
 *
 * Vervangen? Zet je eigen bestand op public/rafael.jpg. Staand formaat,
 * verhouding 4:5, minimaal 1400 pixels breed.
 */
export function FounderPhoto({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Het clay-blok uit het merkteken, als schaduw achter het portret. */}
      <span
        aria-hidden="true"
        className="absolute -right-3 -bottom-3 h-2/5 w-2/5 rounded-[3px] bg-clay/25 sm:-right-5 sm:-bottom-5"
      />
      <div className="relative overflow-hidden rounded-[4px] bg-[#F1ECE4]">
        <Image
          src="/rafael.jpg"
          alt={`${site.founder} van ${site.name}`}
          width={1400}
          height={1750}
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
