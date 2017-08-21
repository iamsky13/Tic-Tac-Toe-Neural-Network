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

	function move(board, square,piece){

		return(board|(piece<<(square<<1)));
	}

	function Game(board, turn, history){
		this.board=board;
		this.turn = turn;
		this.history=history;
	}

	Game.prototype.equals = function Game_equals(other){
		return(this.board === other.board && this.turn === other.turn)

	}
	
	Game.prototype.getPiece = function Game_getPiece(square) {
        return getPiece(this.board, square);
    };

    Game.prototype.toString = function Game_toString() {
        return "" + (this.turn === X ? "X" : "O") + "@" + toString(this.board);
};
}