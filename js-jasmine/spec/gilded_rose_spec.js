// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe("Items class", function() {
    var item1

    beforeEach(function() {
      item1 = new Item("Dork", 10, 20)
      item2 = new Item("Dork", 10, 11)
    });

    it("should have a title", function() {
      expect(item1.name).toEqual("Dork")
    });

    it("should have a sellIn date", function() {
      expect(item1.sellIn).toEqual(10)
    });

    it("should have a quality number", function() {
      expect(item1.quality).toEqual(20)
    });

    it("quality should be above sellIn date", function() {
      expect(item2.sellIn <= item2.quality).toEqual(true)
    });
  });

  describe("Shop class", function() {

    describe("Normal Items", function() {
      var item1
      var item2
      var shop
      var items

      beforeEach(function() {
        item1 = new Item("Item 1", 10, 15);
        item2 = new Item("Item 2", 1, 10);
        shop = new Shop([item1, item2]);
      });

      it("should reduce sellIn days by 1 every update", function() {
        var items = shop.updateQuality();
        expect(items[0].sellIn).toEqual(9)
      });

      it("should reduce quality by 1 every update", function() {
        var items = shop.updateQuality();
        expect(items[0].quality).toEqual(14)
      });

      it("once sellIn date is passed, item degrades twice as fast", function() {
        items = shop.updateQuality();
        items = shop.updateQuality();
        expect(items[1].quality).toEqual(7)
      });

      it("quality can never be negative", function() {
        for (var i = 0; i < 7; i++) items = shop.updateQuality();
        expect(items[1].quality).toEqual(0)
      });





    });
  });
});
