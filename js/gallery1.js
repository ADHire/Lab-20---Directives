var app = angular.module('galleryMod')

app.directive('gallery1', function() {
		return {
			transclude: true,
			restrict: "E",
			template: '<img ng-src="{{picture.src}}">',
			replace: false
		};
	});