'use strict';

{
  const btn = document.getElementById('btn');
  const results = ['大吉', '中吉', '凶', '末吉', '小吉'];
  btn.addEventListener('click',() => {
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
  btn.textContent = results[Math.floor(Math.random() * results.length)];

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}