const body = document.querySelector("body");

const player = (() => {
    let name = "";
    let type = "";
    const setName = (nameSet) => name = nameSet;
    const getName = () => name;
    const setType = (typeSet) => type = typeSet;
    const getType = () => type;
    
    return {
        setName,
        getName,
        getType,
        setType,
    }
});

const board = (() => {
    let boardArray = [];
    let type = "X";
    let winGame = false;
    const editBoardArray = (index) => {
        if(boardArray[index].textContent == "" && !winGame)
        {
            boardArray[index].textContent = type;
            if(type == "X")
            {
                type = "O";
            }
            else
            {
                type = "X";
            }
        }
        checkWin(index);
    };

    const create = () => {
        const boardContainer = document.querySelector("main");
        for(let i = 0; i < 9; i++)
        {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("click", () => {
                editBoardArray(i);
            });
            boardArray.push(square);
            boardContainer.append(square);
        }
    };

    const win = () => {
        winGame = true;
        const body = document.querySelector("body");
        const winScreen = document.createElement("div");
        winScreen.setAttribute("class", "winScreen");

        const h1 = document.createElement("h1");
        h1.textContent = `${type} Wins!`;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            const main = document.querySelector("main");
            console.log("Pay Again");
            while(main.firstChild)
            {
                main.removeChild(main.firstChild);
            }
            winScreen.remove();
            boardArray = [];
            winGame = false;
            type = "X";
            board.create();
        });

        winScreen.append(h1);
        winScreen.append(playAgain);
        body.append(winScreen);
    };

    const tie = () => {
        winGame = true;
        const body = document.querySelector("body");
        const winScreen = document.createElement("div");
        winScreen.setAttribute("class", "winScreen");

        const h1 = document.createElement("h1");
        h1.textContent = `It's a tie`;

        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", () => {
            const main = document.querySelector("main");
            console.log("Pay Again");
            while(main.firstChild)
            {
                main.removeChild(main.firstChild);
            }
            winScreen.remove();
            boardArray = [];
            winGame = false;
            type = "X";
            board.create();
        });

        winScreen.append(h1);
        winScreen.append(playAgain);
        body.append(winScreen);
    };

    let counter = 0;
    const checkWin = (index) => {
        let b = boardArray;
        counter++;
        switch(index)
        {
            case 0:
                if(b[index].textContent == b[1].textContent && b[index].textContent == b[2].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[4].textContent && b[index].textContent == b[8].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[3].textContent && b[index].textContent == b[6].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 1:
                if(b[index].textContent == b[4].textContent && b[index].textContent == b[7].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[0].textContent && b[index].textContent == b[2].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 2:
                if(b[index].textContent == b[1].textContent && b[index].textContent == b[0].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[4].textContent && b[index].textContent == b[6].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[5].textContent && b[index].textContent == b[8].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 3:
                if(b[index].textContent == b[4].textContent && b[index].textContent == b[5].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[0].textContent && b[index].textContent == b[6].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 4:
                if(b[index].textContent == b[1].textContent && b[index].textContent == b[7].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[3].textContent && b[index].textContent == b[5].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[2].textContent && b[index].textContent == b[6].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 5:
                if(b[index].textContent == b[8].textContent && b[index].textContent == b[2].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[4].textContent && b[index].textContent == b[3].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 6:
                if(b[index].textContent == b[0].textContent && b[index].textContent == b[3].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[7].textContent && b[index].textContent == b[8].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[4].textContent && b[index].textContent == b[2].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 7:
                if(b[index].textContent == b[1].textContent && b[index].textContent == b[4].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[6].textContent && b[index].textContent == b[8].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;

            case 8:
                if(b[index].textContent == b[5].textContent && b[index].textContent == b[2].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[6].textContent && b[index].textContent == b[7].textContent)
                {
                    win();
                }
                else if(b[index].textContent == b[4].textContent && b[index].textContent == b[0].textContent)
                {
                    win();
                }
                else if(counter == 9)
                {
                    tie();
                }
                break;
        }
    };

    const getBoardArray = () => boardArray;

    return {
        create,
        checkWin,
        getBoardArray,
    };
})();

body.addEventListener("load", board.create());

    
