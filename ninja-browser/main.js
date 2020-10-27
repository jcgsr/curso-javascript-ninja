(function() {
	var myObj = {
		myProp: 1,
		init: function init() {
			return this.myProp
		}
	};	
	console.log(myObj.init())
}());
