app.controller('myController', function($scope) {
    $scope.name = 'Serafim';
    $scope.startingVar = 'First var name';
    $scope.quantity = 0;
    $scope.cost = 0;
    // Object
    $scope.person = {firstName:'Serafim', lastName:'Ntavranis'};
    // Arrays
    $scope.myArray = [1, 3, 4, 6, 7, 24, 8, 46]; 
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
    // Function
    $scope.changeName = function(e){
        if( $scope.startingVar != 'Second var name' ){
            $scope.startingVar = 'Second var name';
        }else{
            $scope.startingVar = 'First var name';
        }
    }
});
