# Meteor Array Reactive Paginator
This package is heavily based on [skaleb-simple-paginator](https://www.npmjs.com/package/skaleb-simple-paginator) by @ToeFungi.
I made some modifications to make it an atmosphere package.

## Installation

```
$ meteor add nasuke:simple-paginator
```

## Usage

In some client code:
```
import { paginator } from 'meteor/nasuke:simple-paginator'

const array = [{ a: 1 }, { a: 2 }, { a: 3 }];

Template.MyTemplate.onCreated(function () {
    this.paginator = paginator.setArray(array);
});
```

The ```paginator``` object exported by this package has some methods:

## paginator.setArray
Sets the array to paginate. Must be the first method you call, probably inside your template's ```onCreated``` hook. Returns ```paginator```.
  
## paginator.getPage
Returns an ```array``` with the elements for the current page.

In ```myTemplate.js```
```javascript
Template.myTemplate.helpers({
    items() {
        return paginator.getPage();
    }
});
```

In ```myTemplate.hmtl```
```html
<template name='MyTemplate'>
  <div class='items-list'>
    {{#each item in items}}
      <div class='item'>{{ item.a }}</div>
    {{/each}}
  </div>
<template>
```

## paginator.getTotalPages
Returns an ```array``` of numbers with the proper number of pages for your array (e.g. ```[1, 2, 3]```) suitable for use with an ```each``` in your html:

In ```myTemplate.js```
```javascript
Template.MyTemplate.helpers({
  totalPages() {
    return paginator.getTotalPages();
  }
});
```

Then in ```myTemplate.html```
```html
<template name='MyTemplate'>
  <ul class='pages-wrapper'>
    {{#each item in totalPages}}
      <li class='page'>{{ item }}</li>
    {{/each}}
  </ul>
<template>
```

## paginator.currPageNumber
Returns the current page you're in. Useful for adding an ```active``` class to the current page in the html.

In ```myTemplate.js```
```javascript
Template.myTemplate.helpers({
  active(currPage) {
    return paginator.currPageNumber() === currPage ? 'active' : '';
  }
});
```

In ```myTemplate.html```
```html
<template name='MyTemplate'>
  <ul class='pages-wrapper'>
    {{#each item in totalPages}}
      <li class='page {{ active item }}'>{{ item }}</li>
    {{/each}}
  </ul>
<template>
```

## paginator.incrementPage
Adds ```1``` to the current page, if the current page is the last, does nothing. Meant to be used inside an ```event``` to navigate to the next page. Returns ```paginator```.

## paginator.decrementPage
Subtracts ```1``` to the current page, if the current page is the first, does nothing. Meant to be used inside an ```event``` to navigate to the previous page. Returns ```paginator```.

## paginator.setPageNumber(pageNumber)
Sets the current page to the ```pageNumber``` arg passed. Default is ```1```. Returns ```paginator```

## paginator.setPageSize(pageSize)
Sets the number of elements to return for each page to ```pageSize``` arg passed. Default is ```3```. Returns ```paginator```
