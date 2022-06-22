// define
new Blinken({
  title: "Primary",
  author: "cc"
}).run(lights => {
  // initialize
  for (let i = 0; i < 100; i++) {
    lights[i].a = 1;
    lights[i].rgb(0, 0, 1);
  }
  // udpate
  let i = 0;
  return () => {
    const j = Math.floor(i / 100) % 3;
    if (j === 0) lights[i % 100].rgb(1, 0, 0); // red
    else if (j === 1) lights[i % 100].rgb(1, 1, 0); // yellow
    else lights[i % 100].rgb(0, 0, 1); // blue
    i += 1;
    return 40;
  };
});
