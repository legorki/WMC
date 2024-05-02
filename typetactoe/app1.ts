class TicTacToeGame {
    private static current: string = 'X';
    private static board: string[] = ['', '', '', '', '', '', '', '', ''];
    private static gameOver: boolean = false;
    private static grid: HTMLElement = document.getElementById('grid')!;
    private static playerTurn: HTMLElement = document.getElementById('player-turn')!;
    private static messages: HTMLElement = document.getElementById('message')!;

    public static hasWon(): string | null {
        const sets: number[][] = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const set of sets) {
            const [a, b, c] = set;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return this.board[a];
            }
        }

        if (this.board.every(cell => cell !== '')) {
            return 'tie';
        }

        return null;
    }

    public static clickCell(index: number): void {
        if (!this.gameOver && this.board[index] === '') {
            this.board[index] = this.current;
            this.grid.children[index].textContent = this.current;
            this.current = this.current === 'X' ? 'O' : 'X';
            this.playerTurn.textContent = `Player's Turn: ${this.current}`;

            const winner = this.hasWon();
            if (winner) {
                if (winner === 'tie') {
                    this.messages.textContent = "Tied.";
                } else {
                    this.messages.textContent = `Player ${winner} wins.`;
                }
                this.gameOver = true;
            }
        }
    }

    public static resetGame(): void {
        this.current = 'X';
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.gameOver = false;
        this.playerTurn.textContent = "Player's Turn: X";
        this.messages.textContent = '';

        const cells = this.grid.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = '';
            cell.addEventListener('click', () => this.clickCell(index));
        });
    }

    public static init(): void {
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => this.clickCell(i));
            this.grid.appendChild(cell);
        }
    }
}

TicTacToeGame.init();
