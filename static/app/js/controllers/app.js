app.controller('AppController', ['$scope', function($scope) {

    $scope.user = null;
    $scope.menu = false;

    $scope.login = function(){
        $scope.user = {
            id:     1,
            token:  '1234abcd',
            name:   'Sander Verkuijlen',
            email:  'sander@interactivestudios.nl'
        };
        //TODO: redirect
    };
    $scope.logout = function(){
        $scope.user = null;
        //TODO: redirect
    };

    $scope.showMenu = function(){
        $scope.menu = true;
    };

    $scope.hideMenu = function(){
        $scope.menu = false;
    };
}]);