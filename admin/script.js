//edit
let nama = document.getElementById("nama");
let asal = document.getElementById("asal");
let harga = document.getElementById("harga");
let foto = document.getElementById("foto");
let tbody = document.getElementById("tbody");
let getid = document.getElementById("getid");

let cnama = document.getElementById("cnama");
let casal = document.getElementById("casal");
let charga = document.getElementById("charga");
let cfoto = document.getElementById("cfoto");

getData();
function getData() {
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan.json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D"
  )
    .then((response) => response.json())
    .then((data) => {
      let tabel = "";

      let output = Object.entries(data);
      console.log(output);
      output.forEach((row) => {
        tabel += `
       <tr>
       <td>${row[1].nama}</td>
       <td>${row[1].asal}</td>
       <td>${row[1].harga}</td>
       <td>${row[1].foto}</td>
      <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit('${row[0]}')"> edit
        </button></td>
       <td><button type="button" class="btn btn-danger" id="updateData" onclick="delet('${row[0]}')">Hapus</button></td>
       </tr>
        `;
      });

      tbody.innerHTML = tabel;
    });
}
function create() {
  let data = {
    nama: cnama.value,
    asal: casal.value,
    harga: charga.value,
    foto: cfoto.value,
  };
  console.log("ini create");
  // "https://makanan-9884b-default-rtdb.firebaseio.com/makanan.json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D"
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan.json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      getData();
    });
}

function edit(id) {
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan/" +
      id +
      ".json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D"
  )
    .then((res) => res.json())
    .then((data) => {
      nama.value = data.nama;
      asal.value = data.asal;
      harga.value = data.harga;
      foto.value = data.foto;
      getid.value = id;
    });
}

function updateData(id) {
  let updateData = document.getElementById("updateData");
  let putdata = {
    nama: nama.value,
    asal: asal.value,
    harga: harga.value,
    foto: foto.value,
  };
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan/" +
      getid.value +
      ".json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putdata),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      getData();
    });
  updateData.setAttribute("data-bs-dismiss", "modal");
}

function delet(id) {
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan/" +
      id +
      ".json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then(() => {
      getData();
    });
}
