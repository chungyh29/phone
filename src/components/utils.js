

export const getMousePos = (e) => {
  return ({x:e.clientX, y:e.clientY })
}

export const getMouseDegrees = (x,degreeLimit) => {
  let dx = 0,
      xdiff,
      xPercentage

   let w = {x:window.innerWidth}

  //ARObject rotates between 0 and (-)degreeLimit

  //Cursor on left side of screen
  if (x <= w.x/2) {
    xdiff = w.x/2 - x
    xPercentage = (xdiff / (w.x/2)) * 100
    dx = ((degreeLimit*xPercentage)/100) *-1
  }

  //Corsor on right side of screen
  if(x>w.x/2){
    xdiff = x-w.x/2
    xPercentage = (xdiff / (w.x/2)) *100
    dx = (degreeLimit * xPercentage) / 100

  }
  return{x:dx}
}

