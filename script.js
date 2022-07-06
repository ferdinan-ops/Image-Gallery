// seleksi DOM yang diperlukan
const container = document.querySelector(".container")
const jumbo = document.querySelector(".jumbo")
const thumbs = document.querySelectorAll(".thumb")

// event Bubbling thdp thumb ke jumbo saat diklik
container.addEventListener("click", function (e) {

    // event click dijalankan bila yg diklik memiliki nama kelas thumb
    if (e.target.className == "thumb") {

        // mengubah src dari img jumbo sesuai dgn yg diklik dgn method src
        jumbo.src = e.target.src
        jumbo.classList.add("fade")

        // membuat animasi fade pd jumbo dgn rentang waktu 0.5s
        setTimeout(function () {
            jumbo.classList.remove("fade")
        }, 500)

        // membuat kondisi pd thumb bila diklik opacity akan 0.7 dgn mengubah setiap thumb tdk memiliki class click hanya thumb
        thumbs.forEach(function (thumb) {
            thumb.className = "thumb"
        })

        // menambahkan opacity dgn class click pd thumb bila diklik
        e.target.classList.add("click")
    }
})