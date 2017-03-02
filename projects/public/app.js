'use strict';
var learnjs = {};

learnjs.problemView = function(id){
    return $('<div class="problem-view">').text('Problem #'+id+' Coming soon!');
}
learnjs.showView = function(hash){
console.log(hash)
    var route =     {
        '#problem' : learnjs.problemView
    }

    var hashParts = hash.split('-');

    var viewFn = route[hashParts[0]]
    if(viewFn){
    $('.view-container').empty().append(viewFn(hashParts[1]))
    }

}

learnjs.appOnReady = function(){
    window.onhashchange = function(){
        learnjs.showView(window.location.hash);
    }
    learnjs.showView(window.location.hash);
}