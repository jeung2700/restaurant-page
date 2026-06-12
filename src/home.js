import logoSrc from "./assets/logo.svg";

const home = () => {
  const container = document.createElement("div");
  container.classList.add("home-container");

  const img = document.createElement("img");
  img.classList.add("logo");
  img.src = logoSrc;
  img.alt = "Description";
  container.appendChild(img);

  const header = document.createElement("p");
  header.classList.add("header");
  header.textContent = "Honest food, cooked over fire";
  container.appendChild(header);

  const description = document.createElement("p");
  description.classList.add("description");
  description.innerHTML =
    "A neighborhood bistro serving wood-fired steaks, <br> handmade pasta, and slow Sunday roasts since 2012.";
  container.appendChild(description);

  const card = document.createElement("div");
  card.classList.add("card");
  const cardDay = document.createElement("p");
  cardDay.classList.add("card-day");
  cardDay.textContent = "Open Tue - Sun";
  const cardTime = document.createElement("p");
  cardTime.classList.add("card-time");
  cardTime.textContent = "12:00PM - 10:00PM";
  card.appendChild(cardDay);
  card.appendChild(cardTime);
  container.appendChild(card);

  return container;
};

export default home;
