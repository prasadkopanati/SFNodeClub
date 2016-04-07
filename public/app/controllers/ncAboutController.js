angular.module("app").controller("ncAboutController", function ($scope, ncAboutContent) {


    ncAboutContent.getContent(function (contentVal) {
        $scope.content = {
            contentVal: contentVal
        };
        $scope.contentVal = contentVal;
    });


    //ncAboutContent.getContent()
    //    .$promise.then(
    //        function (contentVal) {
    //            $scope.content = {
    //                contentVal: contentVal
    //            };
    //        },
    //        function (response) {
    //            $scope.content = {
    //                contentVal: ''
    //            };
    //        }
    //    );
});