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

export function checkMonth(month,year) {
 let userMonth = new Date(`${month}, ${year}`);
 const date = new Date();
 const currentMonth = date.getMonth();
 const inputMonth = userMonth.getMonth();
  if (currentMonth >= inputMonth) {
    return true;
  } else {
    return false;
  }
}

export function getBirthYear(age) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthYear = currentYear - age;
  return birthYear;
}
