angular.module("app").factory("ncEvents", function ($resource) {
   
    return {
        getEvents: function() {
            return $resource('/api/events/:id', {_id: "@id"}).get({});
        }
    }
});