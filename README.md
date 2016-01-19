# vue-round-filter
#### round number with whichever decimal accuracy

## installation

```javascript
let round = require('vue-round-filter');
// or es6
import round from 'vue-round-filter';
```
```javascript
new Vue({
  filters: {
    round,
  },
});
```
## usage
```javascript
let pi = 3.14159265359;
```
```html
<span> {{ pi | round }} </span>
<span> 3 </span>

<span> {{ pi | round 2 }} </span>
<span> 3.14 </span>
```
If you're need to keep decimal accuracy, pass `true` as second argument

```javascript
let int = 3;
```
```html
<span> {{ pi | round 2 }} </span>
<span> 3 </span>

<span> {{ pi | round 2 true }} </span>
<span> 3.00 </span>
```
