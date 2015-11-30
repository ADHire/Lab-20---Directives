var app = angular.module('galleryMod', []);

app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.pictures1 = [
	{ src: 'http://rs65.pbsrc.com/albums/h235/Ignwar/Album%20Other/DogTired.jpg~c200', description: 'Dog 1' },
	{ src: 'http://dogbreedersguide.com/wp-content/uploads/2014/12/white-n-black-labrador-retrievers-puppies-hugging-200x200.jpg', description: 'Dog 2'},
	{ src: 'http://www.fidosavvy.com/images/black_labrador_puppy_with_blanket_mitzi_200.jpg', description: 'Dog 3'},
	{ src: 'https://s-media-cache-ak0.pinimg.com/236x/04/e0/d1/04e0d1c660b65706c1b2f7be1bfe01f7.jpg', description: 'Dog 4'},
	]
}]);
app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.pictures2 = [
	{ src: 'http://adogbreeds.com/wp-content/uploads/2012/12/basset-hound-puppies-e1356939939345-200x200.jpg', description: 'Dog 5'},
	{ src: 'http://www.rockingnature.com/wp-content/uploads/2015/02/Puppies11-200x200.jpg', description: 'Dog 6'},
	{ src: 'http://rs1226.pbsrc.com/albums/ee414/Emredb/husky-puppies-pictures.jpg~c200', description: 'Dog 7' },
	{ src: 'http://rs1370.pbsrc.com/albums/ag244/dbemediastream/Sit%20Good%20Boy/cute-puppies-pictures-7_zpsb00a9da5.jpg~c200', description: 'Dog 8' },
	]
}]);
app.controller('galleryCtrl', ['$scope', function($scope) {
	$scope.pictures3 = [
	{ src: 'http://adogbreeds.com/wp-content/uploads/2013/03/Cute-Beagle-Puppies-200x200.jpg', description: 'Dog 9' },
	{ src: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/t/yorkshire-terrier-225404.jpg', description: 'Dog 10' },
	{ src: 'https://e4292304444963bb9b1c-26c9e18a7a93639122506172dc90d702.ssl.cf2.rackcdn.com/gallery/img/i/yorkshire-terrier-266307.jpg', description: 'Dog 11' },
	{ src: 'http://dogbreedersguide.com/wp-content/uploads/2015/02/Adorable-blue-heeler-puppies-dog-breed-wallpaper-200x200.jpg', description: 'Dog 12' },
	]
}]);