
var Bounds = function(){

	this.x 		= 0;
	this.y 		= 0;
	this.width  = 0;
	this.height = 0;

};

module.exports = Bounds;

Bounds.prototype = {

	set: function( x, y, width, height ){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

};

Object.defineProperties( Bounds.prototype, {

	top: {
		get: function(){
			return this.y;
		}
	},
	right: {
		get: function(){
			return this.x + this.width;
		}
	},
	bottom: {
		get: function(){
			return this.y + this.height;
		}
	},

	left: {
		get: function(){
			return this.x;
		}
	}

});