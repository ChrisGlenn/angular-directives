angular.module('angularDir')
.directive('bannerOne', function(){
	return{
		restrict: 'AEC',
		template: '<p>A directive excersize.</p>'
	}
})
.directive('seperatePage', function(){
	return{
		restrict: 'AEC',
		templateUrl: 'pages/directivePage.html'
	}
})