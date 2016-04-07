angular.module('app').factory("ncAboutContent", function($http, $resource){
    
    return {
        getContent: function(successcb) {
            
            $http({method: 'GET', url:'http://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text'}).
            success(function(data,status,headers,config) {
               successcb(data); 
            }).error(function(data,status,headers,config){
                console.log(data);
            });
            
            //return $resource('http://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text').get({});
            
            //console.log(contentVal);
            //var content = {
            //    contentVal: contentVal
            //};
            
            //console.log(content);
            //return content;
        }
    }
    
});