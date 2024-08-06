// Adding multiple Attributes to an element, in a single line
export function setMultipleAttributes(el, attrs) {
  for(let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}