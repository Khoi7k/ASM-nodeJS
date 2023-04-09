import { Product, getData, ProductData, Category, CategoryData , User, UserData} from "./global.js";

//show Category
const showCate = async () => {
    const listCateData: CategoryData[] = await getData<CategoryData>('http://localhost:3000/api/category')
    const listCate = listCateData.map((cate) => new Category(cate))
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
        `
        cateContainer?.insertAdjacentHTML('beforeend', template);
    })
}
//show Product
const ShowProduct = async () => {
    const listProData: ProductData[] = await getData<ProductData>('http://localhost:3000/api/product')
    const listPro = listProData.map((pro) => new Product(pro))
    const listCateData: CategoryData[] = await getData<CategoryData>('http://localhost:3000/api/category')
    const listCate = listCateData.map((cate) => new Category(cate))    
    let productContainer = document.querySelector('#product');
    listPro.forEach(pro => {
        let cateName = listCate.find(e=>e.id==pro.id_cate);
        let template = `
        <tr>
            <td>${pro.id}</td>
            <td>${cateName?.name}</td>
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
        `
        productContainer?.insertAdjacentHTML('beforeend', template);
    })
}
//show User
const showUser = async () => {
    const listUserData: UserData[] = await getData<UserData>('http://localhost:3000/api/user')
    const listUser = listUserData.map((user) => new User(user))
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
        `
        userContainer?.insertAdjacentHTML('beforeend', template);
    })
}
showCate();
ShowProduct();
showUser();