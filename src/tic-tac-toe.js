class TicTacToe {
    constructor() {
this.player='x';
//this.n = 3;
//this.m = 3;
this.mas = [];
for (var i = 0; i < 3; i++){
    this.mas[i] = [];
}
    }

    getCurrentPlayerSymbol() {
return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
if(this.mas[rowIndex][columnIndex]===this.player)
return;
if((this.mas[rowIndex][columnIndex]==='x'&&this.player==='o')||(this.mas[rowIndex][columnIndex]==='o'&&this.player==='x'))
 return ;

this.mas[rowIndex][columnIndex]= this.player;
if(this.player==='x')
this.player='o';
else this.player='x';
    }

    isFinished() {
for(var i='x',j=1;j<3;j++,i='o')
{
if((this.mas[0][0]===i&&this.mas[0][1]===i&&this.mas[0][2]===i)||(this.mas[1][0]===i&&this.mas[1][1]===i&&this.mas[1][2]===i)||(this.mas[2][0]===i&&this.mas[2][1]===i&&this.mas[2][2]===i)||(this.mas[0][0]===i&&this.mas[1][0]===i&&this.mas[2][0]===i)||(this.mas[0][1]===i&&this.mas[1][1]===i&&this.mas[2][1]===i)||(this.mas[0][2]===i&&this.mas[1][2]===i&&this.mas[2][2]===i)||(this.mas[0][0]===i&&this.mas[1][1]===i&&this.mas[2][2]===i)||(this.mas[0][2]===i&&this.mas[1][1]===i&&this.mas[2][0]===i))
return true;
}
for(var k=0;k<3;k++)
for(var l=0;l<3;l++)
if(this.mas[k][l]!='x'&&this.mas[k][l]!='o')
return false;
return true;

    }

    getWinner() {
for(var i='x',j=1;j<3;j++,i='o')
{
if(this.mas[0][0]===i&&this.mas[0][1]===i&&this.mas[0][2]===i)
return i;
if(this.mas[1][0]===i&&this.mas[1][1]===i&&this.mas[1][2]===i)
return i;
if(this.mas[2][0]===i&&this.mas[2][1]===i&&this.mas[2][2]===i)
return i;
if(this.mas[0][0]===i&&this.mas[1][0]===i&&this.mas[2][0]===i)
return i;
if(this.mas[0][1]===i&&this.mas[1][1]===i&&this.mas[2][1]===i)
return i;
if(this.mas[0][2]===i&&this.mas[1][2]===i&&this.mas[2][2]===i)
return i;
if(this.mas[0][0]===i&&this.mas[1][1]===i&&this.mas[2][2]===i)
return i;
if(this.mas[0][2]===i&&this.mas[1][1]===i&&this.mas[2][0]===i)
return i;
}
return null;

    }

    noMoreTurns() {
for(var k=0;k<3;k++)
for(var l=0;l<3;l++)
if(this.mas[k][l]!='x'&&this.mas[k][l]!='o')
return false;
return true;

    }

    isDraw() {
for(var k=0;k<3;k++)
for(var l=0;l<3;l++)
if(this.mas[k][l]!='x'&&this.mas[k][l]!='o')
return false;
for(var i='x',j=1;j<3;j++,i='o')
{
if((this.mas[0][0]===i&&this.mas[0][1]===i&&this.mas[0][2]===i)||(this.mas[1][0]===i&&this.mas[1][1]===i&&this.mas[1][2]===i)||(this.mas[2][0]===i&&this.mas[2][1]===i&&this.mas[2][2]===i)||(this.mas[0][0]===i&&this.mas[1][0]===i&&this.mas[2][0]===i)||(this.mas[0][1]===i&&this.mas[1][1]===i&&this.mas[2][1]===i)||(this.mas[0][2]===i&&this.mas[1][2]===i&&this.mas[2][2]===i)||(this.mas[0][0]===i&&this.mas[1][1]===i&&this.mas[2][2]===i)||(this.mas[0][2]===i&&this.mas[1][1]===i&&this.mas[2][0]===i))
return false;
}
return true;
   

    }


    getFieldValue(rowIndex, colIndex) {
if(this.mas[rowIndex][colIndex]!=null)
return this.mas[rowIndex][colIndex];
return null;
    }
}

module.exports = TicTacToe;
