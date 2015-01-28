# ListFetcher

## About

ListFetcher는 데이터 원본으로부터 다양한 형태로 제공되는 데이터를 일관적인 방법으로 획득/접근할 수 있도록 하는 인터페이스를 제공하는 라이브러리입니다.

ListFetcher는 다음과 같은 기능을 제공합니다.
* 데이터 원본으로부터 데이터를 가져오는 방법을 정의
* 기본적인 Array 이외의 다양한 데이터 타입을 지원
* 페이징된 데이터 원본으로부터 데이터 획득

## Installation

Using Bower:

    bower install list-fetcher

## Usage

### 인스턴스 생성
```javascript
var listFetcher = new ListFetcher();
```

### 인스턴스 생성시에 페이징 정보 설정
인스턴스 생성시에 페이징과 관련된 정보를 설정할 수 있습니다. 설정하지 않을시에는 기본값 perIndex: 1, perPage: 10으로 설정됩니다.
```javascript
var ListFetcher = new ListFetcher({pageIndex:1, perPage:20});
```

### 인스턴스 생성후에 해야 할 일
#### fetcher 설정
ListFetcher는 fetcher 메서드에서 지정한 방법대로 데이터 원본으로부터 데이터를 취득합니다. 취득한 데이터는 ListFetcher 인스턴스 내부의 data 변수에 추가되게 됩니다.

```javascript
// Remote server로부터 데이터를 획득하는 fetcher 예제
listFetcher.fetcher = function(pageIndex, perPgae) {
  Restangular.all('/api/v1/posts.json').getList().then(function(resp) {
    return resp;
  });
};
```

### Array 이외의 데이터 형식을 사용해야 할 때
ListFetcher는 기본적으로 Array 타입의 데이터를 지원합니다. Array 이외의 Object와 같은 데이터 타입을 지원하려면 concatenator 메서드를 정의하면 됩니다.

```javascript
// Object 데이터 타입을 지원하는 예제
var nonArrayListFetcher = new ListFetcher();

nonArrayListFetcher.concatenator = function(newData) {
  if(!this.data.hasOwnProperty('teams')) {
    this.data.teams = [];
  }

  this.data.teams = this.data.teams.concat(newData.teams);
};

nonArrayListFetcher.addMore();
```

### 데이터 가져오기
addMore() 메서드로 페이징의 다음 데이터를 가져올 수 있습니다.

```javascript
listFetcher.addMore();
console.log(listFetcher.data);
```


## Contributing

We'll check out your contribution if you:

* Provide a comprehensive suite of tests for your fork.
* Have a clear and documented rationale for your changes.
* Package these up in a pull request.

We'll do our best to help you out with any contribution issues you may have.

## License

MIT. See `LICENSE.txt` in this directory.
