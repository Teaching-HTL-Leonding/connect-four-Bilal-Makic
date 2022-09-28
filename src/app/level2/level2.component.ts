import { Component } from '@angular/core';

@Component({
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css'],
})
export class Level2Component {
  public currentPlayerIndex = 1;
  private currentWinnerIndex = 0;
  public boardContent!: number[][];
  public playerNames!: string[];

  constructor(){
    this.playerNames = ["..", "blue", "red"];
    this.onRestart();
  }

  public drop(colIx: number) {
    console.log(`Coin dropped in column ${colIx}`);
    this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
  }

  public getWinnerName(): string{
    return this.playerNames[this.currentWinnerIndex];
  }

  public getPlayerName(col: number, row: number): string{
    return this.playerNames[this.boardContent[row][col]];
  }

  private playerIndexToClass(playerIx: number): string {
    if (playerIx !== 0) {
      return `occupied-${playerIx}`;
    }

    return '';
  }

  public getStyle(col: number, row: number): string{
    return this.playerIndexToClass(this.boardContent[row][col]);
  }

  public onRestart():void{
    this.boardContent=[
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    this.currentPlayerIndex=1;
    this.currentWinnerIndex=0;
  }



  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
}
