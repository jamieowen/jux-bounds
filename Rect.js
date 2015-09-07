
var Rect = function(){

	this.top    = 0;
	this.right 	= 0;
	this.bottom = 0;
	this.left 	= 0;

};

module.exports = Rect;

Rect.prototype = {

	size: function( x, y, width, height ){
		this.left = x; this.top = y;
		this.right = x + width;
		this.bottom = y + height;
	},

	bounds: function( top, right, bottom, left ){
		this.top = top; this.right = right;
		this.bottom = bottom; this.left = left;
	}

};

Object.defineProperties( Rect.prototype, {

	x: {
		get: function(){
			return this.left;
		}
	},
	y: {
		get: function(){
			return this.top;
		}
	},
	width: {
		get: function(){
			return this.right - this.left;
		}
	},

	height: {
		get: function(){
			return this.bottom - this.top;
		}
	}

});