import { getData, userNoti } from "./global.js";
const btn_SignIn = document.querySelector('.btn-signIn') as HTMLButtonElement
btn_SignIn.addEventListener(
    'click',
    async () => {
        const frmsi = document.querySelector('form[name="signinForm"]') as HTMLFormElement
        const e = frmsi.email.value
        const pw = frmsi.password.value
        const user_info = {
            email: e,
            password: pw
        } 
        const [userData]: userNoti[] = await getData<userNoti>('http://localhost:3000/api/user/signin',"POST",user_info)
        
        if(userData.userInfo){
            sessionStorage.setItem('logged','1')
            userData.userInfo.password = "Unknown"
            sessionStorage.setItem('userInfo',JSON.stringify(userData.userInfo))
            confirm(userData.notification)
            window.location.href = '/'
        }else{
            confirm(userData.notification)
        }
        
    }
)