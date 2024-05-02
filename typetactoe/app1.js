var TicTacToeGame = /** @class */ (function () {
    function TicTacToeGame() {
    }
    TicTacToeGame.hasWon = function () {
        var sets = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
            var set = sets_1[_i];
            var a = set[0], b = set[1], c = set[2];
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }
        if (this.board.every(function (cell) { return cell !== ''; })) {
            return 'tie';
        }
        return null;
    };
    TicTacToeGame.clickCell = function (index) {
        if (!this.gameOver && this.board[index] === '') {
            this.board[index] = this.current;
            this.grid.children[index].textContent = this.current;
            this.current = this.current === 'X' ? 'O' : 'X';
            this.playerTurn.textContent = "Player's Turn: ".concat(this.current);
            var winner = this.hasWon();
            if (winner) {
                if (winner === 'tie') {
                    this.messages.textContent = "Tied.";
                }
                else {
                    this.messages.textContent = "Player ".concat(winner, " wins.");
                }
                this.gameOver = true;
            }
        }
    };
    TicTacToeGame.resetGame = function () {
        var _this = this;
        this.current = 'X';
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameOver = false;
        this.playerTurn.textContent = "Player's Turn: X";
        this.messages.textContent = '';
        var cells = this.grid.querySelectorAll('.cell');
        cells.forEach(function (cell, index) {
            cell.textContent = '';
            cell.addEventListener('click', function () { return _this.clickCell(index); });
        });
    };
    TicTacToeGame.init = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', function () { return _this.clickCell(i); });
            this_1.grid.appendChild(cell);
        };
        var this_1 = this;
        for (var i = 0; i < 9; i++) {
            _loop_1(i);
        }
    };
    TicTacToeGame.current = 'X';
    TicTacToeGame.board = ['', '', '', '', '', '', '', '', ''];
    TicTacToeGame.gameOver = false;
    TicTacToeGame.grid = document.getElementById('grid');
    TicTacToeGame.playerTurn = document.getElementById('player-turn');
    TicTacToeGame.messages = document.getElementById('message');
    return TicTacToeGame;
}());
TicTacToeGame.init();
