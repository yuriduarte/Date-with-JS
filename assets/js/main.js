// Versão original
// const h1 = document.querySelector('h1');
// const date = new Date();
// const weekDay = date.getDay();
// const monthDay = date.getDate();
// const month = date.getMonth();
// const year = date.getFullYear();
// const h = date.getHours();
// const m = date.getMinutes();

// function addLeftZero(num) {
//   if(num < 10) {
//     return `0${num}`
//   }
//   return num;
// }

// function getTextWeek(week) {
//   switch (week) {
//     case 0:
//       return 'Domingo';
//     case 1:
//       return 'Segunda-feira';
//     case 2:
//       return 'Terça-feira';
//     case 3:
//       return 'Quarta-feira';
//     case 4:
//       return 'Quinta-feira';
//     case 5:
//       return 'Sexta-feira';
//     case 6:
//       return 'Sábado';
//     default: '';
//       break;
//   }
// }

// function getTextMonth(month) {
//   switch (month) {
//     case 0:
//       return 'janeiro';
//     case 1:
//       return 'fevereiro';
//     case 2:
//       return 'março';
//     case 3:
//       return 'abril';
//     case 4:
//       return 'maio';
//     case 5:
//       return 'junho';
//     case 6:
//       return 'julho';
//     case 7:
//       return 'agosto';
//     case 8:
//       return 'setembro';
//     case 9:
//       return 'outubro';
//     case 10:
//       return 'novembro';
//     case 11:
//       return 'dezembro';
//     default: '';
//       break;
//   }
// }

// const textWeek = getTextWeek(weekDay);
// const textMonth = getTextMonth(month);
// const hour = addLeftZero(h);
// const min = addLeftZero(m);
// h1.innerHTML = `${textWeek}, ${monthDay} de ${textMonth} de ${year} ${hour}:${min}`;

// Versão simplificada:
const h1 = document.querySelector('h1');
const date = new Date();
const options = {
  dateStyle: 'full',
  timeStyle: 'short'
};

h1.innerHTML = date.toLocaleDateString('pt-BR', options);