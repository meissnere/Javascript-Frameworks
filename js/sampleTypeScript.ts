/**
 * Created by Erich on 10/4/2014.
 */
class FooBar {
  private fullName = "Erich Meissner";
  showMe() {
    console.log(this.fullName);
  }
}

var foo = new FooBar();
foo.showMe();
