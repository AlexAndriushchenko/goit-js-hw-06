const navItemsEl = document.querySelectorAll("#categories .item");
console.log("Number of categories:", navItemsEl.length);

navItemsEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
