(function() {

    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
    
        var toBuy = this;

        toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function(index){
            ShoppingListCheckOffService.buyItem(index);
        };

        toBuy.hasItem = function () {
            return !ShoppingListCheckOffService.getToBuyItems().length;
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    
        var alreadyBought = this;
        
        alreadyBought.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBoughtItems();

        alreadyBought.hasItem = function () {
            return !ShoppingListCheckOffService.getAlreadyBoughtItems().length;
        }
    }

    function ShoppingListCheckOffService() {
    
        var service = this;

        var itemsToBuy = [
            { name: 'water', quantity: 10 },
            { name: 'honey', quantity: 3 },
            { name: 'vodka :)', quantity: 4 },
            { name: 'chocolate', quantity: 7 },
            { name: 'gum', quantity: 5 }
        ];

        var itemsAlreadyBought = [];

        service.buyItem = function(itemIndex) {
            angular.forEach(itemsToBuy, function(value, key) {
                if(key === itemIndex){
                    this.push(value);
                }
            }, itemsAlreadyBought);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return itemsToBuy;
        };

        service.getAlreadyBoughtItems = function() {
            return itemsAlreadyBought;
        };
    }
})();
