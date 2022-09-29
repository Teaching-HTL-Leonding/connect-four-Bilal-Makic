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

  constructor() {
    this.playerNames = ['..', 'blue', 'red'];
    this.onRestart();
  }

  public drop(colIx: number) {
    console.log(`Coin dropped in column ${colIx}`);
    if (this.getDropIndex(colIx) >= 0) {
      this.boardContent[this.getDropIndex(colIx)][colIx] =
        this.currentPlayerIndex;
    }
    this.currentPlayerIndex = this.currentPlayerIndex === 1 ? 2 : 1;
  }

  private getDropIndex(colIx: number) {
    for (let i = this.boardContent.length - 1; i >= 0; i--) {
      if (this.boardContent[i][colIx] === 0) {
        return i;
      }
    }
    return -1;
  }

  public getWinnerName(): string {
    return this.playerNames[this.currentWinnerIndex];
  }

  public get winnerIndex(): number{
    return this.currentWinnerIndex;
  }

  public getPlayerName(col: number, row: number): string {
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(row: number, col: number): string {
    if (this.boardContent[row][col] !== 0) {
      return `occupied-${this.boardContent[row][col]}`;
    }
    return '';
  }

  public onRestart(): void {
    this.boardContent = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    this.currentPlayerIndex = 1;
    this.currentWinnerIndex = 0;
  }

  // TODO: Complete this class by adding the appropriate code
  // At the end, this should become a working connect-four-game on a 4 x 4 board.
}
