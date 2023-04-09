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
const signedIn = () => {
    var _a;
    var template = '';
    if (sessionStorage.getItem('userInfo')) {
        const userInfoString = sessionStorage.getItem('userInfo');
        console.log(userInfoString);
        if (userInfoString !== null) {
            const userInfo = JSON.parse(userInfoString);
            const user = new User(userInfo);
            // const user = new User(userInfo)
            if (user.role == 1) {
                template = `
                <a href="/admin"><button class="sign-in btn" style="background-color: #FDB207; color: black">Admin</button></a>`;
            }
            template += `
                <button class="sign-in btn" style="background-color: #FDB207; color: black" id="logOut">Đăng xuất</button>
                `;
        }
    }
    else {
        template = `
        <a href="/action/sign-in"><button class="sign-in btn">Đăng nhập</button></a>`;
    }
    (_a = document.querySelector('#nav-signin')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', template);
};
const cateMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    const listCateData = yield getData('http://localhost:3000/api/category');
    const listCate = listCateData.map((cate) => new Category(cate));
    let cateContainer = document.querySelector('#cate-list');
    listCate.forEach(cate => {
        let template = `
            <div class="dropdown-item">
                  <a href=""><img src="./images/${cate.img}" alt=""></a>
                  <p>${cate.name}</p>
            </div>
        `;
        cateContainer === null || cateContainer === void 0 ? void 0 : cateContainer.insertAdjacentHTML('beforeend', template);
    });
});
const specialProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product/special');
    const listPro = listProData.map((pro) => new Product(pro));
    let specialContainer = document.querySelector('#product-list');
    listPro.forEach(pro => {
        let template = `
        <div class="product-item">
              <img srcset="./images/${pro.img} 2x" alt="" class="product-img">
              <div class="product-content">
                  <p class="product-name">${pro.name}</p>
                  <p class="price">${pro.price.toLocaleString('vi')}<span>đ</span></p>
                  <p class="product-desc">${pro.feature}</p>
                  <div class="product-action">
                      <button class="product-btn1">TÙY CHỈNH</button>
                      <a href="/detail?id=${pro.id}"><button class="product-btn2">ĐẶT HÀNG</button></a>
                  </div>
              </div>
          </div>
        `;
        specialContainer === null || specialContainer === void 0 ? void 0 : specialContainer.insertAdjacentHTML('beforeend', template);
    });
});
const logOut = () => {
    const btn_signOut = document.querySelector('#logOut');
    btn_signOut.addEventListener('click', () => {
        sessionStorage.removeItem('logged');
        sessionStorage.removeItem('userInfo');
        window.location.href = '/';
    });
};
signedIn();
specialProduct();
cateMenu();
logOut();
