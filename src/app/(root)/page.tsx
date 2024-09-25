import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio";
import Service from "@/components/service";
import Chatbot from "@/components/shared/chatbot";
import Skill from "@/components/Skill";
import SwiperBar from "@/components/swiperBar";

export default function Home() {
  return (
    <>
      <main className="z-10 relative">
        {/* hero section */}
        <section className="wrapper relative mt-[75px] sm:mt-[100px]  ">
          <Hero />
        </section>
        {/* Slider section*/}
        <section className="relative 2xl:wrapper">

          <SwiperBar />
        </section>
        {/* Skills Section */}
        <section className="relative wrapper" id="skill">
          <Skill />
        </section>
        {/* portfolio section */}
        <section className="wrapper relative" id="portfolio">
          <Portfolio />
        </section>
        {/* service section */}
        <section className="wrapper relative" id="services">
          <Service />
        </section>
        {/* about section */}
        <section className="wrapper relative" id="about">
          <About />
        </section>
        {/* contact section */}
        <section className="relative" id="contact">
          <Contact />
        </section>
        <Chatbot />
      </main>
      {/* vector 1 */}
      <div
        className=' h-[500px] w-[575px] md:w-[875px] lg:w-[966px]  absolute top-0 right-0 z-0 bg-[url("/vectors/Vector-1.png")] overflow-hidden'>
      </div>
      {/* vector 2 */}
      <div
        className=' h-[1000px] w-[531px] md:w-[531px] lg:w-[531px]  absolute top-[700px] -left-[300px] sm:-left-[200px] md:-left-[88px] z-0 bg-[url("/vectors/Vector-2.png")] overflow-hidden'>
      </div>
      {/* vector 3 */}
      <div
        className=' h-[1377px] w-[431px] md:w-[531px] lg:w-[700px]  2xl:w-[1000px] absolute top-[1893px] right-0 z-0 bg-[url("/vectors/Vector-3.png")] overflow-hidden blur-xl'>
      </div>
      {/* vector 4 */}
      <div
        className=' h-[718.52px] w-[231px] md:w-[426.32px]  absolute top-[3371.95px] left-0 z-0 bg-[url("/vectors/Vector-4.png")] overflow-hidden blur-xl'>
      </div>
    </>
  );
}
