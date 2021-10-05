# stdcomp
 
https://code4fukui.github.io/stdcomp/

```js
import { createButton, createTable, createSelect, createInput } from "https://js.sabae.cc/stdcomp.js";

document.body.appendChild(createTable([
  ["項目", "入力", "アクション"],
  ["あいう", createInput("テスト"), createButton("やほ")],
  ["かきく", createSelect([1,2,3,4]), createButton("はろ")],
]));
```
