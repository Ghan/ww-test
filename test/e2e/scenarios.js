'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('WunWhere Map Test', function() {
  var ptor;

  beforeEach(function() {
    browser.get('index.html');
    ptor = protractor.getInstance();
  });

  it('should load the map.html partial', function() {
    var mapCanvas = by.id('map-canvas');
    expect(ptor.isElementPresent(mapCanvas)).toBe(true);
  });

  it('should load the google maps element', function(){
    var mapWrap = by.className('gm-style');
    expect(ptor.isElementPresent(mapWrap)).toBe(true);
  });

  it('should fetch marker data from json', function(){
    var mapControls = by.id('id-dropdown');
    ptor.sleep(5000);
    ptor.isElementPresent(mapControls).then(function(isPresent){
      expect(isPresent).toBe(true);
      ptor.findElements(protractor.By.repeater('id in ids')).then(function(arr) {
        expect(arr.length).toBeGreaterThan(1);
      });
    });
  });

  it('should load marker data onto map', function(){

  });

  it('should filter marker data when helper dropdown changes', function(){

  });

});
