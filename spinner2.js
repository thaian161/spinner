//special character \r to return our cursor back to the beginning of the line that we were on
process.stdout.write('hello from spinner1.js... \rheyyy\n');
//=> heyyy from spinner2.js...

let str = '\r|\r/\r-\r|\r/\r-\r|\r/\r-\r|\r/\r-\r|\r/\r-\r|\r/\r-\n';

const spinner = (str) => {
  let timer = 100;
  for (let item of str) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timer);
    timer += 100;
  }
};

spinner(str);
