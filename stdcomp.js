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

export const createButton = (s, parent, className) => {
  const c = create("button", parent, className);
  c.textContent = s;
  return c;
};

export const createInput = (s, parent, className) => {
  const c = create("input", parent, className);
  c.type = "text";
  c.value = s;
  return c;
};

export const createSelect = (ar, parent, className) => {
  const c = create("select", parent, className);
  for (const a of ar) {
    const op = create("option", c);
    op.textContent = a;
  }
  return c;
};

export const createTable = (ar, parent, className) => {
  const tbl = create("table", parent, className);
  const tr = create("tr", tbl);
  for (const a of ar[0]) {
    create("th", tr).innerHTML = a;
  }
  for (let i = 1; i < ar.length; i++) {
    const as = ar[i];
    const tr = create("tr", tbl);
    for (const a of as) {
      if (typeof a == "string") {
        create("td", tr).innerHTML = a;
      } else {
        const c = create("td", tr);
        c.appendChild(a);
      }
    }
  }
  return tbl;
};
