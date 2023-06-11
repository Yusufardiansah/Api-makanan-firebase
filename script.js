
let nama = document.getElementById("namat");


getData();
function getData() {
  fetch(
    "https://makanan-9884b-default-rtdb.firebaseio.com/makanan.json?auth=bz7u2nkXcgJPFpTJBvoz0L9vRPwjKtcRMfdFW30D"
  )
    .then((res) => res.json())
    .then((data) => {
      let tabel = "";

      let output = Object.entries(data);
     console.log(output);
      output.forEach((row) => {
        tabel += `
        <article class="container">
       
       <div class="con-image">
          <img class="image" src="/assets/${row[1].foto}"  px"/>
          </div>
          <h2 class="text">${row[1].nama}</h2>
          <div class="conten">
           <p> ${row[1].asal}</p>
           <p>Rp.${row[1].harga}</p>
           </div>
           <div>
          <button type="button" class="btn btn-primary"> Pesan
        </button></div>
       
      </article>
        `;
      });

      nama.innerHTML = tabel;
    });
}