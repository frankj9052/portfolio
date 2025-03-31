import { HeroSectionLayout } from '../components/home/HeroSectionLayout';

export default function Index() {  
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto">
        <div className="w-[90%] md:w-[80%] mx-auto ">
          <div className="h-vertical-center flex items-center">
            <HeroSectionLayout />
          </div>
        </div>
      </div>
    </div>
  );
}
