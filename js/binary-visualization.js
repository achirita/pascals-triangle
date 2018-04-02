function BinaryVisualization(canvasId) {
    var mod;
    var size;
    var data;
    var backgroundColor;
    var foregroundColor;

    var tinCan = new TinCan(canvasId);
    var pascal = new PascalsTriangle();

    this.generate = function () {
        data = pascal.generate();
        return this;
    };

    this.colorize = function() {
        tinCan.clear(backgroundColor);
        for(x = 0; x < size; x++) {
            for(y = 0; y < size - x; y++) {
                if(data[x][y] === 0) {
                    tinCan.setPixel(x, y, foregroundColor);
                    tinCan.setPixel(size - x, size - y, foregroundColor);
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
        tinCan.width(size).height(size);
        pascal.size(size);
        return this;
    };

    this.mod = function(m) {
        mod = m;
        pascal.mod(mod);
        return this;
    };
}