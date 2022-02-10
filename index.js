function superbowlWin(array){
   const win = array.find(array => array.result === "W")
    if (win === undefined){
        return win;
    } else {
        return win.year
    }
}
