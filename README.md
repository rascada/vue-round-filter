# vue-round-filter
#### round number with whichever decimal accuracy

## installation

```javascript
const round = require('vue-round-filter');
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
<span> {{ int | round 3 }} </span>
<span> 3 </span>

<span> {{ int | round 3 true }} </span>
<span> 3.000 </span>
```
