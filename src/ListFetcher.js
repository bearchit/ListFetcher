/* ListFetcher main */

'use strict';

var ListFetcher = (function(_) {

  function ListFetcher(args) {
    // TODO: args 구현(_.extend 사용해봅시다)
    
    this.pageIndex = 1;
    this.perPage = 5;
    this.data = [];
    this.endOfPage = false;
  };

  var fetcher = function() {
    return this.data;
  };

  var concatenator = function(newData) {
    this.data = this.data.concat(newData);
    return this.data;
  };

  var addMore = function() {
    var data = this.fetcher(this.pageIndex);

    this.endOfPage = data.length === 0;
    if(this.endOfPage === false) {
      this.pageIndex++;
    }

    return this.concatenator(data);
  };

  var rewind = function() {
    this.pageIndex = 1;
    this.data = [];
    this.endOfPage = false;
  };
  

  ListFetcher.prototype = {
    constructor: ListFetcher,
    fetcher: fetcher,
    concatenator: concatenator,
    addMore: addMore,
    rewind: rewind
  };

  ListFetcher.VERSION = '0.1.0';

  return ListFetcher;

})(_ || {});
