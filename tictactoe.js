var tictactoe = function(tictactoe){
	var X;
	var O;
	var TIE;


	function newBoard() {
		return 0;
	}

	function isEmpty(board){
		return(board === 0);
	}

	function getPiece(board, square){
		return((board>>(square <<1))&3);

	}
}