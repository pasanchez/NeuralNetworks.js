// NN fullyConnected 3 layers.

function NeuralNetwork(inputs, hidden, outputs) {
   this.input_nodes = inputs;
   this.output_nodes = outputs;
   this.hidden_nodes = hidden;
    
   this.w1 = [];
   this.w2 = [];

   for (var i=0 ; i < this.hidden_nodes; i++) { //row
    this.w1[i] = [];
    for (var j=0; j < this.input_nodes; j++) {
        this.w1[i][j] = 1;
    }
   }

   for (var i=0 ; i < this.output_nodes; i++) { //row
    this.w2[i] = [];
    for (var j=0; j < this.hidden_nodes; j++) {
        this.w2[i][j] = 1;
    }
   }
}


NeuralNetwork.prototype.feedForward = function(inputs) {

    if (inputs.length != this.w1[0].length) {
        console.log("Wrong input size");
        return;
    }
    //first layer: w1*X = hidden
    var hidden = vmMult(this.w1, inputs);
    //second layer: w2*hidden = output
    var outputs = vmMult(this.w2, hidden)
    return outputs;
}


function vmMult(m, vector) {
    // m indexed by rows
    // v represents a column vector
    var outputs = []
    for (var i=0;i<m.length;i++){
        var sum = 0;
        for (var j=0; j < vector.length; j++) {
            sum += vector[j] * m[i][j];
        }
        outputs.push(sum);
    }
    return outputs;
}
