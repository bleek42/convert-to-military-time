function timeConversion(s) {
  // Write your code here
  const merideum = s.slice(-2);
  const time = s.slice(0, -2);
  let [hh, mm, ss] = time.split(':');
  if (merideum === 'PM' && hh !== '12') {
    hh = +hh + 12 + '';
  }
  if (merideum === 'AM' && hh === '12') {
    hh = '00';
  }
  return (`${hh}:${mm}:${ss}`);
};

console.log(timeConversion('12:35:06PM'));
console.log(timeConversion('12:02:13AM'));
console.log(timeConversion('04:02:00AM'));
console.log(timeConversion('06:14:57PM'));