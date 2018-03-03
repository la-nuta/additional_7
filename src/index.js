module.exports = function solveSudoku(matrix) {

    let matrixArray = [],
        result = [];

    matrix.map((array) => {
        return matrixArray = matrixArray.concat(array);
});


    if (getUnknown(0)) {
        for (let i = 0; i < matrixArray.length; i += 9) {
            let currentRow = matrixArray.slice(i, i + 9);
            result.push(currentRow);
        }

        return result;
    }

    function getUnknown(index) {

        if (matrixArray[index] === 0) {
            for (let i = 1; i <= 9; i++) {
                if (checkUnknown(i, Math.floor(index / 9), index % 9)) {
                    matrixArray[index] = i;
                    if (getUnknown(index + 1)) {

                        return true;
                    }
                }
            }
        } else if (index > (matrixArray.length + 1)) {
            return true;

        } else if (matrixArray[index] !== 0) {
            return getUnknown(index + 1);

        }

        matrixArray[index] = 0;
        return false;
    }


    function checkUnknown(number, row, column) {
        for (let i = 0; i < 9; i++) {
            if (number === matrixArray[(row * 9) + i] ||
                number === matrixArray[column + (i * 9)] ||
                number === matrixArray[((Math.floor(row / 3) * 3) + Math.floor(i / 3)) * 9 + (Math.floor(column / 3) * 3) + (i % 3)]) {

                return false;
            }
        }

        return true;
    }
}