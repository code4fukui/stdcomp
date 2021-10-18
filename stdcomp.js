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
  const append = (tr, tag, a) => {
    if (typeof a == "string" || typeof a == "number") {
      create(tag, tr).innerHTML = a;
    } else {
      const c = create(tag, tr);
      c.appendChild(a);
    }
  };
  for (const a of ar[0]) {
    append(tr, "th", a);
  }
  for (let i = 1; i < ar.length; i++) {
    const as = ar[i];
    const tr = create("tr", tbl);
    for (const a of as) {
      append(tr, "td", a);
    }
  }
  return tbl;
};

export const setAttributes = (comp, opts) => {
  if (!opts) {
    return;
  }
  for (const name in opts) {
    if (opts[name] != null) {
      comp.setAttribute(name, opts[name]);
    }
  }
};
