import { Product, getData, ProductData, Category, CategoryData , User, UserData} from "./global.js";

const signedIn = () => {
    var template: string = ''
    if(sessionStorage.getItem('userInfo')){
        const userInfoString = sessionStorage.getItem('userInfo');
        console.log(userInfoString);
        
        if (userInfoString !== null) {
            const userInfo: UserData = JSON.parse(userInfoString);
            const user = new User(userInfo);
            // const user = new User(userInfo)
            if(user.role==1){
                template=`
                <a href="/admin"><button class="sign-in btn" style="background-color: #FDB207; color: black">Admin</button></a>`
                
            }
            template +=`
                <button class="sign-in btn" style="background-color: #FDB207; color: black" id="logOut">Đăng xuất</button>
                `
        }
    }else{
        template = `
        <a href="/action/sign-in"><button class="sign-in btn">Đăng nhập</button></a>`
    }
    document.querySelector('#nav-signin')?.insertAdjacentHTML('afterbegin', template);
}

const cateMenu = async () => {
    const listCateData: CategoryData[] = await getData<CategoryData>('http://localhost:3000/api/category')
    const listCate = listCateData.map((cate) => new Category(cate))
    let cateContainer = document.querySelector('#cate-list');
    listCate.forEach(cate => {
        let template = `
            <div class="dropdown-item">
                  <a href=""><img src="./images/${cate.img}" alt=""></a>
                  <p>${cate.name}</p>
            </div>
        `
        cateContainer?.insertAdjacentHTML('beforeend', template);
    })
}
const specialProduct = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product/special')
    const listPro = listProData.map((pro) => new Product(pro))
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
        `
        specialContainer?.insertAdjacentHTML('beforeend', template);
    })
}
const logOut = () => {
    const btn_signOut = document.querySelector('#logOut') as HTMLElement
    btn_signOut.addEventListener(
        'click',
        () => {
            sessionStorage.removeItem('logged')
            sessionStorage.removeItem('userInfo')
            window.location.href = '/'
        }
    )
}
signedIn();
specialProduct();
cateMenu();
logOut();