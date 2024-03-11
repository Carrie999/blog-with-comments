import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I am Carrie
          </h1>
          <p>
            I am a digital nomad now.
            In the past few years, I have been engaged in UI design for one year and front-end development for about five years, working in several companies in Beijing.
            I enjoy appreciating art and design, such as installation art, drawing, and interior design.
            I enjoy exploring things I don't know and doing things I haven't done before.
            I also know a little Japanese, some server technology, some Blender for 3d modeling, UE5 for game development.
            I listen to a lot of music, read a lot of books, play many games, and have been to many places.
            I do stock trading.
            I want to find something different to do.
          </p>
          <p>
            You can contact me by email: 771685809@qq.com
          </p>

        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        {/* <Image
          src="/desk.jpg"
          alt="my desk"
          width={1920 / 2}
          height={1280 / 2}
        /> */}
      </div>
    </>
  );
}

export default HomePage;
