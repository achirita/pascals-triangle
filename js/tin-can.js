function TinCan(canvasId) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var imageData = context.createImageData(width, height);

    this.setPixel = function(x, y, color) {
        var index = (x + y * width) * 4;
        imageData.data[index++] = color.red;
        imageData.data[index++] = color.green;
        imageData.data[index++] = color.blue;
        imageData.data[index] = color.alpha;
    };

    this.getPixel = function(x, y) {
        var index = (x + y * width) * 4;
        return {
            red: imageData.data[index++],
            green: imageData.data[index++],
            blue: imageData.data[index++],
            alpha: imageData.data[index]
        };
    };

    this.draw = function() {
        context.putImageData(imageData, 0, 0);
    };

    this.clear = function() {
        imageData = context.createImageData(width, height);
    };

    this.width = function(w) {
        canvas.width = width = w;
        imageData = context.createImageData(width, height);
        return this;
    };

    this.height = function(h) {
        canvas.height = height = h;
        imageData = context.createImageData(width, height);
        return this;
    };

    this.disableImageSmoothing = function() {
        context.imageSmoothingEnabled = false;
        return this;
    };

    this.saveAs = function(fileName) {
        var anchor = document.createElement("a");
        anchor.href = canvas.toDataURL();
        anchor.download = fileName + ".png";
        anchor.click();
    }
}