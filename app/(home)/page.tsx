import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="w-screen max-h-screen">
      <section className="container mx-auto text-center">
        <div className="flex justify-center items-center">
          <Intro />
        </div>
      </section>
    </main>
  );
}
