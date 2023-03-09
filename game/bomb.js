// class Bomb {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.time = 5;
//         this.radius = 1
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]

//         ];
//     }
//     getNewCordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]

//         ];
//     }
//     chooseCell(char, char1, char2, char3, char4) {
//         this.getNewCordinates();
//         let result = [];

//         for (let i = 0; i < this.directions.length; i++) {
//             let x = this.directions[i][0];
//             let y = this.directions[i][1];

//             if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//                 if (matrix[y][x] == char) {
//                     result.push(this.directions[i]);
//                 }
//             }
//             if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//                 if (matrix[y][x] == char1) {
//                     result.push(this.directions[i]);
//                 }
//             }
//             if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//                 if (matrix[y][x] == char2) {
//                     result.push(this.directions[i]);
//                 }
//             }
//             if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//                 if (matrix[y][x] == char3) {
//                     result.push(this.directions[i]);
//                 }
//             }
//             if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
//                 if (matrix[y][x] == char4) {
//                     result.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;

//     }
//     mul() {
//         let emptyCell = this.chooseCell(0);
//         let newCell = random(emptyCell)

//         if (newCell && this.energy > 5) {
//             let newX = newCell[0];
//             let newY = newCell[1];

//             let pred = new Bomb(newX, newY);
//             matrix[newY][newX] = 6
//             predatorArr.push(pred);

//             this.energy = 16;
//         }
//     }
// }

class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 5;
        this.radius = 1
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
        ];
    }
    chooseCell(char, char1, char2, char3, char4) {
        this.getNewCordinates();
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char3) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char4) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }
    mul() {
        let found = this.chooseCell(0, 1);
        let exact = random(found)

        if (exact) {
      
            this.radius++;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            



            this.x = x
            this.y = y

        }
        if (this.radius > 4) {
            this.die()
        }
    }
    eat() {
        let emptyCell = this.chooseCell(1,2);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            for (let i = 0; i < 10; i++) {
                var x = Math.floor(Math.random() * matrix.length)
                var y = Math.floor(Math.random() * matrix.length)
                    matrix[y][x]=6
            }
            if (this.energy > 20) {
                this.mul()
            }
        } 
        

   
}
die() {

    for (let i = 0; i < bombArr.length; i++) {
        if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
            bombArr.splice(i, 1)
        }
    }
    matrix[this.y][this.x] = 0

    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] == 5) {
                matrix[x][y] = 6
            }
        }
    }
}
}

