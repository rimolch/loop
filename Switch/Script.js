var d = new Date();
Switch (new Date().getDay()){
case 0:
day = " Sunday ";
break;
case 1:
day = " Monday ";
break;
case 2:
day = " Tuesday ";
case 3:
break;
day = " Wednesday ";
break;
case 4:
day = " Thursday ";
break;
case 5:
day = " Friday ";
break;
case 6:
day = " Saturday ";
break;
default;
day = " Unknown ";
}
console.log(day);
