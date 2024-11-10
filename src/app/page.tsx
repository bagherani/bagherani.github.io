import { Intro } from './components/Intro';
import { Socials } from './components/Socials';

export default function Page() {
  return (
    <main
      data-testid="main"
      className="h-screen flex flex-col gap-6 items-center justify-center"
    >
      <Intro />
      <Socials />
    </main>
  );
}
