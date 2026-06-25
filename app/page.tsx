import FrontendLayout from "./components/layouts/FrontendLayout";

export default function Home() {
  return (
    <FrontendLayout>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[url('/data/hero.jpg')] bg-cover bg-center
      pt-32 lg:pt-36 py-2">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55"/>
        {/* gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/50 to-transparent"/> 
      
      </section>
    </FrontendLayout>
  );
}
