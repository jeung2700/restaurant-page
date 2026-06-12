const MENU_ITEMS = [
  {
    name: "Ribeye steak",
    desc: "Wood-fired, garlic butter, fries or salad",
    price: "$28",
  },
  {
    name: "Smash burger",
    desc: "Double patty, cheddar, pickles, house sauce",
    price: "$15",
  },
  {
    name: "Mushroom tagliatelle",
    desc: "Handmade pasta, cream, parmesan, thyme",
    price: "$17",
  },
  {
    name: "Caesar salad",
    desc: "Romaine, anchovy dressing, sourdough croutons",
    price: "$11",
  },
  {
    name: "Fish and chips",
    desc: "Beer-battered cod, tartare, mushy peas",
    price: "$16",
  },
  {
    name: "Sticky toffee pudding",
    desc: "Warm date sponge, butterscotch, vanilla ice cream",
    price: "$8",
  },
];

const menu = () => {
  const container = document.createElement("div");
  container.classList.add("menu-container");
  const header = document.createElement("p");
  header.classList.add("menu-header");
  header.textContent = "Our menu";
  container.appendChild(header);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  container.appendChild(cardContainer);

  MENU_ITEMS.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    const itemTextContainer = document.createElement("div");
    itemTextContainer.classList.add("cardTextContainer");
    const itemTitle = document.createElement("p");
    itemTitle.classList.add("dish-title");
    itemTitle.textContent = item.name;
    itemTextContainer.appendChild(itemTitle);
    const itemDescription = document.createElement("p");
    itemDescription.classList.add("dish-description");
    itemDescription.textContent = item.desc;
    itemTextContainer.appendChild(itemDescription);
    card.appendChild(itemTextContainer);
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("dish-price");
    itemPrice.textContent = item.price;
    card.appendChild(itemPrice);
    cardContainer.appendChild(card);
  });

  return container;
};

export default menu;
