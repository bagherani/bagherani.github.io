'use client';

import { useEffect } from 'react';
import './assets/page.css';

export default function Page() {
  useEffect(() => {
    const backgroundInterval = drawMatrixBG();

    return () => {
      clearInterval(backgroundInterval);
    };
  }, []);

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

function drawMatrixBG() {
  const canvas: HTMLCanvasElement = document.getElementById(
    'c',
  ) as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
  const matrix = alphabet.split('');

  const font_size = 14;
  const columns = canvas.width / font_size;
  const drops: number[] = [];
  ctx.font = font_size + 'px arial';

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#055805';
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  return setInterval(draw, 30);
}
