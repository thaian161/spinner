//special character \r to return our cursor back to the beginning of the line that we were on
process.stdout.write('hello from spinner1.js... \rheyyy\n');
//=> heyyy from spinner1.js...

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 600);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r| ');
}, 1800);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\n');
}, 2100);
