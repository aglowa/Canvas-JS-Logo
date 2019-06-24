$test = setInterval(function(){ drawKhaos(80, 2); }, 50);
$x = 1;
$rgb = 140;
$rgb1 = 102;
$rgb2 = 134;
$opacity = 1;

var ctx = $('.logo')[0].getContext("2d");

function drawKhaos($startCoordX, $startCoordY){
  ctx.beginPath();
  switch($x){
  case 1:
    ctx.rect($startCoordX, $startCoordY+40, 8, 8);
    break;
  case 2:
    ctx.rect($startCoordX, $startCoordY+30, 8, 8);
    break;
  case 3:
    ctx.rect($startCoordX, $startCoordY+20, 8, 8);
    break;
  case 4:
    ctx.rect($startCoordX, $startCoordY+10, 8, 8);
    break;
  case 5:
    ctx.rect($startCoordX+10, $startCoordY, 8, 8);
    break;
  case 6:
    ctx.rect($startCoordX+20, $startCoordY, 8, 8);
    break;
  case 7:
    ctx.rect($startCoordX+30, $startCoordY+10, 8, 8);
    break;
  case 8:
    ctx.rect($startCoordX+30, $startCoordY+20, 8, 8);
    break;
  case 9:
    ctx.rect($startCoordX+30, $startCoordY+30, 8, 8);
    break;
  case 10:
    ctx.rect($startCoordX+30, $startCoordY+40, 8, 8);
    break;
  case 11:
    ctx.rect($startCoordX+30, $startCoordY+40, 8, 8);
    break;
  case 12:
    ctx.rect($startCoordX+10, $startCoordY+20, 8, 8);
    break;
  case 13:
    ctx.rect($startCoordX+20, $startCoordY+20, 8, 8);
    break;
      /* end a */
  case 14:
    ctx.rect($startCoordX+50, $startCoordY+40, 8, 8);
    break;
   case 15:
    ctx.rect($startCoordX+50, $startCoordY+30, 8, 8);
    break;
    case 16:
    ctx.rect($startCoordX+50, $startCoordY+20, 8, 8);
    break;
     case 17:
    ctx.rect($startCoordX+50, $startCoordY+10, 8, 8);
    break;
     case 18:
    ctx.rect($startCoordX+60, $startCoordY, 8, 8);
    break;
      case 19:
    ctx.rect($startCoordX+70, $startCoordY, 8, 8);
    break;
      case 20:
    ctx.rect($startCoordX+60, $startCoordY+40, 8, 8);
    break;
       case 21:
    ctx.rect($startCoordX+70, $startCoordY+40, 8, 8);
    break;
       case 22:
    ctx.rect($startCoordX+80, $startCoordY+40, 8, 8);
    break;
       case 23:
    ctx.rect($startCoordX+80, $startCoordY+30, 8, 8);
    break;
       case 24:
    ctx.rect($startCoordX+80, $startCoordY+20, 8, 8);
    break;
       case 25:
    ctx.rect($startCoordX+70, $startCoordY+20, 8, 8);
    break;
    /* end g */
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba('+$rgb+','+$rgb1+','+$rgb2+','+$opacity+')';
  $opacity /= 1.02;
  ctx.fill();
  $x++;
  if ($x > 57){
    clearInterval($test);
  }
}
