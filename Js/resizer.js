
function resizer(){

  const windowWidthMax = 1325;

  const windowWidth = window.innerWidth;

  var porcentResizerDown = (windowWidth * 100) / windowWidthMax;

  var porcentResizer = porcentResizerDown - 100;

  console.log(windowWidth);

}

export default resizer;