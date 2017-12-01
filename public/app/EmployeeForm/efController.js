angularFormsApp.controller('efController', function efController($scope, $window, $routeParams, $uibModalStack, DataService) {

    if ($routeParams.id)
        $scope.employee = DataService.getEmployee($routeParams.id);
    else
        $scope.employee = { id: 0 }

    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.departments = [
        "Engineering",
        "Marketing",
        "Finance",
        "Administration"
    ];

    $scope.submitForm = function () {
        if ($scope.editableEmployee.id = 0) {
            // insert new employee
            DataService.insertEmployee($scope.editableEmployee);
        } else {
            // update employee
            DataService.updateEmployee($scope.editableEmployee);
        }

        $scope.employee = angular.copy($scope.editableEmployee);
        //$window.history.back();
        $uibModalStack.dismissAll();
    };

    $scope.cancelForm = function () {
        //$window.history.back();
        $uibModalStack.dismissAll();
    };
});