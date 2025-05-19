//封装一个函数，获取当前时间，并将时间分为三个阶段
export const getTime = ()=>{
  const date = new Date();
  const hour = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2,'0');
  const seconds = String(date.getSeconds()).padStart(2,'0');
  let message = '';
  console.log('小时：'+hour);
  if(hour<= 12){
    message = '上午好，现在是';
  }else if(hour>12 && hour<=18){
    message = '下午好，现在是'
  }else if(hour>18 && hour<=23){
    message = '晚上好，现在是';
  }
  //拼接字符
  const formattenTime = `${message} ${hour}:${minutes}:${seconds}`;
  console.log(formattenTime);
  return formattenTime;
}