function Tile(position, value,rank) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.rank				= rank;
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
