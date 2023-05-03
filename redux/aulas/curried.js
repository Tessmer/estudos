const li = Array.from(document.querySelectorAll("li"));

/* função curried: permite passarmos um argumento por vez */
const getElementAttr = (key) => (el) => el.getAttribute(key);

const getAttrDataSlide = getElementAttr("data-slide");
const getAttrId = getElementAttr("id");

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log("dataSlideList", dataSlideList);
console.log("idList", idList);
