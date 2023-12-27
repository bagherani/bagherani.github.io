import './assets/page.css';
import { Intro } from './components/Intro';

export default function Page() {
  return (
    <main data-testid="main">
      <Intro />
    </main>
  );
}
