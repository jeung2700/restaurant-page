import phoneLogo from "./assets/phone-outline.svg";
import mapMarker from "./assets/map-marker-outline.svg";
import clock from "./assets/clock-outline.svg";
import map from "./assets/map-search-outline.svg";

const INFO = [
  {
    logo: phoneLogo,
    title: "Reservations",
    value: "(123) 456-7890",
  },
  {
    logo: mapMarker,
    title: "Address",
    value: "48 Maple Street, Old Town",
  },
  {
    logo: clock,
    title: "Hours",
    value: "Tue – Sun, 12:00 PM – 10:00 PM",
  },
];

const about = () => {
  const container = document.createElement("div");
  container.classList.add("about-container");
  const header = document.createElement("p");
  header.classList.add("about-header");
  header.textContent = "Find Us";
  container.appendChild(header);
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("about-content");
  container.appendChild(contentContainer);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");

  INFO.forEach((i) => {
    const infoCard = document.createElement("div");
    infoCard.classList.add("info-card");
    const img = document.createElement("img");
    img.classList.add("info-logo");
    img.src = i.logo;
    img.alt = "logo";
    infoCard.appendChild(img);
    const infoTextContainer = document.createElement("div");
    infoTextContainer.classList.add("info-text-container");
    const infoTitle = document.createElement("p");
    infoTitle.classList.add("info-title");
    infoTitle.textContent = i.title;
    infoTextContainer.appendChild(infoTitle);
    const infoValue = document.createElement("p");
    infoValue.classList.add("info-value");
    infoValue.textContent = i.value;
    infoTextContainer.appendChild(infoValue);
    infoCard.appendChild(infoTextContainer);
    infoContainer.appendChild(infoCard);
  });
  contentContainer.appendChild(infoContainer);

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-container");
  const mapPlaceholder = document.createElement("div");
  mapPlaceholder.classList.add("map-placeholder");
  mapContainer.appendChild(mapPlaceholder);
  const mapLogo = document.createElement("img");
  mapLogo.src = map;
  mapLogo.alt = "map-logo";
  mapLogo.classList.add("map-logo");
  mapPlaceholder.appendChild(mapLogo);
  const mapText = document.createElement("p");
  mapText.classList.add("map-text");
  mapText.textContent = "Map Placeholder";
  mapPlaceholder.appendChild(mapText);
  contentContainer.appendChild(mapContainer);

  return container;
};
export default about;
