// NN fullyConnected 3 layers.

function NeuralNetwork(inputs, hidden, outputs, init) {
   this.input_nodes = inputs;
   this.output_nodes = outputs;
   this.hidden_nodes = hidden;
   this.w1 = new Matrix(hidden, inputs);
   this.w2 = new Matrix(outputs, hidden);
   if (init) {
       this.w1.values = [];
       this.w2.values = [];
       for (var i=0;i<hidden*inputs;i++) {
            this.w1.values.push(init)
        } 
       for (var i=0;i<hidden*outputs;i++) {
            this.w2.values.push(init)
        } 
   }
}


NeuralNetwork.prototype.feedForward = function(inputs) {

    if(!(inputs instanceof Matrix)) {
        inputs = new Matrix(this.input_nodes,1, inputs)
    }
    //first layer: w1*X = hidden
    var hidden = this.w1.mult(inputs);
    //second layer: w2*hidden = output
    var outputs = this.w2.mult(hidden);
return outputs;
}
