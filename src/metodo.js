
const options = {
    method: "GET",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8"
    }
  };

  const tabla = document.querySelector('#tabla');
  let data = [];

function obtenerDatos() {
    fetch('http://localhost:3000/movies', options)

      .then(response => response.json())
      .then(json => {
        data = json;
        mostrarTabla();
      })
       .catch(error => console.error("error"));
};

function mostrarTabla() {
    // Eliminar filas de la tabla existentes
    tabla.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());
    // Agregar filas de datos a la tabla
    data.forEach(dato => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');
      td1.textContent = dato.id;
      td2.textContent = dato.title;
      td3.textContent = dato.director;
      td4.textContent = dato.year;
      td5.textContent = dato.rating;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5)
      tabla.appendChild(tr);
    });
  }

function ordenarTitulo() {
      // Eliminar filas de la tabla existentes
      tabla.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());
      // Ordenar datos por titulo
      data.sort((a, b) => a.title.localeCompare(b.title));
      data.forEach(dato => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');
      td1.textContent = dato.id;
      td2.textContent = dato.title;
      td3.textContent = dato.director;
      td4.textContent = dato.year;
      td5.textContent = dato.rating;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5)
      tabla.appendChild(tr);
    });
  }

  function ordenarPuntos() {
    // Eliminar filas de la tabla existentes
    tabla.querySelectorAll('tr:not(:first-child)').forEach(tr => tr.remove());
    // Ordenar datos por titulo
    data.sort((a, b) => a.rating.localeCompare(b.rating));
    data.forEach(dato => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    td1.textContent = dato.id;
    td2.textContent = dato.title;
    td3.textContent = dato.director;
    td4.textContent = dato.year;
    td5.textContent = dato.rating;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5)
    tabla.appendChild(tr);
  });
}