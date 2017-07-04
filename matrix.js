function Matrix(rows, cols, values) {
    this.rows = rows;
    this.cols = cols;

    if (values) {
        this.values = values;
    } else {
        this.values = [];
        for (var j=0; j< this.cols; j++) {
            for (var i=0; i< this.rows; i++) {
                this.values.push(Math.floor(Math.random() * 10));
            } 
        }
    }
}

Matrix.prototype.add = function(val) {
    if (val instanceof Matrix) {
        return this.addMatrix(val);
    } else {
        return this.addScalar(val);
    }
}

Matrix.prototype.mult = function(val) {
    if (val instanceof Matrix) {
        return this.multMatrix(val);
    }else {
        return this.multScalar(val);
    }
}



Matrix.prototype.addScalar = function(scalar) {
    var output = new Matrix(this.rows,this.cols)
    for (var i=0; i < this.values.length; i++) {
        output.values[i] = this.values[i] + scalar;
    }
    return output;
}

Matrix.prototype.multScalar = function(scalar) {
    var output = new Matrix(this.rows,this.cols)
    for (var i=0; i < this.values.length; i++) {
        output.values[i] = this.values[i] * scalar;
    }
    return output;
}

Matrix.prototype.addMatrix = function(matrix) {
    var output = new Matrix(this.rows,this.cols)
    if (this.rows == matrix.rows && this.cols == matrix.cols) {
        for (var i=0; i < this.values.length; i++) {
            output.values[i] =  this.values[i] + matrix.values[i];
        }
    return output;
    }
    return null;
}

//this * matrix
Matrix.prototype.multMatrix = function(matrix){
    if (this.cols == matrix.rows) {
        var output = new Matrix(this.rows, matrix.cols);
        output.values = [];
        for (var thisrows = 0; thisrows < this.rows; thisrows++){
            for (var matcols = 0 ; matcols < matrix.cols ; matcols++) {
                var sum = 0;
                for (var elem = 0; elem < this.cols; elem++) {
                    sum += this.values[thisrows*this.cols+elem] * matrix.values[matrix.cols*elem+matcols];
                }
                output.values.push(sum);
            }
        }
        return output;
    }
    return null;
}
