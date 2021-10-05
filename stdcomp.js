export const cr = (tag, parent) => {
  const c = document.createElement(tag);
  if (parent) {
    parent.appendChild(c);
  }
  return c;
};

export const createButton = (s) => {
  const c = cr("button");
  c.textContent = s;
  return c;
};

export const createInput = (s) => {
  const c = cr("input");
  c.type = "text";
  c.value = s;
  return c;
};

export const createSelect = (ar) => {
  const c = cr("select");
  for (const a of ar) {
    const op = cr("option", c);
    op.textContent = a;
  }
  return c;
};

export const createTable = (ar) => {
  const tbl = cr("table");
  const tr = cr("tr", tbl);
  for (const a of ar[0]) {
    cr("th", tr).textContent = a;
  }
  for (let i = 1; i < ar.length; i++) {
    const as = ar[i];
    const tr = cr("tr", tbl);
    for (const a of as) {
      if (typeof a == "string") {
        cr("td", tr).textContent = a;
      } else {
        const c = cr("td", tr);
        c.appendChild(a);
      }
    }
  }
  return tbl;
};
