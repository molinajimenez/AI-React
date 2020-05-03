export default function sketch(p) {
  let grid = null
  p.setup = () => {
    var myCanvas = p.createCanvas(600, 600);
    myCanvas.parent("canvas");
  };

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.codedMaze) {
      grid = props.codedMaze

    }
  };

  p.draw = () => {

    p.background(51);
    /*
    if (grid != null) {
      for (var i = 0; i < grid.length; i++) {

        show(grid[i].getX(), grid[i].getY(), grid[i].getWalls())
      }
    }
    */
  };


  function show(x, y, walls = [true, true, true, true]) {
    const w = 35
    var coord_x = Math.floor(x * w);
    var coord_y = Math.floor(y * w);

    console.log(coord_x, coord_y, walls)
    if (walls[0]) {
      //top
      p.line(coord_x, coord_y, coord_x + w, coord_y)
    }

    if (walls[1]) {
      //right
      p.line(coord_x + w, coord_y, coord_x + w, coord_y)
    }

    if (walls[2]) {
      //bottom
      p.line(coord_x + w, coord_y + w, coord_x, coord_y + w)
    }

    if (walls[3]) {
      //left
      p.line(coord_x, coord_y + w, coord_x, coord_y)
    }
    //noFill();
    //rect(x,coord_y,w,w)
  }

};