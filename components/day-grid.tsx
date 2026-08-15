import { phases, BUILD_DAYS } from "@/lib/site";

/**
 * De veertien dagen als metselwerk.
 *
 * Elk blok is één dag. De breedte van een fase is evenredig met het aantal
 * dagen dat die fase kost, dus de tekening liegt niet over waar de tijd
 * heen gaat: zes van de veertien dagen zijn puur bouwen.
 *
 * Dag 14 is clay. Dat is het enige moment waarop de accentkleur groot
 * gebruikt wordt, en daarom valt het op.
 */
export function DayGrid({
  className = "",
  height = "h-16 sm:h-24",
  showLabels = true,
}: {
  className?: string;
  height?: string;
  showLabels?: boolean;
}) {
  let dayCursor = 0;

  return (
    <div className={className}>
      <div className="flex items-end gap-2 sm:gap-3">
        {phases.map((phase, phaseIndex) => {
          const count = phase.to - phase.from + 1;
          const isLast = phaseIndex === phases.length - 1;

          return (
            <div
              key={phase.days}
              className="group/phase min-w-0"
              style={{ flexGrow: count, flexBasis: 0 }}
            >
              <div className={`flex gap-[3px] ${height}`}>
                {Array.from({ length: count }).map((_, i) => {
                  const day = phase.from + i;
                  dayCursor += 1;
                  return (
                    <span
                      key={day}
                      className={`block flex-1 rounded-[2px] transition-colors duration-500 ${
                        isLast
                          ? "bg-clay"
                          : "bg-cream/12 group-hover/phase:bg-cream/28"
                      }`}
                      style={{
                        animation: `lay-block 0.6s cubic-bezier(0.22,1,0.36,1) both`,
                        animationDelay: `${120 + dayCursor * 45}ms`,
                      }}
                    />
                  );
                })}
              </div>

              {showLabels ? (
                <div className="mt-3 border-t border-line pt-2.5">
                  <span
                    className={`block font-mono text-[0.625rem] tracking-[0.12em] uppercase transition-colors duration-300 ${
                      isLast
                        ? "text-clay-bright"
                        : "text-stone group-hover/phase:text-cream"
                    }`}
                  >
                    {isLast ? "Live" : phase.days.replace("Dag ", "")}
                  </span>
                  <span className="mt-1.5 hidden text-[0.8125rem] leading-snug text-balance text-cream-dim lg:block">
                    {phase.title}
                  </span>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <p className="sr-only">
        Het traject duurt {BUILD_DAYS} dagen:{" "}
        {phases.map((p) => `${p.days} ${p.title}`).join(", ")}.
      </p>
    </div>
  );
}
