fetch("https://jsonplaceholder.typicode.com/users")
  .then((respone) => respone.json())
  .then(function (myData) {
    const table = document.createElement("table");
    myData.forEach((user) => {
      let { id, name, email, phone, website } = user;
      const row = document.createElement("tr");
      row.innerHTML = `<td>${id}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${website}</td>`;
      table.appendChild(row);
      document.body.appendChild(table);
    });
  })
  .catch((err) => console.error(err));
