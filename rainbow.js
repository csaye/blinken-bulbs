new Blinken({
  title: "Rainbow",
  author: "cc"
}).run(lights => {
  for (let i = 0; i < 100; i++) {
    lights[i].a = 1;
    lights[i].rgb(1, 1, 1);
  }
  let i = 0;
  return () => {
    for (let j = 0; j < 100; j++) {
      lights[(i + 90) % 100].rgb(1, 0, 0);
      lights[(i + 80) % 100].rgb(1, 0.5, 0);
      lights[(i + 70) % 100].rgb(1, 1, 0);
      lights[(i + 60) % 100].rgb(0, 1, 0);
      lights[(i + 50) % 100].rgb(0, 0, 1);
      lights[(i + 40) % 100].rgb(0.5, 0, 1);
      lights[(i + 30) % 100].rgb(1, 0, 0.5);
      lights[(i + 20) % 100].rgb(0.5, 0.5, 0.5);
      lights[(i + 10) % 100].rgb(0, 0, 0);
      lights[(i +  0) % 100].rgb(1, 1, 1);
    }
    i += 1;
    return 40;
  };
});
