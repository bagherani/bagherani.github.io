import './assets/page.css';

export default function Page() {
  return (
    <>
      <canvas id="c" className="fixed left-0 right-0 bottom-0 top-0"></canvas>
      <div
        className="z-10 relative home__container flex justify-center items-center"
        data-testid="home"
      >
        <h1 data-testid="heading" className="font-bold text-7xl home__heading">
          MOHI BAGHERANI
        </h1>
      </div>
    </>
  );
}
