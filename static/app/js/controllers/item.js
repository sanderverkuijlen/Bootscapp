app.controller('ItemController', ['$scope', function($scope) {

    $scope.items = [
        {
            id:         1,
            name:       'Paté',
            amount:     3,
            checked:    true,
            users:      [
                {
                    id:     1,
                    name:   'Sander Verkuijlen'
                },
                {
                    id:     2,
                    name:   'Pieter Willekens'
                },
                {
                    id:     3,
                    name:   'Paul Sprangers'
                }
            ]
        },
        {
            id:         2,
            name:       'Broodje Paulus',
            amount:     10,
            checked:    false,
            users:      [
                {
                    id:     3,
                    name:   'Paul Sprangers'
                },
                {
                    id:     4,
                    name:   'Floris Valenkamp'
                },
                {
                    id:     4,
                    name:   'Thomas Timmers'
                },
                {
                    id:     1,
                    name:   'Sander Verkuijlen'
                },
                {
                    id:     2,
                    name:   'Pieter Willekens'
                }
            ]
        },
        {
            id:         3,
            name:       'Kipfilet',
            amount:     2,
            checked:    false,
            users:      [
                {
                    id:     5,
                    name:   'Erwin van der Meijden'
                }
            ]
        }
    ];
}]);