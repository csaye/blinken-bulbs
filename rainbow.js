// define
new Blinken({
  title: "Rainbow",
  author: "cc"
}).run(lights => {
  // initialize
  for (let i = 0; i < 100; i++) {
    lights[i].a = 1;
    lights[i].rgb(1, 1, 1);
  }
  // update
  let i = 0;
  return () => {
    for (let j = 0; j < 100; j++) {
      lights[(i + 90) % 100].rgb(1, 0, 0); // red
      lights[(i + 80) % 100].rgb(1, 0.5, 0); // orange
      lights[(i + 70) % 100].rgb(1, 1, 0); // yellow
      lights[(i + 60) % 100].rgb(0, 1, 0); // green
      lights[(i + 50) % 100].rgb(0, 0, 1); // blue
      lights[(i + 40) % 100].rgb(0.5, 0, 1); // purple
      lights[(i + 30) % 100].rgb(1, 0, 0.5); // pink
      lights[(i + 20) % 100].rgb(0.5, 0.5, 0.5); // gray
      lights[(i + 10) % 100].rgb(0, 0, 0); // black
      lights[(i +  0) % 100].rgb(1, 1, 1); // white
    }
    i += 1;
    return 40;
  };
});
