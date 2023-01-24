//your code here
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = ((hr / 12) * 360) + ((min/60)*30) + 90; //converting current time
    min_rotation = ((min / 60) * 360) + ((sec/60)*6) + 90;
    sec_rotation = ((sec / 60) * 360) + 90;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);