// // Given an integer numRows, return the first numRows of Pascal's triangle.

// // In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
    let arr=[];
    for(var i=0;i<numRows;i++){
    let temp =[];
    for(var j=0;j<=i;j++){
    if(j ==0 || j===i)
    temp[j] = 1
    else {
    let sub = arr[i-1]
    temp[j] = sub[j-1]+sub[j]
    }
    }
    arr.push(temp);
    }
    return arr;
    };