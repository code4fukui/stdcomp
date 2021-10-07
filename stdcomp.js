export const create = (tag, parent, className) => {
  const c = document.createElement(tag);
  if (parent) {
    parent.appendChild(c);
  }
  if (className) {
    c.className = className;
  }
  return c;
};

export const createButton = (s) => {
  const c = create("button");
  c.textContent = s;
  return c;
};

export const createInput = (s) => {
  const c = create("input");
  c.type = "text";
  c.value = s;
  return c;
};

export const createSelect = (ar) => {
  const c = create("select");
  for (const a of ar) {
    const op = create("option", c);
    op.textContent = a;
  }
  return c;
};

export const createTable = (ar) => {
  const tbl = create("table");
  const tr = create("tr", tbl);
  for (const a of ar[0]) {
    create("th", tr).textContent = a;
  }
  for (let i = 1; i < ar.length; i++) {
    const as = ar[i];
    const tr = create("tr", tbl);
    for (const a of as) {
      if (typeof a == "string") {
        create("td", tr).textContent = a;
      } else {
        const c = create("td", tr);
        c.appendChild(a);
      }
    }
  }
  return tbl;
};
