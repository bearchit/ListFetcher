/* ListFetcher main */

'use strict';

function ListFetcher() {
  this.pageIndex = 0;
  this.perPage = 0;
}

ListFetcher.prototype.fetchMore = function() {
  return [];
};

// Version.
ListFetcher.VERSION = '0.1.0';
