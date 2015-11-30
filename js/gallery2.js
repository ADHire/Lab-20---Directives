var app = angular.module('galleryMod')

app.directive('gallery2', function() {
		return {
			transclude: true,
			restrict: "E",
			template: '<img ng-src="{{picture.src}}">',
			replace: false
		};
	});