const list = document.querySelector("#starred");

fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to load starred repositories (${response.status})`);
    }
    return response.json();
  })
  .then((events) => {
    events.forEach((event) => {
      const item = document.createElement("li");
      const repository = document.createElement("a");
      const date = document.createElement("time");

      repository.href = event.url;
      repository.textContent = event.name;
      date.dateTime = event.starred;
      date.textContent = ` — starred ${event.starred}`;

      item.append(repository, date);
      list.appendChild(item);
    });
  })
  .catch((error) => {
    list.innerHTML = `<li>${error.message}</li>`;
  });
