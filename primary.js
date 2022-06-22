new Blinken({
  title: "Primary",
  author: "cc"
}).run(lights => {
  for (let i = 0; i < 100; i++) {
    lights[i].a = 1;
    lights[i].rgb(0, 0, 1);
  }
  let i = 0;
  return () => {
    const j = Math.floor(i / 100) % 3;
    if (j === 0) lights[i % 100].rgb(1, 0, 0);
    else if (j === 1) lights[i % 100].rgb(1, 1, 0);
    else lights[i % 100].rgb(0, 0, 1);
    i += 1;
    return 40;
  };
});
