type ScheduleItem = {
  time: string;
  title: string;
};

export function ScheduleList({ items }: { items: ScheduleItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div
          key={`${item.time}-${idx}`}
          className="w-full rounded-xl bg-[#f2f2f2] px-6 py-4"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#8a8a8a]" />

            <div className="leading-tight">
              <div className="text-base md:text-lg font-semibold text-black">
                {item.time}
              </div>
              <div className="text-sm md:text-base text-[#6d6d6d]">
                {item.title}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
