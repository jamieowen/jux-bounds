var test = require( 'tape' );

var Rect = require( '../Rect' );

var contains   = require( '../contains' );
var intersects = require( '../intersects' );

test( 'intersect & contains', function( t ){

	var r1 = new Rect();
	r1.size( 10,10,50,50 );

	var r2 = new Rect();
	r2.size( 40,40,50,50 );

	var r3 = new Rect();
	r3.size( 20,20,20,20 );

	var r4 = new Rect();
	r4.size( 100,100,10,10 );

	t.equals( contains( r2, r1 ) , false, 'does not contain rect - only intersects.' );
	t.equals( contains( r3, r1 ) , true, 'fully contains rect' );
	t.equals( contains( r4, r1 ) , false, 'completely outside' );

	t.equals( intersects( r2, r1 ) , true, 'intersects rect' );
	t.equals( intersects( r3, r1 ) , true, 'fully intersects rect' );
	t.equals( intersects( r4, r1 ) , false, 'completely outside' );

});