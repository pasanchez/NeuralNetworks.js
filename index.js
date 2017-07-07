window.onload =  function(){
    var nn = new NeuralNetwork(2,3,1,1);
    var out = nn.feedForward([2, 3]);
    console.log(out);
};
