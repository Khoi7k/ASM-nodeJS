
import { getData, userNoti } from "./global.js";

const btn_SignUp = document.querySelector('.btn-signUp') as HTMLButtonElement
btn_SignUp.addEventListener(
    'click',
    async () => {
        const frmsu = document.querySelector('form[name="signupForm"]') as HTMLFormElement
        const n = frmsu.uname.value
        const pw = frmsu.password.value
        const em = frmsu.email.value
        const user_info = {
            name: n,
            email: em,
            password: pw,
            role: 0
        }
        const [userNoti]: userNoti[] = await getData<userNoti>('http://localhost:3000/api/user/signup',"POST",user_info)
        if(userNoti.userInfo){
            sessionStorage.setItem('logged','1')
            sessionStorage.setItem('userInfo',JSON.stringify(userNoti.userInfo))
            confirm(userNoti.notification)
            window.location.href = '/'
        }else{
            confirm(userNoti.notification)
        }
})

