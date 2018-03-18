function PascalsTriangle() {
    var size;
    var mod;

    this.generate = function() {
        var data = createArray(size, 1);
        for(var i = 1; i < size - 1; i++) {
            for(var j = i; j < size - i; j++) {
                data[i][j] = data[j][i] = (data[i - 1][j] + data[i][j - 1]) % mod;
            }
        }
        return data;
    };

    this.size = function (s) {
        size = s;
        return this;
    };

    this.mod = function (m) {
        mod = m;
        return this;
    };

    var createArray = function(size, value) {
        var data = [];
        for(var i = 0; i < size; i++) {
            data[i] = [];
            for(var j = 0; j < size - i; j++) {
                data[i][j] = value;
            }
        }
        return data;
    };
}