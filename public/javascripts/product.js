var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product, getData } from "./global.js";
const allProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product/');
    const listPro = listProData.map((pro) => new Product(pro));
    let proContainer = document.querySelector('#products-all');
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
        proContainer === null || proContainer === void 0 ? void 0 : proContainer.insertAdjacentHTML('beforeend', template);
    });
});
const product_cate1 = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product/listCate?id=1');
    const listPro = listProData.map((pro) => new Product(pro));
    let proContainer = document.querySelector('#product-cate1');
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
        proContainer === null || proContainer === void 0 ? void 0 : proContainer.insertAdjacentHTML('beforeend', template);
    });
});
const product_cate2 = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product/listCate?id=2');
    const listPro = listProData.map((pro) => new Product(pro));
    let proContainer = document.querySelector('#product-cate2');
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
        proContainer === null || proContainer === void 0 ? void 0 : proContainer.insertAdjacentHTML('beforeend', template);
    });
});
const product_cate3 = () => __awaiter(void 0, void 0, void 0, function* () {
    const listProData = yield getData('http://localhost:3000/api/product/listCate?id=3');
    const listPro = listProData.map((pro) => new Product(pro));
    let proContainer = document.querySelector('#product-cate3');
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
        proContainer === null || proContainer === void 0 ? void 0 : proContainer.insertAdjacentHTML('beforeend', template);
    });
});
allProduct();
product_cate1();
product_cate2();
product_cate3();
