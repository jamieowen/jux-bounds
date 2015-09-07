
var contains = function( rect, target )
{
	return (
		rect.left >= target.left &&
		rect.right <= target.right &&
		rect.top >= target.top &&
		rect.bottom <= target.bottom
	);
};

module.exports = contains;