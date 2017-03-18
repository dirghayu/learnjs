'use strict';
var learnjs = {};

learnjs.problems = [
{
description: "What is truth>",
code: "function problem(){return __;}"
},
{
description: "simple math>",
code: "function problem(){return 42 == 68 __;}"
},
]

learnjs.template = function(name){
    return $('.template .'+name).clone();
}
learnjs.problemView = function(problemNumber){
    var problemNumber = parseInt(problemNumber,10);
    var view =  $('.templates .problem-view').clone();
    var problemData = learnjs.problems[problemNumber - 1]
    var resultFlash = view.find('.result');

    function checkAnswer(){
        var answer = view.find('.answer').val();
        var test = problemData.code.replace('__',answer)+';problem();'
        console.log('test:'+test);
        return eval(test);
    };

    function checkAnswerClick(){
        if(checkAnswer()){

        var correctFlash = learnjs.template('correct-flash')
            learnjs.flashElement(resultFlash,"Correct!")
        }else{
            learnjs.flashElement(resultFlash,"Incorrect!")
        }
        return false;
    };
1
    view.find('.check-btn').click(checkAnswerClick);
    view.find('.title').text('Problem #' + problemNumber);
    learnjs.applyObject(problemData, view);
    return view;
}

learnjs.showView = function(hash){
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

learnjs.applyObject = function(obj, elem){
    for(var key in obj){
    elem.find('[data-name="'+key+'"]').text(obj[key])
    }
};

learnjs.flashElement = function(elem, content) {
    elem.fadeOut('fast', function(){
    elem.html(content);
    elem.fadeIn();
    });
}