new Blinken({
  title: "Rainbow",
  author: "cc"
}).run(lights => {
  for (let i = 0; i < 100; i++) {
    lights[i].a = 1;
    lights[i].rgb(1, 1, 1);
  }
});
