interface IDayHours {
  dayHours: string;
}

export function DayHours({ dayHours }: IDayHours) {
  return (
    <span className="mt-4 w-full flex justify-center text-[#E1E1E6] text-xs font-light">
      {dayHours}
    </span>
  );
}
