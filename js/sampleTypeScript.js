/**
* Created by Erich on 10/4/2014.
*/
var FooBar = (function () {
    function FooBar() {
        this.fullName = "Erich Meissner";
    }
    FooBar.prototype.showMe = function () {
        console.log(this.fullName);
    };
    return FooBar;
})();

var foo = new FooBar();
foo.showMe();
//# sourceMappingURL=sampleTypeScript.js.map
