// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    let rows ={}   
    let cols ={}
    let boxs ={}

    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let num=board[r][c];
            
            if(num==='.')continue
            
            let grid=`${Math.floor(r/3)}${Math.floor(c/3)}`
            
            if(!rows[r])rows[r]=new Set();
            if(!cols[c])cols[c]=new Set();
            if(!boxs[grid])boxs[grid]=new Set();
            
            if( rows[r].has(num) || cols[c].has(num) || boxs[grid].has(num) ) {return false}
            
            rows[r].add(num)
            cols[c].add(num) 
            boxs[grid].add(num) 
            
        }

    }
    
    
    //if there is no repetion that mean the sodoku is valid retrun true
    return true
    
};