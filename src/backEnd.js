export function test() {
  return 'working!'
}

export function birthday(year) {
  const yearString = `${year}`;
  const date = new Date();
  const currentYear = date.getFullYear();
  const age = currentYear - year;
  return age;

}
