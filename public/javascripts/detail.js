var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./global.js";
const productDetail = () => __awaiter(void 0, void 0, void 0, function* () {
    const urlRepest = new URLSearchParams(window.location.search);
    const id = urlRepest.get('id');
    let productData = yield getData(`http://localhost:3000/api/product/id=${id}`);
    let detailContainer = document.querySelector('#product-detail');
    let template = `
            <div class="detail__container">
                <img srcset="/images/${productData[0].img} 2x" alt="">
                <div class="detail__content">
                    <h2>${productData[0].name}</h2>
                    <p class="detail__price">${productData[0].price.toLocaleString('vi')}đ</p>
                    <p class="detail__feature">${productData[0].feature}</p>
                    <button><i class="fa-solid fa-cart-shopping"></i>Cho vào giỏ</button>
                </div>
            </div>
            <div class="detail__info">
                <div class="detail__info--title">Thông tin chi tiết</div>
                <p>${productData[0].description}</p>
            </div>`;
    detailContainer === null || detailContainer === void 0 ? void 0 : detailContainer.insertAdjacentHTML('beforeend', template);
});
productDetail();
