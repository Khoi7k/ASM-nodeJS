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
const btn_SignUp = document.querySelector('.btn-signUp');
btn_SignUp.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const frmsu = document.querySelector('form[name="signupForm"]');
    const n = frmsu.uname.value;
    const pw = frmsu.password.value;
    const em = frmsu.email.value;
    const user_info = {
        name: n,
        email: em,
        password: pw,
        role: 0
    };
    const [userNoti] = yield getData('http://localhost:3000/api/user/signup', "POST", user_info);
    if (userNoti.userInfo) {
        sessionStorage.setItem('logged', '1');
        sessionStorage.setItem('userInfo', JSON.stringify(userNoti.userInfo));
        confirm(userNoti.notification);
        window.location.href = '/';
    }
    else {
        confirm(userNoti.notification);
    }
}));
