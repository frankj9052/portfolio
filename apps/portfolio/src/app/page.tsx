import { Spacer } from "@heroui/react";
import { HeroSectionLayout } from "../components/home/HeroSectionLayout";

export default function Index() {
  return (
    <div
      className="flex items-center justify-center"
    >
      <div
        className="container mx-auto"
      >
        <div
          className="w-[90%] md:w-[80%] mx-auto md:h-vertical-center flex items-center"
        >
          <Spacer y={16} className="md:hidden"/>
          <HeroSectionLayout />
        </div>
      </div>
    </div>
  );
}
