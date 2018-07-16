class Playground {
  constructor(width, targetDiv) {
    this.width = width;
    this.targetDiv = targetDiv;
    this.tiles = [];

    var self = this;
    window.onresize = function () {
      self.setSize();
    };

    this.generate();
  }
  generate() {
    var tileWidth = 100 / this.width;
    for (var i = 0; i < (this.width * this.width); i++) {
      var tile = new Tile(tileWidth);
      this.tiles.push(tile);
      this.targetDiv.appendChild(tile.div);
    }
    this.setSize();
  }
  setSize() {
    var style = window.getComputedStyle(this.targetDiv);
    this.targetDiv.style.height = style.width;
  }
}
