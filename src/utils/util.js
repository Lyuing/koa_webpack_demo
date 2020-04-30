export default function format (t, format){
  let date = new Date(t)
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dat = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if(format){
    return format.replace(/(?<!y)y(?!y)/ig, year)
    .replace(/mn/ig, month)
    .replace(/(?<!d)d(?!d)/ig, dat)
    .replace(/(?<!h)h(?!h)/ig, hour)
    .replace(/(?<!m)m(?!m)/ig, minute)
    .replace(/(?<!s)s(?!s)/ig, second)
  }else{
    return `${year}-${month}-${dat} ${hour}:${minute}`
  }
}