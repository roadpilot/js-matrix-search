const exist = function(board, word) {
    console.log(board[0][0], word[0])
   
    if (word.length > board.length * board[0].length) return false
    let k = 0
    for(let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
           if (board[i][j] === word[k] || board[j][i] === word[k]) {
               //check directions for word[k + 1]
              if (board[i - 1][j] === word[k +1] || board[i + 1][j] === word[k + 1] || board[i][j - 1] === word[k + 1] || board[i][j + 1] === word[k + 1]) 
           }
        }
    }
    
};

function checkForWord(row, column, word, wordIdx) { //board[row][col]
    // check all directions ? b/c if not there we get null, if (row < 0), keep moving, 
    
    // this checks for out of bounds, so we don't hit undefined
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }
    // this checks if current position holds the letter we're looking for, checks across and down 
    if (board[row][col] !== word[i] && board[col][row] !== word[i]) {
        return false;
    }
}
/*
Kent's idea

find coords of first letter, 
    if first letter doesn't exist at all return false,
    after finding first, check directions (up, down, left, right)
    check to see if any of those match the second letter of the word. 
                right   left    down    up
    directions [[0,1], [0,-1], [1,0], [-1,0]]
        if none are next letter, return false
    keep looking for first letter again 
        iteration to keep checking along the path
    as long as return is true, we keep checking directions        

*/
/*
helper function to check all moves, possible args would be --> row, column, letter

word.length > row * column return false

board = [                word = "ABCCED"
["A","B","C","E"],
["S","F","C","S"],
["A","D","E","E"]]

row = board.length
column = board[0].length

            right   left    down    up
directions [[0,1], [0,-1], [1,0], [-1,0]]

*** Helper ***
start at board[0][0] --> iterate to find word[i]
when we find starting position of word[i], check all directions for word[i + 1], if word[i+ 1] check all directions, minus previous coords. 

// Maybe we need to delete/slice, or hold previous coords in variable as they're found so they can't be used twice? --> or change letter to something else


*/