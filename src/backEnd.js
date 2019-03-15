export function test() {
  return 'working!'
}

export function birthday(year) {
  let date = new Date();
  let currentYear = date.getFullYear();
  let age = currentYear - year;
  return age;

}

export function checkMonth(month) {
 let userMonth = new Date(`${month}, 0000`);
 let date = new Date();
 let currentMonth = date.getMonth();
 let inputMonth = userMonth.getMonth();
  if (currentMonth >= inputMonth) {
    return true;
  } else {
    return false;
  }
}

export function getBirthYear(age) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let birthYear = currentYear - age;
  return birthYear;
}

export function checkDate(date) {
  let input= new Date (date);
  let current = new Date ();
  let inputDate = input.getDate();
  let currentDate = current.getDate();
  if (currentDate >= inputDate) {
    return true;
  } else {
    return false;
  }

}

export function findAge(month, date, year) {
  let inputDate = `${month} ${date}, ${year}`;
  let userDate = new Date(inputDate);
  let currentDate = new Date();
  if (checkMonth(month) === true && checkDate(date) === true) {
    return birthday(year)
  } else {
    return (birthday(year) - 1);
  }
}

export class GalacticAge {
  constructor(age) {
    this.age = parseFloat(age.toFixed(2));
    this.ageMercury = parseFloat((age/0.24).toFixed(2));
    this.ageVenus = parseFloat((age/0.62).toFixed(2));
    this.ageMars = parseFloat((age/1.88).toFixed(2));
    this.ageJupiter = parseFloat((age/11.86).toFixed(2));
  }
  yearsLeft(lifeExpectancy,planetAge) {
    let years = Math.abs(lifeExpectancy - planetAge);
    if (lifeExpectancy > planetAge) {
      return `You have ${years} years left to live on this planet`;
    } else {
      return `You have exceeded the life expectancy on this planet by ${years} years.`;

    }
  }
}
