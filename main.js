const body = document.querySelector("body");
body.addEventListener("load", board.create());

const board = (() => {
    const create = () => {
    const boardContainer = document.querySelector("main");
    for(let i = 0; i < 9; i++)
    {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        boardContainer.append(square);
    }
    };

    return {
        create,
    };
})();

    
