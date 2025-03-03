import { HomeLayout } from "../components/home/HomeLayout";

export default function Index() {
  return (
    <div
      className="md:h-vertical-center bg-red-300"
    >
      <div
        className="bg-blue-300 container mx-auto"
      >
        <HomeLayout/>
      </div>
    </div>
  );
}
