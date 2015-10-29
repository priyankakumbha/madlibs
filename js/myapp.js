angular.module('myApp', [])
		
		.controller('MyCtrl', function( $scope) {
		  $scope.gender = new Gender(true);
	  });
	function Gender(isFemale) {
    this.isFemale = isFemale;

    
    this.himHer = function() {
        return this.isFemale ? "her" : "him";
    };

    this.heShe = function() {
        return this.isFemale ? "she" : "he";
    };

    this.hisHer = function() {
        return this.isFemale ? "her" : "his";
    };

}