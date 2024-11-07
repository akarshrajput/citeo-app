import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

export function Pricing() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center">
      <div className={"flex w-[600px] flex-col gap-4 lg:flex-row"}>
        <MagicCard
          className="cursor-pointer p-4 shadow-2xl whitespace-nowrap"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">Type-1</p>
            <p>$100</p>
            <div>
              <p>Included</p>
              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>

              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>
              <p>Custom Landing Page Design</p>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </div>
  );
}
