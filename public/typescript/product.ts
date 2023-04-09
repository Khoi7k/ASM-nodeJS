import { Product, getData, ProductData, Category, CategoryData } from "./global.js";
const allProduct = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product/')
    const listPro = listProData.map((pro) => new Product(pro))
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
        `
        proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
const product_cate1 = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product/listCate?id=1')
    const listPro = listProData.map((pro) => new Product(pro))
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
        `
        proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
const product_cate2 = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product/listCate?id=2')
    const listPro = listProData.map((pro) => new Product(pro))
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
        `
        proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
const product_cate3 = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product/listCate?id=3')
    const listPro = listProData.map((pro) => new Product(pro))
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
        `
        proContainer?.insertAdjacentHTML('beforeend', template);
    })
}
allProduct();
product_cate1()
product_cate2()
product_cate3()