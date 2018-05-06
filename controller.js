app.controller('myController', function($scope) {
    $scope.name = 'Serafim';
    $scope.startingVar = 'First var name';
    $scope.quantity = 0;
    $scope.cost = 0;
    // Object
    $scope.person = {firstName:'Serafim', lastName:'Ntavranis'};
    // Arrays
    $scope.myArray = [1, 3, 6, 7]; 
    // Function
    $scope.changeName = function(e){
        if( $scope.startingVar != 'Second var name' ){
            $scope.startingVar = 'Second var name';
        }else{
            $scope.startingVar = 'First var name';
        }
    }
});
