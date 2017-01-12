var VM = function(defaultItems) {
    var self = this;

    this.addItem = function() {

        this.items.push(this.itemToAdd());
        this.itemToAdd("");
    };

    this.itemToAdd = ko.observable("");

    this.items = ko.observableArray(defaultItems);



    this.hasEntered = ko.pureComputed(function() {
        return self.itemToAdd().length > 0;
    });



};


var defaultItems = [
    "Alan",
    "Parker"
];

ko.applyBindings(new VM(defaultItems));
