angular.module('app').controller('listCtrl', function(listFactory, cardFactory){
    this.removeList = function(list){
        listFactory.removeList(list)
    }

    this.createCard = function(list){
        cardFactory.createCard(list, this.cardDescriptiongit )
        this.cardDescription = ''
    }
})