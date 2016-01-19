# vue-round-filter
round number with whichever decimal accuracy

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
let int = 3.00;
```
```html
<span> {{ pi | round 2 }} </span>
<span> 3 </span>

<span> {{ pi | round 2 true }} </span>
<span> 3.00 </span>
```
