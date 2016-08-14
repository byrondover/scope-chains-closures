(function foo () {
  var bar;
  quux = 'a';

  function zip() {
    bar = true;
    var quux = 'b';
  }

  return zip;
}());
