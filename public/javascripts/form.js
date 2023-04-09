const orderName = document.querySelector('#order-name');
const spanName = document.querySelector('#alert_name');
const orderPhone = document.querySelector('#order-phone');
const spanPhone = document.querySelector('#alert_phone')
const orderEmail = document.querySelector('#order-email');
const spanEmail = document.querySelector('#alert_email')
const orderCity = document.querySelector('#order-city');
const spanCity = document.querySelector('#alert_city');
const orderTown = document.querySelector('#order-town');
const spanTown = document.querySelector('#alert_town');
const orderAddress = document.querySelector('#order-address');
const spanAddress = document.querySelector('#alert_address');
const orderStreet = document.querySelector('#order-street');
const spanStreet = document.querySelector('#alert_street');
function checking(){
    if(orderName.value.length == 0){
        spanName.innerText = 'Bạn chưa nhập tên!';
    }
    if(orderPhone.value.length == 0){
        spanPhone.innerText = 'Bạn chưa SDT!';
    }
    if(orderEmail.value.length == 0){
        spanEmail.innerText = 'Bạn chưa nhập email!';
    }
    if(orderCity.value.length == 0){
        spanCity.innerText = 'Bạn chưa nhập Tỉnh/Thành phố!';
    }
    if(orderTown.value == 1){
        spanTown.innerText = 'Bạn chưa chọn Quận/Huyện';
    }
    if(orderAddress.value.length == 0){
        spanAddress.innerText = 'Bạn chưa nhập địa chỉ!';
    }
    if(orderStreet.value== 0){
        spanStreet.innerText = 'Bạn chưa chọn Phường!';
    }
}