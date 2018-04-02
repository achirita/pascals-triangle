function TinCan(canvasId) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var imageData = context.getImageData(0, 0, width, height);

    this.setPixel = function(x, y, color) {
        var index = (x + y * width) * 4;
        imageData.data[index++] = color[0] | 0;
        imageData.data[index++] = color[1] | 0;
        imageData.data[index++] = color[2] | 0;
        imageData.data[index] = color[3] | 255;
    };

    this.getPixel = function(x, y) {
        var color = [];
        var index = (x + y * width) * 4;
        color.push(imageData.data[index++]);
        color.push(imageData.data[index++]);
        color.push(imageData.data[index++]);
        color.push(imageData.data[index]);
        return color;
    };

    this.draw = function() {
        context.putImageData(imageData, 0, 0);
    };

    this.clear = function(color) {
        if(color) {
            context.fillStyle = 'rgba(' + (color[0] | 0) + ', ' + (color[1] | 0) + ', ' + (color[2] | 0) + ', ' + (color[3] | 255) + ')';
            context.fillRect(0, 0, width, height);
            imageData = context.getImageData(0, 0, width, height);
        } else {
            imageData = context.createImageData(width, height);
        }
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

    this.saveAs = function(fileName) {
        var anchor = document.createElement("a");
        anchor.href = canvas.toDataURL();
        anchor.download = fileName + ".png";
        anchor.click();
    }
}