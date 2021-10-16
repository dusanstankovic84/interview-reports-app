// function for formating dates of interviews and candidate birthdays

export const formatDate = (bDay) => {
  let date = new Date(bDay);
  if(isNaN(date))
    return bDay;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if(day < 10) day = '0' + day;
  if(month < 10) month = '0' + month;
  let year = date.getFullYear();
  return `${day}.${month}.${year}.`;
};

// function for generating random picture on a candidate card 

export const getRandomAvatar = () => {
  const rnd = Math.floor(Math.random() * 10);
  if(rnd >= 5)
    return process.env.PUBLIC_URL + '/avatar-female.svg';
  else
    return process.env.PUBLIC_URL + '/avatar-male.svg';
}