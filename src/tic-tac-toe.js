class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.gameField = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    //должен вернуть x или o
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    //должен правильно обновить состояние класса (изменить текущего игрока, обновить хранилище меток и т. д.)
    if (this.gameField[rowIndex][columnIndex] == null) {
      this.gameField[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
    }
    return;
  }

  isFinished() {
    //должен возвращать истину, если игра завершена (например, есть победитель или это ничья)
    if (this.isDraw() || this.getWinner()) {
      return true;
    }
    return false;
    // return (this.isDraw() || this.getWinner() ) ? true : false ;
  }

  getWinner() {
    //должен возвращать символ победителя ( x или o) или null, если победителя еще нет
    const checkLine = (a, b, c) => {
      if (a !== null && a == b && a == c) {
        return a;
      }
      return null;
    };
    let ret;
    ret = checkLine(
      this.gameField[0][0],
      this.gameField[1][1],
      this.gameField[2][2]
    );
    if (ret !== null) return ret;
    ret = checkLine(
      this.gameField[0][2],
      this.gameField[1][1],
      this.gameField[2][0]
    );
    if (ret !== null) return ret;
    for (let i = 0; i < 3; i++) {
      ret = checkLine(
        this.gameField[i][0],
        this.gameField[i][1],
        this.gameField[i][2]
      );
      if (ret !== null) return ret;
      ret = checkLine(
        this.gameField[0][i],
        this.gameField[1][i],
        this.gameField[2][i]
      );
      if (ret !== null) return ret;
    }

    return null;
  }

  noMoreTurns() {
    //должен вернуть истину, если больше нет полей для размещения x или o
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) {
        if (this.gameField[i][j] == null) {
          return false;
        }
      }
    return true;
  }

  isDraw() {
    //должен вернуть истину, если ходов больше нет и нет победителя
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    //должен возвращать matrix[row][col]значение (если есть) илиnull
    if ((rowIndex < 3) & (colIndex < 3)) {
      return this.gameField[rowIndex][colIndex];
    } else {
      return null;
    }
  }
}

let ttt = new TicTacToe();
ttt.nextTurn(0, 0);
ttt.nextTurn(0, 1);
ttt.nextTurn(2, 2);
ttt.nextTurn(0, 2);
ttt.nextTurn(1, 1);
console.log(ttt.getCurrentPlayerSymbol());
console.log(ttt.noMoreTurns());
console.log(ttt.getFieldValue(0, 0));
console.log(ttt.getWinner());

// console.log(false || null ? true : false);
// console.log(false || null);

module.exports = TicTacToe;
