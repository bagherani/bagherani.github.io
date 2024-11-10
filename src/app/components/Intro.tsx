import Image from 'next/image';

import img from '../assets/mohi-bagherani.jpg';

export function Intro() {
  return (
    <section
      className="z-10 relative flex flex-col justify-center items-center"
      data-testid="home"
    >
      <Image
        src={img}
        width={128}
        height={128}
        data-testid="avatar"
        alt="mohi bagherani profile picture"
        className="rounded-full w-128 h-128 md:w-[160px] md:h-[160px]"
      />
      <h1 data-testid="heading" className="font-bold text-4xl md:text-5xl mt-7">
        MOHI BAGHERANI
      </h1>
      <p className="text-lg md:text-2xl mt-7" data-testid="description">
        Software Engineer
      </p>
    </section>
  );
}
