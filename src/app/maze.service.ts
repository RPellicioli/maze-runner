import { Injectable } from '@angular/core';
import { Block, Direction } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class MazeService {
  public maze: Array<Block> = [];

  constructor() { }

  public generateMaze(): Array<Block> {
    let cordX = 0;
    let cordY = 0;

    for (let i = 0; i < 100; i++) {
      if(cordY == 10) { cordY = 0; cordX++; };

      this.maze.push(
        {
          id: i,
          cordX: cordX,
          cordY: cordY,
          wLeft: false,
          wRight: false,
          wTop: false,
          wBottom: false,
          active: false,
          current: false,
          possibleDirections: []
        }
      );

      cordY++;
    }

    //#region Line 0 | 0-9

    this.maze[0].wTop = true;
    this.maze[0].wLeft = true;
    this.maze[0].possibleDirections.push(Direction.Bottom);
    this.maze[0].possibleDirections.push(Direction.Right);

    this.maze[1].wTop = true;
    this.maze[1].wBottom = true;
    this.maze[1].possibleDirections.push(Direction.Left);
    this.maze[1].possibleDirections.push(Direction.Right);
    this.maze[1].possibleDirections.push(Direction.Bottom);

    this.maze[2].wTop = true;
    this.maze[2].wBottom = true;
    this.maze[2].possibleDirections.push(Direction.Left);
    this.maze[2].possibleDirections.push(Direction.Right);
    this.maze[2].possibleDirections.push(Direction.Bottom);

    this.maze[3].wTop = true;
    this.maze[3].wBottom = true;
    this.maze[3].possibleDirections.push(Direction.Left);
    this.maze[3].possibleDirections.push(Direction.Right);
    this.maze[3].possibleDirections.push(Direction.Bottom);

    this.maze[4].wTop = true;
    this.maze[4].wRight = true;
    this.maze[4].possibleDirections.push(Direction.Left);
    this.maze[4].possibleDirections.push(Direction.Right);
    this.maze[4].possibleDirections.push(Direction.Bottom);

    this.maze[5].wTop = true;
    this.maze[5].wLeft = true;
    this.maze[5].possibleDirections.push(Direction.Left);
    this.maze[5].possibleDirections.push(Direction.Right);
    this.maze[5].possibleDirections.push(Direction.Bottom);

    this.maze[6].wTop = true;
    this.maze[6].wBottom = true;
    this.maze[6].possibleDirections.push(Direction.Left);
    this.maze[6].possibleDirections.push(Direction.Right);
    this.maze[6].possibleDirections.push(Direction.Bottom);

    this.maze[7].wTop = true;
    this.maze[7].wBottom = true;
    this.maze[7].possibleDirections.push(Direction.Left);
    this.maze[7].possibleDirections.push(Direction.Right);
    this.maze[7].possibleDirections.push(Direction.Bottom);

    this.maze[8].wTop = true;
    this.maze[8].wRight = true;
    this.maze[8].possibleDirections.push(Direction.Left);
    this.maze[8].possibleDirections.push(Direction.Right);
    this.maze[8].possibleDirections.push(Direction.Bottom);

    this.maze[9].wTop = true;
    this.maze[9].wLeft = true;
    this.maze[9].possibleDirections.push(Direction.Left);
    this.maze[9].possibleDirections.push(Direction.Bottom);

    //#endregion

    //#region Line 1 | 10-19

    this.maze[10].wRight = true;
    this.maze[10].wLeft = true;
    this.maze[10].possibleDirections.push(Direction.Top);
    this.maze[10].possibleDirections.push(Direction.Bottom);
    this.maze[10].possibleDirections.push(Direction.Right);

    this.maze[11].wTop = true;
    this.maze[11].wBottom = true;
    this.maze[11].wLeft = true;
    this.maze[11].possibleDirections.push(Direction.Top);
    this.maze[11].possibleDirections.push(Direction.Bottom);
    this.maze[11].possibleDirections.push(Direction.Left);
    this.maze[11].possibleDirections.push(Direction.Right);

    this.maze[12].wTop = true;
    this.maze[12].wBottom = true;
    this.maze[12].possibleDirections.push(Direction.Top);
    this.maze[12].possibleDirections.push(Direction.Bottom);
    this.maze[12].possibleDirections.push(Direction.Left);
    this.maze[12].possibleDirections.push(Direction.Right);

    this.maze[13].wTop = true;
    this.maze[13].wBottom = true;
    this.maze[13].possibleDirections.push(Direction.Top);
    this.maze[13].possibleDirections.push(Direction.Bottom);
    this.maze[13].possibleDirections.push(Direction.Left);
    this.maze[13].possibleDirections.push(Direction.Right);

    this.maze[14].wRight = true;
    this.maze[14].wBottom = true;
    this.maze[14].possibleDirections.push(Direction.Top);
    this.maze[14].possibleDirections.push(Direction.Bottom);
    this.maze[14].possibleDirections.push(Direction.Left);
    this.maze[14].possibleDirections.push(Direction.Right);

    this.maze[15].wRight = true;
    this.maze[15].wLeft = true;
    this.maze[15].possibleDirections.push(Direction.Top);
    this.maze[15].possibleDirections.push(Direction.Bottom);
    this.maze[15].possibleDirections.push(Direction.Left);
    this.maze[15].possibleDirections.push(Direction.Right);

    this.maze[16].wTop = true;
    this.maze[16].wLeft = true;
    this.maze[16].possibleDirections.push(Direction.Top);
    this.maze[16].possibleDirections.push(Direction.Bottom);
    this.maze[16].possibleDirections.push(Direction.Left);
    this.maze[16].possibleDirections.push(Direction.Right);

    this.maze[17].wTop = true;
    this.maze[17].wRight = true;
    this.maze[17].possibleDirections.push(Direction.Top);
    this.maze[17].possibleDirections.push(Direction.Bottom);
    this.maze[17].possibleDirections.push(Direction.Left);
    this.maze[17].possibleDirections.push(Direction.Right);

    this.maze[18].wBottom = true;
    this.maze[18].wLeft = true;
    this.maze[18].possibleDirections.push(Direction.Top);
    this.maze[18].possibleDirections.push(Direction.Bottom);
    this.maze[18].possibleDirections.push(Direction.Left);
    this.maze[18].possibleDirections.push(Direction.Right);

    this.maze[19].wRight = true;
    this.maze[19].wBottom = true;
    this.maze[19].possibleDirections.push(Direction.Top);
    this.maze[19].possibleDirections.push(Direction.Bottom);
    this.maze[19].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 2 | 20-29

    this.maze[20].wLeft = true;
    this.maze[20].possibleDirections.push(Direction.Top);
    this.maze[20].possibleDirections.push(Direction.Bottom);
    this.maze[20].possibleDirections.push(Direction.Right);

    this.maze[21].wTop = true;
    this.maze[21].wBottom = true;
    this.maze[21].possibleDirections.push(Direction.Top);
    this.maze[21].possibleDirections.push(Direction.Bottom);
    this.maze[21].possibleDirections.push(Direction.Left);
    this.maze[21].possibleDirections.push(Direction.Right);

    this.maze[22].wTop = true;
    this.maze[22].wBottom = true;
    this.maze[22].possibleDirections.push(Direction.Top);
    this.maze[22].possibleDirections.push(Direction.Bottom);
    this.maze[22].possibleDirections.push(Direction.Left);
    this.maze[22].possibleDirections.push(Direction.Right);

    this.maze[23].wTop = true;
    this.maze[23].wBottom = true;
    this.maze[23].possibleDirections.push(Direction.Top);
    this.maze[23].possibleDirections.push(Direction.Bottom);
    this.maze[23].possibleDirections.push(Direction.Left);
    this.maze[23].possibleDirections.push(Direction.Right);

    this.maze[24].wTop = true;
    this.maze[24].wBottom = true;
    this.maze[24].possibleDirections.push(Direction.Top);
    this.maze[24].possibleDirections.push(Direction.Bottom);
    this.maze[24].possibleDirections.push(Direction.Left);
    this.maze[24].possibleDirections.push(Direction.Right);

    this.maze[25].wRight = true;
    this.maze[25].possibleDirections.push(Direction.Top);
    this.maze[25].possibleDirections.push(Direction.Bottom);
    this.maze[25].possibleDirections.push(Direction.Left);
    this.maze[25].possibleDirections.push(Direction.Right);

    this.maze[26].wRight = true;
    this.maze[26].wBottom = true;
    this.maze[26].wLeft = true;
    this.maze[26].possibleDirections.push(Direction.Top);
    this.maze[26].possibleDirections.push(Direction.Bottom);
    this.maze[26].possibleDirections.push(Direction.Left);
    this.maze[26].possibleDirections.push(Direction.Right);

    this.maze[27].wLeft = true;
    this.maze[27].possibleDirections.push(Direction.Top);
    this.maze[27].possibleDirections.push(Direction.Bottom);
    this.maze[27].possibleDirections.push(Direction.Left);
    this.maze[27].possibleDirections.push(Direction.Right);

    this.maze[28].wTop = true;
    this.maze[28].wBottom = true;
    this.maze[28].possibleDirections.push(Direction.Top);
    this.maze[28].possibleDirections.push(Direction.Bottom);
    this.maze[28].possibleDirections.push(Direction.Left);
    this.maze[28].possibleDirections.push(Direction.Right);

    this.maze[29].wTop = true;
    this.maze[29].wRight = true;
    this.maze[29].possibleDirections.push(Direction.Top);
    this.maze[29].possibleDirections.push(Direction.Bottom);
    this.maze[29].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 3 | 30-39

    this.maze[30].wBottom = true;
    this.maze[30].wLeft = true;
    this.maze[30].possibleDirections.push(Direction.Top);
    this.maze[30].possibleDirections.push(Direction.Bottom);
    this.maze[30].possibleDirections.push(Direction.Right);

    this.maze[31].wTop = true;
    this.maze[31].wBottom = true;
    this.maze[31].possibleDirections.push(Direction.Top);
    this.maze[31].possibleDirections.push(Direction.Bottom);
    this.maze[31].possibleDirections.push(Direction.Left);
    this.maze[31].possibleDirections.push(Direction.Right);

    this.maze[32].wTop = true;
    this.maze[32].wBottom = true;
    this.maze[32].possibleDirections.push(Direction.Top);
    this.maze[32].possibleDirections.push(Direction.Bottom);
    this.maze[32].possibleDirections.push(Direction.Left);
    this.maze[32].possibleDirections.push(Direction.Right);

    this.maze[33].wTop = true;
    this.maze[33].wRight = true;
    this.maze[33].possibleDirections.push(Direction.Top);
    this.maze[33].possibleDirections.push(Direction.Bottom);
    this.maze[33].possibleDirections.push(Direction.Left);
    this.maze[33].possibleDirections.push(Direction.Right);

    this.maze[34].wTop = true;
    this.maze[34].wBottom = true;
    this.maze[34].wLeft = true;
    this.maze[34].possibleDirections.push(Direction.Top);
    this.maze[34].possibleDirections.push(Direction.Bottom);
    this.maze[34].possibleDirections.push(Direction.Left);
    this.maze[34].possibleDirections.push(Direction.Right);

    this.maze[35].wBottom = true;
    this.maze[31].possibleDirections.push(Direction.Top);
    this.maze[31].possibleDirections.push(Direction.Bottom);
    this.maze[31].possibleDirections.push(Direction.Left);
    this.maze[31].possibleDirections.push(Direction.Right);

    this.maze[36].wTop = true;
    this.maze[36].wBottom = true;
    this.maze[36].possibleDirections.push(Direction.Top);
    this.maze[36].possibleDirections.push(Direction.Bottom);
    this.maze[36].possibleDirections.push(Direction.Left);
    this.maze[36].possibleDirections.push(Direction.Right);

    this.maze[37].wRight = true;
    this.maze[37].wBottom = true;
    this.maze[37].possibleDirections.push(Direction.Top);
    this.maze[37].possibleDirections.push(Direction.Bottom);
    this.maze[37].possibleDirections.push(Direction.Left);
    this.maze[37].possibleDirections.push(Direction.Right);

    this.maze[38].wTop = true;
    this.maze[38].wRight = true;
    this.maze[38].wLeft = true;
    this.maze[38].possibleDirections.push(Direction.Top);
    this.maze[38].possibleDirections.push(Direction.Bottom);
    this.maze[38].possibleDirections.push(Direction.Left);
    this.maze[38].possibleDirections.push(Direction.Right);

    this.maze[39].wRight = true;
    this.maze[39].wLeft = true;
    this.maze[39].possibleDirections.push(Direction.Top);
    this.maze[39].possibleDirections.push(Direction.Bottom);
    this.maze[39].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 4 | 40-49

    this.maze[40].wTop = true;
    this.maze[40].wLeft = true;
    this.maze[40].possibleDirections.push(Direction.Top);
    this.maze[40].possibleDirections.push(Direction.Bottom);
    this.maze[40].possibleDirections.push(Direction.Right);

    this.maze[41].wTop = true;
    this.maze[41].wRight = true;
    this.maze[41].wBottom = true;
    this.maze[41].possibleDirections.push(Direction.Top);
    this.maze[41].possibleDirections.push(Direction.Bottom);
    this.maze[41].possibleDirections.push(Direction.Left);
    this.maze[41].possibleDirections.push(Direction.Right);

    this.maze[42].wTop = true;
    this.maze[42].wLeft = true;
    this.maze[42].possibleDirections.push(Direction.Top);
    this.maze[42].possibleDirections.push(Direction.Bottom);
    this.maze[42].possibleDirections.push(Direction.Left);
    this.maze[42].possibleDirections.push(Direction.Right);

    this.maze[43].wRight = true;
    this.maze[43].possibleDirections.push(Direction.Top);
    this.maze[43].possibleDirections.push(Direction.Bottom);
    this.maze[43].possibleDirections.push(Direction.Left);
    this.maze[43].possibleDirections.push(Direction.Right);

    this.maze[44].wTop = true;
    this.maze[44].wLeft = true;
    this.maze[44].possibleDirections.push(Direction.Top);
    this.maze[44].possibleDirections.push(Direction.Bottom);
    this.maze[44].possibleDirections.push(Direction.Left);
    this.maze[44].possibleDirections.push(Direction.Right);

    this.maze[45].wTop = true;
    this.maze[45].wBottom = true;
    this.maze[45].possibleDirections.push(Direction.Top);
    this.maze[45].possibleDirections.push(Direction.Bottom);
    this.maze[45].possibleDirections.push(Direction.Left);
    this.maze[45].possibleDirections.push(Direction.Right);

    this.maze[46].wTop = true;
    this.maze[46].wBottom = true;
    this.maze[46].possibleDirections.push(Direction.Top);
    this.maze[46].possibleDirections.push(Direction.Bottom);
    this.maze[46].possibleDirections.push(Direction.Left);
    this.maze[46].possibleDirections.push(Direction.Right);

    this.maze[47].wTop = true;
    this.maze[47].wBottom = true;
    this.maze[47].possibleDirections.push(Direction.Top);
    this.maze[47].possibleDirections.push(Direction.Bottom);
    this.maze[47].possibleDirections.push(Direction.Left);
    this.maze[47].possibleDirections.push(Direction.Right);

    this.maze[48].wRight = true;
    this.maze[48].wBottom = true;
    this.maze[48].possibleDirections.push(Direction.Top);
    this.maze[48].possibleDirections.push(Direction.Bottom);
    this.maze[48].possibleDirections.push(Direction.Left);
    this.maze[48].possibleDirections.push(Direction.Right);

    this.maze[49].wBottom = true;
    this.maze[49].wLeft = true;
    this.maze[49].possibleDirections.push(Direction.Top);
    this.maze[49].possibleDirections.push(Direction.Bottom);
    this.maze[49].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 5 | 50-59

    this.maze[50].wBottom = true;
    this.maze[50].wLeft = true;
    this.maze[50].possibleDirections.push(Direction.Top);
    this.maze[50].possibleDirections.push(Direction.Bottom);
    this.maze[50].possibleDirections.push(Direction.Right);

    this.maze[51].wTop = true;
    this.maze[51].wBottom = true;
    this.maze[51].possibleDirections.push(Direction.Top);
    this.maze[51].possibleDirections.push(Direction.Bottom);
    this.maze[51].possibleDirections.push(Direction.Left);
    this.maze[51].possibleDirections.push(Direction.Right);

    this.maze[52].wRight = true;
    this.maze[52].possibleDirections.push(Direction.Top);
    this.maze[52].possibleDirections.push(Direction.Bottom);
    this.maze[52].possibleDirections.push(Direction.Left);
    this.maze[52].possibleDirections.push(Direction.Right);

    this.maze[53].wLeft = true;
    this.maze[53].possibleDirections.push(Direction.Top);
    this.maze[53].possibleDirections.push(Direction.Bottom);
    this.maze[53].possibleDirections.push(Direction.Left);
    this.maze[53].possibleDirections.push(Direction.Right);

    this.maze[54].wBottom = true;
    this.maze[54].possibleDirections.push(Direction.Top);
    this.maze[54].possibleDirections.push(Direction.Bottom);
    this.maze[54].possibleDirections.push(Direction.Left);
    this.maze[54].possibleDirections.push(Direction.Right);

    this.maze[55].wTop = true;
    this.maze[55].wBottom = true;
    this.maze[55].possibleDirections.push(Direction.Top);
    this.maze[55].possibleDirections.push(Direction.Bottom);
    this.maze[55].possibleDirections.push(Direction.Left);
    this.maze[55].possibleDirections.push(Direction.Right);

    this.maze[56].wTop = true;
    this.maze[56].wBottom = true;
    this.maze[56].possibleDirections.push(Direction.Top);
    this.maze[56].possibleDirections.push(Direction.Bottom);
    this.maze[56].possibleDirections.push(Direction.Left);
    this.maze[56].possibleDirections.push(Direction.Right);

    this.maze[57].wTop = true;
    this.maze[57].wBottom = true;
    this.maze[57].possibleDirections.push(Direction.Top);
    this.maze[57].possibleDirections.push(Direction.Bottom);
    this.maze[57].possibleDirections.push(Direction.Left);
    this.maze[57].possibleDirections.push(Direction.Right);

    this.maze[58].wTop = true;
    this.maze[58].wBottom = true;
    this.maze[58].possibleDirections.push(Direction.Top);
    this.maze[58].possibleDirections.push(Direction.Bottom);
    this.maze[58].possibleDirections.push(Direction.Left);
    this.maze[58].possibleDirections.push(Direction.Right);

    this.maze[59].wTop = true;
    this.maze[59].wRight = true;
    this.maze[59].possibleDirections.push(Direction.Top);
    this.maze[59].possibleDirections.push(Direction.Bottom);
    this.maze[59].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 6 | 60-69

    this.maze[60].wTop = true;
    this.maze[60].wLeft = true;
    this.maze[60].possibleDirections.push(Direction.Top);
    this.maze[60].possibleDirections.push(Direction.Bottom);
    this.maze[60].possibleDirections.push(Direction.Right);

    this.maze[61].wTop = true;
    this.maze[61].wBottom = true;
    this.maze[61].possibleDirections.push(Direction.Top);
    this.maze[61].possibleDirections.push(Direction.Bottom);
    this.maze[61].possibleDirections.push(Direction.Left);
    this.maze[61].possibleDirections.push(Direction.Right);

    this.maze[62].wRight = true;
    this.maze[62].wBottom = true;
    this.maze[62].possibleDirections.push(Direction.Top);
    this.maze[62].possibleDirections.push(Direction.Bottom);
    this.maze[62].possibleDirections.push(Direction.Left);
    this.maze[62].possibleDirections.push(Direction.Right);

    this.maze[63].wRight = true;
    this.maze[63].wLeft = true;
    this.maze[63].possibleDirections.push(Direction.Top);
    this.maze[63].possibleDirections.push(Direction.Bottom);
    this.maze[63].possibleDirections.push(Direction.Left);
    this.maze[63].possibleDirections.push(Direction.Right);

    this.maze[64].wTop = true;
    this.maze[64].wBottom = true;
    this.maze[64].wLeft = true;
    this.maze[64].possibleDirections.push(Direction.Top);
    this.maze[64].possibleDirections.push(Direction.Bottom);
    this.maze[64].possibleDirections.push(Direction.Left);
    this.maze[64].possibleDirections.push(Direction.Right);

    this.maze[65].wTop = true;
    this.maze[65].possibleDirections.push(Direction.Top);
    this.maze[65].possibleDirections.push(Direction.Bottom);
    this.maze[65].possibleDirections.push(Direction.Left);
    this.maze[65].possibleDirections.push(Direction.Right);

    this.maze[66].wTop = true;
    this.maze[66].wRight = true;
    this.maze[66].possibleDirections.push(Direction.Top);
    this.maze[66].possibleDirections.push(Direction.Bottom);
    this.maze[66].possibleDirections.push(Direction.Left);
    this.maze[66].possibleDirections.push(Direction.Right);

    this.maze[67].wTop = true;
    this.maze[67].wLeft = true;
    this.maze[67].possibleDirections.push(Direction.Top);
    this.maze[67].possibleDirections.push(Direction.Bottom);
    this.maze[67].possibleDirections.push(Direction.Left);
    this.maze[67].possibleDirections.push(Direction.Right);

    this.maze[68].wTop = true;
    this.maze[68].wBottom = true;
    this.maze[68].possibleDirections.push(Direction.Top);
    this.maze[68].possibleDirections.push(Direction.Bottom);
    this.maze[68].possibleDirections.push(Direction.Left);
    this.maze[68].possibleDirections.push(Direction.Right);

    this.maze[69].wRight = true;
    this.maze[69].wBottom = true;
    this.maze[69].possibleDirections.push(Direction.Top);
    this.maze[69].possibleDirections.push(Direction.Bottom);
    this.maze[69].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 7 | 70-79

    this.maze[70].wLeft = true;
    this.maze[70].possibleDirections.push(Direction.Top);
    this.maze[70].possibleDirections.push(Direction.Bottom);
    this.maze[70].possibleDirections.push(Direction.Right);

    this.maze[71].wTop = true;
    this.maze[71].possibleDirections.push(Direction.Top);
    this.maze[71].possibleDirections.push(Direction.Bottom);
    this.maze[71].possibleDirections.push(Direction.Left);
    this.maze[71].possibleDirections.push(Direction.Right);

    this.maze[72].wTop = true;
    this.maze[72].wBottom = true;
    this.maze[72].possibleDirections.push(Direction.Top);
    this.maze[72].possibleDirections.push(Direction.Bottom);
    this.maze[72].possibleDirections.push(Direction.Left);
    this.maze[72].possibleDirections.push(Direction.Right);

    this.maze[73].wBottom = true;
    this.maze[73].possibleDirections.push(Direction.Top);
    this.maze[73].possibleDirections.push(Direction.Bottom);
    this.maze[73].possibleDirections.push(Direction.Left);
    this.maze[73].possibleDirections.push(Direction.Right);

    this.maze[74].wTop = true;
    this.maze[74].possibleDirections.push(Direction.Top);
    this.maze[74].possibleDirections.push(Direction.Bottom);
    this.maze[74].possibleDirections.push(Direction.Left);
    this.maze[74].possibleDirections.push(Direction.Right);

    this.maze[75].wRight = true;
    this.maze[75].possibleDirections.push(Direction.Top);
    this.maze[75].possibleDirections.push(Direction.Bottom);
    this.maze[75].possibleDirections.push(Direction.Left);
    this.maze[75].possibleDirections.push(Direction.Right);

    this.maze[76].wRight = true;
    this.maze[76].wLeft = true;
    this.maze[76].possibleDirections.push(Direction.Top);
    this.maze[76].possibleDirections.push(Direction.Bottom);
    this.maze[76].possibleDirections.push(Direction.Left);
    this.maze[76].possibleDirections.push(Direction.Right);

    this.maze[77].wBottom = true;
    this.maze[77].wLeft = true;
    this.maze[77].possibleDirections.push(Direction.Top);
    this.maze[77].possibleDirections.push(Direction.Bottom);
    this.maze[77].possibleDirections.push(Direction.Left);
    this.maze[77].possibleDirections.push(Direction.Right);

    this.maze[78].wTop = true;
    this.maze[78].wBottom = true;
    this.maze[78].possibleDirections.push(Direction.Top);
    this.maze[78].possibleDirections.push(Direction.Bottom);
    this.maze[78].possibleDirections.push(Direction.Left);
    this.maze[78].possibleDirections.push(Direction.Right);

    this.maze[79].wTop = true;
    this.maze[79].wRight = true;
    this.maze[79].possibleDirections.push(Direction.Top);
    this.maze[79].possibleDirections.push(Direction.Bottom);
    this.maze[79].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 8 | 80-89

    this.maze[80].wRight = true;
    this.maze[80].wLeft = true;
    this.maze[80].possibleDirections.push(Direction.Top);
    this.maze[80].possibleDirections.push(Direction.Bottom);
    this.maze[80].possibleDirections.push(Direction.Right);

    this.maze[81].wRight = true;
    this.maze[81].wLeft = true;
    this.maze[81].possibleDirections.push(Direction.Top);
    this.maze[81].possibleDirections.push(Direction.Bottom);
    this.maze[81].possibleDirections.push(Direction.Left);
    this.maze[81].possibleDirections.push(Direction.Right);

    this.maze[82].wTop = true;
    this.maze[82].wBottom = true;
    this.maze[82].wLeft = true;
    this.maze[82].possibleDirections.push(Direction.Top);
    this.maze[82].possibleDirections.push(Direction.Bottom);
    this.maze[82].possibleDirections.push(Direction.Left);
    this.maze[82].possibleDirections.push(Direction.Right);

    this.maze[83].wTop = true;
    this.maze[83].wRight = true;
    this.maze[83].wBottom = true;
    this.maze[83].possibleDirections.push(Direction.Top);
    this.maze[83].possibleDirections.push(Direction.Bottom);
    this.maze[83].possibleDirections.push(Direction.Left);
    this.maze[83].possibleDirections.push(Direction.Right);

    this.maze[84].wRight = true;
    this.maze[84].wLeft = true;
    this.maze[84].possibleDirections.push(Direction.Top);
    this.maze[84].possibleDirections.push(Direction.Bottom);
    this.maze[84].possibleDirections.push(Direction.Left);
    this.maze[84].possibleDirections.push(Direction.Right);

    this.maze[85].wRight = true;
    this.maze[85].wLeft = true;
    this.maze[85].possibleDirections.push(Direction.Top);
    this.maze[85].possibleDirections.push(Direction.Bottom);
    this.maze[85].possibleDirections.push(Direction.Left);
    this.maze[85].possibleDirections.push(Direction.Right);

    this.maze[86].wBottom = true;
    this.maze[86].wLeft = true;
    this.maze[86].possibleDirections.push(Direction.Top);
    this.maze[86].possibleDirections.push(Direction.Bottom);
    this.maze[86].possibleDirections.push(Direction.Left);
    this.maze[86].possibleDirections.push(Direction.Right);

    this.maze[87].wTop = true;
    this.maze[87].wBottom = true;
    this.maze[87].possibleDirections.push(Direction.Top);
    this.maze[87].possibleDirections.push(Direction.Bottom);
    this.maze[87].possibleDirections.push(Direction.Left);
    this.maze[87].possibleDirections.push(Direction.Right);

    this.maze[88].wTop = true;
    this.maze[88].wBottom = true;
    this.maze[88].possibleDirections.push(Direction.Top);
    this.maze[88].possibleDirections.push(Direction.Bottom);
    this.maze[88].possibleDirections.push(Direction.Left);
    this.maze[88].possibleDirections.push(Direction.Right);

    this.maze[89].wRight = true;
    this.maze[89].possibleDirections.push(Direction.Top);
    this.maze[89].possibleDirections.push(Direction.Bottom);
    this.maze[89].possibleDirections.push(Direction.Left);

    //#endregion

    //#region Line 9 | 90-99

    this.maze[90].wRight = true;
    this.maze[90].wBottom = true;
    this.maze[90].current = true;
    this.maze[90].possibleDirections.push(Direction.Top);
    this.maze[90].possibleDirections.push(Direction.Right);

    this.maze[91].wBottom = true;
    this.maze[91].wLeft = true;
    this.maze[91].possibleDirections.push(Direction.Top);
    this.maze[91].possibleDirections.push(Direction.Left);
    this.maze[91].possibleDirections.push(Direction.Right);

    this.maze[92].wTop = true;
    this.maze[92].wBottom = true;
    this.maze[92].possibleDirections.push(Direction.Top);
    this.maze[92].possibleDirections.push(Direction.Left);
    this.maze[92].possibleDirections.push(Direction.Right);

    this.maze[93].wTop = true;
    this.maze[93].wBottom = true;
    this.maze[93].possibleDirections.push(Direction.Top);
    this.maze[93].possibleDirections.push(Direction.Left);
    this.maze[93].possibleDirections.push(Direction.Right);

    this.maze[94].wRight = true;
    this.maze[94].wBottom = true;
    this.maze[94].possibleDirections.push(Direction.Top);
    this.maze[94].possibleDirections.push(Direction.Left);
    this.maze[94].possibleDirections.push(Direction.Right);

    this.maze[95].wLeft = true;
    this.maze[95].wBottom = true;
    this.maze[95].possibleDirections.push(Direction.Top);
    this.maze[95].possibleDirections.push(Direction.Left);
    this.maze[95].possibleDirections.push(Direction.Right);

    this.maze[96].wTop = true;
    this.maze[96].wBottom = true;
    this.maze[96].possibleDirections.push(Direction.Top);
    this.maze[96].possibleDirections.push(Direction.Left);
    this.maze[96].possibleDirections.push(Direction.Right);

    this.maze[97].wTop = true;
    this.maze[97].wBottom = true;
    this.maze[97].possibleDirections.push(Direction.Top);
    this.maze[97].possibleDirections.push(Direction.Left);
    this.maze[97].possibleDirections.push(Direction.Right);

    this.maze[98].wTop = true;
    this.maze[98].wBottom = true;
    this.maze[98].possibleDirections.push(Direction.Top);
    this.maze[98].possibleDirections.push(Direction.Left);
    this.maze[98].possibleDirections.push(Direction.Right);

    this.maze[99].wRight = true;
    this.maze[99].wBottom = true;
    this.maze[99].possibleDirections.push(Direction.Top);
    this.maze[99].possibleDirections.push(Direction.Left);

    //#endregion

    return this.maze;
  }
}
