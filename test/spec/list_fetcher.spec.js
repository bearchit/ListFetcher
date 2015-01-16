'use strict';

describe('ListFetcher', function() {

  var listFetcher;

  beforeEach(function() {
    listFetcher = new ListFetcher();
  });

  it('can instanciate', function() {
    expect(listFetcher).not.toEqual(undefined);
    
  });

  it('can fetch a list', function() {
    var list = listFetcher.fetchMore();
    expect(list.length).toEqual(0);
  });
  
});
