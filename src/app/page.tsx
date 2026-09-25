import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="blog-view min-h-screen bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 py-10 md:py-14">
        <SiteNav active="about" />

        <div className="mt-14 md:mt-20 grid gap-10 md:grid-cols-[220px_1fr] md:gap-16">
          <aside className="md:sticky md:top-10 md:self-start">
            <div className="w-32 h-40 md:w-[220px] md:h-[270px] relative overflow-hidden grayscale">
              <Image
                src="/aditi.jpg"
                alt="Aditi Kumar"
                fill
                sizes="(min-width: 768px) 220px, 128px"
                className="object-cover object-top"
                priority
              />
            </div>
            <h1
              className="mt-6 text-[18px] font-medium leading-[1.4]"
            >
              Hello | नमस्ते | नमस्कार
            </h1>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </aside>

          <section className="prose-bw max-w-3xl">
            <p>
              I&apos;m <strong>Aditi Kumar</strong>, a researcher and engineer. At
              the <strong>Illinois Institute of Technology</strong>, I worked with{" "}
              <strong>Mark Roman Miller, Nelson Rosa, and Kevin Meade</strong> on
              mobility technology for stroke survivors, studying how it shapes
              independence, safety, and identity. I presented this work to the{" "}
              <strong>Pacific Stroke Association</strong> and{" "}
              <strong>Advocate Health</strong>.
            </p>
            <p>
              I also worked with <strong>Nik Sultana</strong> on{" "}
              <strong>Caper</strong>, a system for programmable network
              infrastructure, and built assistive navigation prototypes for
              visually impaired users at the{" "}
              <strong>National University of Singapore</strong>.
            </p>
            <p>
              More recently, as an <strong>AI/ML Engineer</strong>, I built LLM
              based systems, including work in <strong>legal tech</strong> on
              making AI outputs verifiable.
            </p>
            <p>
              I&apos;m most interested in how the brain learns and reorganizes
              after neurological injury, and how{" "}
              <strong>neuroscience, machine learning, and HCI</strong> can improve
              rehabilitation.
            </p>
            <p>
              I care a lot about society and humanity, and I want to make sure
              that the systems we build for the future are safe. That is what
              draws me to <strong>AI safety</strong> as well, and I spend some of
              my time reading about economics and intelligence to understand AI
              models better.
            </p>
            <p>
              I like reading books, drinking coffee, spending time with friends,
              and running! I ran cross country in university and had the best
              time. These days you can find me in Bangalore, discovering new
              running routes :)
            </p>
            <p className="reading-line">
              Currently reading two books parallely:{" "}
              <em>A Sixth of Humanity</em> and{" "}
              <em>The World According to Physics</em>.
            </p>
          </section>

        </div>

        <footer className="mt-20 pt-6 border-t border-black/15">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-black/40">
            Aditi Kumar, 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
