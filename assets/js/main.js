// Tạo một đối tượng lưu trữ danh sách sinh viên
let danhSachSinhVien = [];

// Thêm sinh viên
function themSinhVien() {
    let hoTen = document.getElementById("hoTen").value;
    let maSV = document.getElementById("maSV").value;
    let ngaySinh = document.getElementById("ngaySinh").value;
    let lop = document.getElementById("lop").value;

    let sinhVien = { hoTen, maSV, ngaySinh, lop };

    danhSachSinhVien.push(sinhVien);

    hienThiDanhSachSinhVien();
}

// Hiển thị danh sách sinh viên
function hienThiDanhSachSinhVien() {
    let tbody = document
        .getElementById("bangSinhVien")
        .getElementsByTagName("tbody")[0];
    let html = "";
    for (let i = 0; i < danhSachSinhVien.length; i++) {
        html += `
            <tr>
                <td>${danhSachSinhVien[i].hoTen}</td>
                <td>${danhSachSinhVien[i].maSV}</td>
                <td>${danhSachSinhVien[i].ngaySinh}</td>
                <td>${danhSachSinhVien[i].lop}</td>
                <td>
                    <button onclick="suaSinhVien(${i})">Sửa</button>
                    <button onclick="xoaSinhVien(${i})">Xóa</button>
                </td>
            </tr>
        `;
    }
    tbody.innerHTML = html;
}

// Sửa sinh viên
function suaSinhVien(index) {
    document.getElementById("hoTen").value = danhSachSinhVien[index].hoTen;
    document.getElementById("maSV").value = danhSachSinhVien[index].maSV;
    document.getElementById("ngaySinh").value =
        danhSachSinhVien[index].ngaySinh;
    document.getElementById("lop").value = danhSachSinhVien[index].lop;
    danhSachSinhVien.splice(index, 1);
}

// Xóa sinh viên
function xoaSinhVien(index) {
    danhSachSinhVien.splice(index, 1);
    hienThiDanhSachSinhVien();
}

document
    .getElementById("formSinhVien")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        themSinhVien();
    });
