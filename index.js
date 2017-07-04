window.onload =  function(){
    var nn = new NeuralNetwork(2,300,1);
    var out = nn.feedForward([1, 2]);
    console.log(out);
};
