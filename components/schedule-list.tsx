type ScheduleItem = {
  time: string;
  title: string;
};

export function ScheduleList({ items }: { items: ScheduleItem[] }) {
  return (
    <ol className="flex flex-col gap-3" aria-label="Horario del evento">
      {items.map((item, idx) => (
        <li
          key={`${item.time}-${idx}`}
          className="w-full rounded-xl bg-muted px-6 py-4 transition-colors hover:bg-muted/70"
        >
          <div className="flex items-center gap-4">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
              aria-hidden="true"
            />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <span className="text-lg md:text-xl font-semibold text-foreground tabular-nums">
                {item.time}
              </span>
              <span className="text-base md:text-lg text-muted-foreground">
                {item.title}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
