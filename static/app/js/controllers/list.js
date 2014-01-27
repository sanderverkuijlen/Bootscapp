app.controller('ListController', ['$scope', function($scope) {

    $scope.lists = [
        {
            id:     1,
            name:   'Boodschappen'
        },
        {
            id:     2,
            name:   'Snackbar'
        },
        {
            id:     3,
            name:   'Likkepot'
        }
    ];
}]);