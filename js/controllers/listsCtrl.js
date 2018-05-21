angular.module('app').controller('listsCtrl', function (listFactory, cardFactory) {
    this.lists = listFactory.getLists()

    this.addList = function(){
        listFactory.addList(this.listName)
        this.listName = ''
    }

    this.getCards = function(list){
        return cardFactory.getCards(list)
    }
});