angular.module("app").controller("ncEventsController", function ($scope, ncEvents) {
    ncEvents.getEvents()
        .$promise.then(
            function (events) {
                $scope.ncEvents = events.eventCollection;
                //console.log(events)
            },
            function (response) {
                $scope.ncEvents = {
                    eventCollection: []
                };
                //console.log(response)
            }
        );
});