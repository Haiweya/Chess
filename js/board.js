function DrowChessBoard() {
    var mycanvs = document.getElementById("chessboard");
    var ctx = mycanvs.getContext("2d");
    ctx.strokeStyle = "#0c485e";
    ctx.lineWidth= 1;

    for (i = 0; i < 15; i++) {
        /*横向线条*/
        ctx.moveTo(30, 30 + i * 30);
        ctx.lineTo(450, 30 + i * 30);
        ctx.stroke();

        /*纵向线条*/
        ctx.moveTo(30 + i * 30, 30);
        ctx.lineTo(30 + i * 30, 450);
        ctx.stroke();
    }
    
    ctx.fillStyle = "#121738";
    //  五个点
    ctx.fillRect(115,115,10,10);
    ctx.fillRect(355,115,10,10);
    ctx.fillRect(235,235,10,10);
    ctx.fillRect(115,355,10,10);
    ctx.fillRect(355,355,10,10);
}

DrowChessBoard();

