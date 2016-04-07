angular.module("app").controller("ncMainController", function($scope){
    var todayDate = new Date();
    var nextMonth = new Date(todayDate);
    var twoMonths = new Date(todayDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    twoMonths.setMonth(twoMonths.getMonth() + 2);
    
    $scope.ncEvents = [
        {name: 'SFNode Club Meetup', todaysEvent: true, eventDate: new Date(), eventDesc: 'Meet and greet fellow node developers and learn about security in node.', AttendeeCount: 60 },
        {name: 'Next Month SFNode Club Meetup', todaysEvent: false, eventDate: nextMonth, eventDesc: 'Learn about new features of node.js and how to use Karma as a testing too.', AttendeeCount: 120 },
        {name: 'New SFNode Club Meetup', todaysEvent: false, eventDate: twoMonths, eventDesc: 'node.js has new task manager tools. Come learn about them and meet and greet Paul Irish.', AttendeeCount: 40 }
    ];

});

