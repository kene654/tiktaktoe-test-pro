let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Function to handle player moves
function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;

        if (checkWinner()) {
            setMessage(`Player ${currentPlayer} wins!`);
            gameActive = false;
        } else if (isBoardFull()) {
            setMessage("It's a draw!");
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            setMessage(`Player ${currentPlayer}'s turn`);
        }
    }
}

// Function to check for a winner
function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]               // Diagonals
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

// Function to check if the board is full
function isBoardFull() {
    return board.every(cell => cell !== '');
}

// Function to display messages to the user
function setMessage(message) {
    document.getElementById('message').innerText = message;
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    // Clear the board display
    const cells = document.getElementById('board').children;
    for (const cell of cells) {
        cell.innerText = '';
    }

    setMessage(`Player ${currentPlayer}'s turn`);
}
