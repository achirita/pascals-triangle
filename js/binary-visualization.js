function BinaryVisualization(canvasId) {
    var width;
    var height;
    var backgroundColor;
    var foregroundColor;
    var mod;

    this.show = function() {
        var tinCan = new TinCan(canvasId).width(width).height(height).disableImageSmoothing();
        var size = Math.min(width, height);
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
    }

    this.width = function(w) {
        width = w;
        return this;
    };

    this.height = function(h) {
        height = h;
        return this;
    };

    this.backgroundColor = function(bg) {
        backgroundColor = bg;
        return this;
    };

    this.foregroundColor = function(fg) {
        foregroundColor = fg;
        return this;
    };

    this.mod = function(m) {
        mod = m;
        return this;
    };
}