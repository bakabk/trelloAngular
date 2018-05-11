angular.module('app').factory('listFactory', function(){
    var service = {}

    var lists = [
        {
            id: 1,
            listName: 'TODO'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Compleat'
        }
    ];

    service.getLists = function(){
        return lists
    }

    return service
})