angularFormsApp.controller('efController', function efController($scope, efService) {
    $scope.employee = efService.employee;

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];

    $scope.submitForm = function () {
        console.log(JSON.stringify($scope.employee, null, 2));
    }
});