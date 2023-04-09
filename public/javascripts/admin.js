var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product, getData, Category, User } from "./global.js";
//show Category
const showCate = () => __awaiter(void 0, void 0, void 0, function* () {
    const listCateData = yield getData('http://localhost:3000/api/category');
    const listCate = listCateData.map((cate) => new Category(cate));
    let cateContainer = document.querySelector('#category');
    listCate.forEach(cate => {
        let template = `
            <tr>
                <td>${cate.id}</td>
                <td>${cate.name}</td>
                <td>
                    <a class="link" href="./admin.html?edit_id_cate=${cate.id}">Edit</a>
                    <a class="link" href="./admin.html?del_id_cate=${cate.id}">Remove</a>
                </td>
            </tr>
        `;
        cateContainer === null || cateContainer === void 0 ? void 0 : cateContainer.insertAdjacentHTML('beforeend', template);
    });
});
//show Product
const ShowProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product');
    const listPro = listProData.map((pro) => new Product(pro));
    const listCateData = yield getData('http://localhost:3000/api/category');
    const listCate = listCateData.map((cate) => new Category(cate));
    let productContainer = document.querySelector('#product');
    listPro.forEach(pro => {
        let cateName = listCate.find(e => e.id == pro.id_cate);
        let template = `
        <tr>
            <td>${pro.id}</td>
            <td>${cateName === null || cateName === void 0 ? void 0 : cateName.name}</td>
            <td>${pro.name}</td>
            <td>${pro.price.toLocaleString('vi')}đ</td>
            <td><img class="product_img" src="/images/${pro.img}"></td>
            <td><textarea class="product_textarea" cols="" rows="6" >${pro.feature}</textarea></td>
            <td><textarea class="product_textarea" cols="" rows="6" >${pro.description}</textarea></td>
            <td>
                <a class="link" href="./admin.html?edit_id_product=${pro.id}">Edit</a>
                <a class="link" href="./admin.html?del_id_product=${pro.id}">Remove</a>
            </td>
        </tr>
        `;
        productContainer === null || productContainer === void 0 ? void 0 : productContainer.insertAdjacentHTML('beforeend', template);
    });
});
//show User
const showUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const listUserData = yield getData('http://localhost:3000/api/user');
    const listUser = listUserData.map((user) => new User(user));
    let userContainer = document.querySelector('#user');
    listUser.forEach(user => {
        let template = `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td> Ai cho xem</td>
            <td>${user.role == 0 ? "User" : "Admin"}</td>
            <td>
                <a class="link" href="./admin.html?id_user=${user.id}">Remove</a>
            </td>
        </tr>
        `;
        userContainer === null || userContainer === void 0 ? void 0 : userContainer.insertAdjacentHTML('beforeend', template);
    });
});
showCate();
ShowProduct();
showUser();
