let agents = [
  { name: "Carlos Membreno - cmembreno@email.com", id: 1 },
  { name: "Carlos Vega - cvega@email.com", id: 2 },
  { name: "Ana Lopez - alopez@email.com", id: 3 },
  { name: "Daniel Martinez - dmartinez@email.com", id: 4 },
  { name: "Maria Garcia - mgarcia@email.com", id: 5 },
  { name: "Luis Sanchez - lsanchez@email.com", id: 6 },
  { name: "Laura Hernandez - lhernandez@email.com", id: 7 },
  { name: "Javier Ramirez - jramirez@email.com", id: 8 },
  { name: "Sofia Torres - storres@email.com", id: 9 },
  { name: "Ricardo Morales - rmorales@email.com", id: 10 },
  { name: "Gabriela Castro - gcastro@email.com", id: 11 },
  { name: "Juan Gomez - jgomez@email.com", id: 12 },
  { name: "Monica Perez - mperez@email.com", id: 13 },
  { name: "Andres Rivera - arivera@email.com", id: 14 },
  { name: "Carolina Diaz - cdiaz@email.com", id: 15 },
  { name: "Pedro Ortiz - portiz@email.com", id: 16 },
  { name: "Julia Morales - jmorales@email.com", id: 17 },
  { name: "Eduardo Castro - ecastro@email.com", id: 18 },
  { name: "Mariana Romero - mromero@email.com", id: 19 },
  { name: "Diego Fernandez - dfernandez@email.com", id: 20 },
  { name: "Alejandra Silva - asilva@email.com", id: 21 },
  { name: "Fernando Perez - fperez@email.com", id: 22 },
  { name: "Paola Rodriguez - prodriguez@email.com", id: 23 },
  { name: "Roberto Medina - rmedina@email.com", id: 24 }
];

function onChange(e) {
  let keyword = e.target.value;
  let dropdownEl = document.querySelector("#dropdown");
  dropdownEl.classList.remove("hidden");
  let filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(filteredAgents)

  renderOptions(filteredAgents);
  adjustDropdownHeight()
}

function onClick(e) {
  let dropdownEl = document.querySelector("#dropdown");
  dropdownEl.classList.remove("hidden")

  renderOptions(agents)
}

document.addEventListener("DOMContentLoaded", () => {
  renderOptions(agents);
});

function renderOptions(options) {
  let dropdownEl = document.querySelector("#dropdown");

  let newHtml = ``;

  if (options.length === 0) {
    newHtml = `<div class="px-5 py-3 text-stone-600">--No matches--</div>`;
  } else {
    options.forEach((agent) => {
      newHtml += `<div
          onclick="selectOption('${agent.name}')"
          class="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
        >
          ${agent.name}
        </div>`;
    });

  }
  dropdownEl.innerHTML = newHtml;
  adjustDropdownHeight()
}

function selectOption(selectedOption) {
  hideDropdown();
  let input = document.querySelector("#autocompleteInput");
  input.value = selectedOption;

  setTimeout(() => {
    let selectedAgent = agents.find((agent) => agent.name === selectedOption);

    alert(`Selection Details\nValue: ${selectedAgent.id}\nLabel: ${selectedAgent.name}`);
  }, 100);
}

document.addEventListener("click", () => {
  hideDropdown();
});

function hideDropdown() {
  let dropdownEl = document.querySelector("#dropdown");
  dropdownEl.classList.add("hidden");
}

function adjustDropdownHeight() {
  let dropdownEl = document.querySelector("#dropdown");
  let options = dropdownEl.querySelectorAll("div");
  let optionHeight = options[0].offsetHeight;
  let maxDropdownHeight = 200;
  let dropdownHeight = options.length * optionHeight;
  if (dropdownHeight > maxDropdownHeight) {
    dropdownHeight = maxDropdownHeight;
  }

  dropdownEl.style.height = `${dropdownHeight}px`;
}