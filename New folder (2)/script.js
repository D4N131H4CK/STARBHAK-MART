// Data menu
const listMenu = [
    {
        id: 1,
        namaMenu: "Beef Burger",
        img: "/assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
        alt: "gambar burger",
        harga: 35000
    },
    {
        id: 2,
        namaMenu: "Chicken Burger",
        img: "/assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
        alt: "gambar burger",
        harga: 30000
    },
    {
        id: 3,
        namaMenu: "Salad buah",
        img: "/assets/food-photographer-zhkhwGrqilw-unsplash.jpg",
        alt: "gambar salad",
        harga: 20000
    },
    {
        id: 4,
        namaMenu: "Kentang goreng",
        img: "/assets/french-fries-1.png",
        alt: "gambar kentang",
        harga: 15000
    },
    {
        id: 5,
        namaMenu: "Coca Cola",
        img: "/assets/jonathan-borba-yZOfNnI2PA0-unsplash.jpg",
        alt: "gambar coca",
        harga: 10000
    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },
    {
        id: 6,
        namaMenu: "Pizza",
        img: "/assets/saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg",
        alt: "gambar pizza",
        harga: 60000

    },

]

// variable
let totalPerItem = {}
let totalHarga = 0
let totalTax = 0
let subTotal = 0

function bayar() {
    totalHarga = 0
    totalTax = 0
    subTotal = 0
    // reset total per item
    for (const menu of listMenu) {
        totalPerItem[menu.id] = 0
    }
    document.getElementById("sub_total").innerHTML = `Rp. ${subTotal.toLocaleString()}`
    document.getElementById("tax_harga").innerHTML = `Rp. ${totalTax.toLocaleString()}`
    document.getElementById("total_harga").innerHTML = `Rp. ${totalHarga.toLocaleString()}`
    document.getElementById("list_keranjang").innerHTML = ""
}


function hapusDariKeranjang(id) {
    const itemElm = document.getElementById(`keranjang_${id}`)
    itemElm.remove()

    const menu = listMenu.find((val) => val.id == id)
    const harga = menu.harga * totalPerItem[id]
    const tax = (10 / 100) * harga

    subTotal -= harga
    totalTax -= tax
    totalHarga -= harga + tax

    document.getElementById("sub_total").innerHTML = `Rp. ${subTotal.toLocaleString()}`
    document.getElementById("tax_harga").innerHTML = `Rp. ${totalTax.toLocaleString()}`
    document.getElementById("total_harga").innerHTML = `Rp. ${totalHarga.toLocaleString()}`

    totalPerItem[id] = 0
}

function tambahKeKeranjang(id) {

    const menu = listMenu.find((val) => val.id == id)
    totalPerItem[id] = totalPerItem[id] + 1
    if (totalPerItem[id] <= 1) {
        const item = `
        <div class="row">
            <div class="col-6"><strong>${menu.namaMenu}</strong></div>
            <div class="col-6"><strong id="harga_${id}">Rp. ${(menu.harga * totalPerItem[id]).toLocaleString()}</strong></div>
        </div>
        <div class="row bg-light">
            <div class="col-4">
                <p>Unit Price</p>
                <p>${menu.harga}</p>
            </div>
            <div class="col-4">
                <p>Quantity</p>
                <p id="quantity_${id}">${totalPerItem[id]}</p>
            </div>
            <div class="col-4">
                <span class="btn" onclick="hapusDariKeranjang(${id})">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </div>
        </div>`
        const listKeranjang = document.getElementById("list_keranjang")
        const itemElm = document.createElement("div")
        itemElm.classList.add("card", "p-3")
        
        itemElm.innerHTML = item
        itemElm.id = `keranjang_${id}`
        listKeranjang.appendChild(itemElm)
    } else {
        const harga = menu.harga * totalPerItem[id]
        const totalHargaPeritemElm = document.getElementById(`harga_${id}`)
        const quantityElm = document.getElementById(`quantity_${id}`)
        totalHargaPeritemElm.innerHTML = `Rp. ${harga.toLocaleString()}`
        quantityElm.innerHTML = totalPerItem[id]
    }

    const tax = (10 / 100) * menu.harga
    subTotal += menu.harga
    totalHarga += menu.harga + tax
    totalTax += tax

    document.getElementById("sub_total").innerHTML = `Rp. ${subTotal.toLocaleString()}`
    document.getElementById("tax_harga").innerHTML = `Rp. ${totalTax.toLocaleString()}`
    document.getElementById("total_harga").innerHTML = `Rp. ${totalHarga.toLocaleString()}`

}


// Display Menu
for (const menu of listMenu) {
    totalPerItem[menu.id] = 0


    const contentMenu = document.getElementById("content_menu")
    const menuElm = document.createElement("div")
    menuElm.classList.add("col-3")
    menuElm.innerHTML = `
     <div class="card p-1 border border-dark border-3">
         <div class="container">
             <div class="row">
                 <div class="col text-center" data-id="${menu.id}">
                     <img src="${menu.img}" alt="${menu.alt}" class="img-fluid img-thumbnail text-center" style="max-height: 200px">
                     <div class="card-body">
                         <p class="card-text">
                         <h5>${menu.namaMenu}</h5>
                         </p>
                         <p class="bg-dark m-2" style="border-radius:30px; font-size:18px; color:white;">${menu.harga.toLocaleString()}</p>
                         <button href="#" class="btn btn-dark" onclick="tambahKeKeranjang(${menu.id})"><i
                    class="fa-solid fa-cart-shopping fa-bounce"></i></button>
                         <button href="#" class="btn btn-dark btnDetail">DETAIL</button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    `
    contentMenu.appendChild(menuElm)
}

