import { Heading } from "@components/Heading";

import { Github, Stackoverflow, Medium } from "../assets/icons";
import { Container } from "@components/Container";

function HomePage() {
  return (
    <Container>
      <Heading active="/" />
      {/* info */}
      <div className="mt-8">
        <span className="text-red-800 font-bold"> Hey! </span>
        <span className="text-2xl inline-block mr-3 animate-waving">
          &#128075;
        </span>
        Enes here<span className="hidden sm:inline-block mx-2">-</span>
        <div className="sm:inline">An Expert Software Developer</div>
      </div>

      {/* contact icons - github, medium, stackoverflow */}
      <div className=" flex gap-6 justify-center items-center mt-4 md:mt-8 mb-12 sm:mb-24 md:mb-32 ">
        <a href="" className="hover:opacity-70">
          <Github />
        </a>

        <a href="" className="hover:opacity-70">
          <Stackoverflow />
        </a>
        <a href="" className="hover:opacity-70">
          <Medium />
        </a>
      </div>

      <div className="text-3xl">
        I turn the ideas into high quality and smoothly working products using
        the below tech stack
      </div>

      {/* tags */}
      <main className="text-2xl mt-4 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-4  text-blue-900 italic underline max-w-screen-md ml-auto mr-auto">
        <span>#React.JS</span>
        <span>#Javascript</span>
        <span>#Typescript</span>
        <span>#Redux</span>
        <span>#Webpack</span>
        <span>#Tailwind</span>
        <span className="md:col-start-2">#Bootstrap</span>
        <span>#Jest</span>
        <span>#Formik</span>
        <span className="col-start-2 md:col-start-auto">#React-Table</span>
      </main>
    </Container>
  );
}

export default HomePage;
