import SocialMedia from "./components/SocialMedia";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <main className="w-screen max-h-screen">
      <section className="container mx-auto text-center">
        <div className="flex flex-col justify-center gap-y-10 items-center">
          <Intro />
          <SocialMedia/>
        </div>
      </section>
    </main>
  );
}
