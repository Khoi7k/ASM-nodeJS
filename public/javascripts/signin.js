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
const btn_SignIn = document.querySelector('.btn-signIn');
btn_SignIn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    const frmsi = document.querySelector('form[name="signinForm"]');
    const e = frmsi.email.value;
    const pw = frmsi.password.value;
    const user_info = {
        email: e,
        password: pw
    };
    const [userData] = yield getData('http://localhost:3000/api/user/signin', "POST", user_info);
    if (userData.userInfo) {
        sessionStorage.setItem('logged', '1');
        userData.userInfo.password = "Unknown";
        sessionStorage.setItem('userInfo', JSON.stringify(userData.userInfo));
        confirm(userData.notification);
        window.location.href = '/';
    }
    else {
        confirm(userData.notification);
    }
}));
