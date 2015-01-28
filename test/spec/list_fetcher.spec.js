'use strict';

describe('ListFetcher', function() {

  var listFetcher;

  beforeEach(function() {
    listFetcher = new ListFetcher();
  });

  it('can instanciate', function() {
    expect(listFetcher).not.toEqual(undefined);
  });

  it('can instanciate with default options', function() {
    expect(listFetcher.pageIndex).toEqual(1);
    expect(listFetcher.perPage).toEqual(10);
  });

  it('can instanciate with options', function() {
    var listFetcherWithOption = new ListFetcher(
      {
        pageIndex: 5,
        perPage: 10
      }
    );

    expect(listFetcherWithOption.pageIndex).toEqual(5);
    expect(listFetcherWithOption.perPage).toEqual(10);
  });

  it('can fetch a list', function() {
    var list = listFetcher.addMore();
    expect(list.length).toEqual(0);
  });

  it('can customize fetcher', function() {
    listFetcher.fetcher = function(pageIndex) {
      switch(pageIndex) {
      case 1:
        return [1,2,3,4,5];

      case 2:
        return [6,7,8,9,10];
      }

      return [];
    };

    listFetcher.addMore();
    expect(listFetcher.data).toEqual([1,2,3,4,5]);
    
    listFetcher.addMore();
    expect(listFetcher.data).toEqual([1,2,3,4,5,6,7,8,9,10]);

    listFetcher.addMore();
    expect(listFetcher.data).toEqual([1,2,3,4,5,6,7,8,9,10]);

    expect(listFetcher.pageIndex).toEqual(3);
  });

  it('can rewind', function() {
    listFetcher.rewind();

    expect(listFetcher.pageIndex).toEqual(1);
    expect(listFetcher.data).toEqual([]);
    expect(listFetcher.endOfPage).toEqual(false);
    
  });
  
});
