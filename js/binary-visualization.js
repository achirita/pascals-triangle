function BinaryVisualization(canvasId) {
    var backgroundColor;
    var foregroundColor;
    var size;
    var mod;

    this.show = function() {
        var tinCan = new TinCan(canvasId).width(size).height(size).disableImageSmoothing();
        var pascal = new PascalsTriangle().size(size).mod(mod).generate();
        for(x = 0; x < size; x++) {
            for(y = 0; y < size; y++) {
                if(pascal[x][y] !== 0) {
                    tinCan.setPixel(x, y, foregroundColor);
                } else {
                    tinCan.setPixel(x, y, backgroundColor);
                }
            }
        }
        tinCan.draw();
    };

    this.backgroundColor = function(bg) {
        backgroundColor = bg;
        return this;
    };

    this.foregroundColor = function(fg) {
        foregroundColor = fg;
        return this;
    };

    this.size = function (s) {
      size = s;
      return this;
    };

    this.mod = function(m) {
        mod = m;
        return this;
    };
}