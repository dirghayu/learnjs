/***
* From book 'Serverless Single Page App'
*
***/
describe('LearnJS', function(){

    it('can show a problem view',function(){
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1)
    });


        it('can show the landing page view where there is no hash',function(){
                learnjs.showView('')
                expect($('.view-container .landing-view').length).toEqual(1)
        });

        it('passses the hash view parameter to the view function', function(){
                spyOn(learnjs,'problemView');
                learnjs.showView('#problem-42');
                expect(learnjs.problemView).toHaveBeenCalledWith('42');
        });

   it('invokes the router when loaded', function(){
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();

    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });
    });


   it('subscribe to hash change event', function(){
    learnjs.appOnReady();
    spyOn(learnjs, 'showView');
    $(window).trigger('hashchange')

    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });


  describe('problem view', function() {
    var view
    beforeEach(function(){
    view = learnjs.problemView('1');
    })
    it('has a title that includes the problem number', function() {
      expect(view.find('.title').text()).toEqual('Problem #1');
    });

    describe('Answer Section', function() {
        it('can check correct answer by hitting a button', function() {
          var view = learnjs.problemView('1');
          view.find('.answer').val('true');
          view.find('.check-btn').click();
          expect(view.find('.result').text()).toEqual('Correct!');

        });

        it('can check correct answer by hitting a button', function() {
          var view = learnjs.problemView('1');
          view.find('.answer').val('true');
          view.find('.check-btn').click();
          expect(view.find('.result').text()).toEqual('Correct!');

        });
     });
 });