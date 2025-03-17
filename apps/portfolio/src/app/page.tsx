import { HeroSectionLayout } from "../components/home/HeroSectionLayout";

export default async function Index() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div
      className="flex items-center justify-center"
    >
      <div
        className="container mx-auto"
      >
        <div
          className="w-[90%] md:w-[80%] mx-auto h-vertical-center flex items-center"
        >
          <HeroSectionLayout />
        </div>
      </div>
    </div>
  );
}
