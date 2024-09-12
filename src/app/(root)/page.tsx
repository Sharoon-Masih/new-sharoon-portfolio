import About from "@/components/about";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Skill from "@/components/skill";
import SwiperBar from "@/components/swiperBar";

export default function Home() {
  return (

    <main className="z-10 relative">
      {/* hero section */}
      <section className="wrapper relative mt-[75px] sm:mt-[100px]  " id="/">
        <Hero />
      </section>
      {/* Slider section*/}
      <section className="relative 2xl:wrapper">
        <SwiperBar />
      </section>
      {/* Skills Section */}
      <section className="relative wrapper" id="services">
        <Skill />
      </section>
      {/* portfolio section */}
      <section className="wrapper relative" id="portfolio">
        <Portfolio />
      </section>
      {/* about section */}
      <section className="wrapper relative" id="about">
        <About />
      </section>

    </main>
  );
}
