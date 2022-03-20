// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById("heading")
const para3 = document.querySelector(".para-3")
const title = document.getElementById("title")
const description = document.querySelector(".description")
const para1 = document.querySelector("p")
const para2 = document.querySelector(".para-2")

heading.style.color = "red"
heading.style.textTransform = "uppercase"
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
function changeStyle() {
    const para = document.querySelectorAll(".para")
    para.forEach(function (item) {
        item.style.color = "blue"
        item.style.fontSize = "20px"
    })
}
changeStyle()
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let link = document.createElement("a")
link.innerText = "facebook"
link.href = "https://www.facebook.com/home.php"
link.target = "_blank"

para3.insertAdjacentElement("afterend", link)
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
title.innerText = "Đây là thẻ tiêu đề"
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ) (Không bắt buộc, nếu làm được thì làm)
description.classList.add("text-bold")
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
para3.innerHTML = "<button>CLICK ME</button>"
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2Copy = para2.cloneNode(true)
console.log(para2Copy)
para2.insertAdjacentElement("afterend", para2Copy)
// Xóa thẻ có class=“para-1”
document.body.removeChild(para1)