// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]


var matrixReshape = function(mat, r, c) {
    let matArr = mat.flat()
    let legalLength = matArr.length
    let result = [];
    if((r * c) !== legalLength){
        return mat
    }else{
        let i = 0;
        let j = 0;
        for(i=0 ;i<r;i++){
            let subArr=[]
            for(j=0;j<c;j++){
                subArr.push(matArr[j]);
            }
            matArr.splice(0,c)
            result.push(subArr)
            }
        
        }
        return result;
    
    
};