"use client";

import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** Mac-window style stat tiles: dark card, traffic-light dots, big number; lights up blue on hover. */
export function StatCards({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stats.map((s) => (
        <StaggerItem key={s.label}>
          <div className="group flex aspect-square select-none flex-col justify-between rounded-[26px] border border-transparent bg-[#0f1b3d] p-4 text-[#eef3ff] transition-all duration-300 ease-in-out hover:scale-[1.06] hover:border-brand-400 hover:bg-[#0b1430] sm:aspect-auto sm:h-52 sm:p-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c941] sm:h-3 sm:w-3" />
            </div>
            <span className="text-4xl font-black tracking-tight transition-all duration-300 group-hover:text-brand-400 sm:text-5xl lg:text-[3.5rem] lg:group-hover:text-[3.9rem]">
              {s.value}
            </span>
            <p className="text-xs text-white/70 transition-all duration-300 group-hover:font-medium group-hover:text-brand-200 sm:text-[13px] sm:group-hover:text-[15px]">
              {s.label}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
