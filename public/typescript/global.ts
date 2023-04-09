export interface CategoryData {
    id:number
    name: string
    img:string
}

export class Category {
    id: number
    name: string
    img: string
    constructor({id,name,img}: CategoryData){
        this.id = id
        this.name = name
        this.img = img
    }
}
export interface UserData {
    readonly id:number
    name: string
    email:string
    password: string
    role: number
}
export class User {
    readonly id:number
    name: string
    email:string
    password: string
    role: number
    constructor({id,name,email, password, role}: UserData){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.role = role
    }
}
export interface userNoti {
    notification: string
    userInfo: UserData
}

export interface ProductData {
    readonly id: number
    name: string
    price: number
    date: Date
    feature: string
    description: string
    views: number
    hot: number
    id_cate: number
    img: string
}

export class Product {
    readonly id: number
    name: string
    price: number
    date: Date
    feature: string
    description: string
    views: number
    hot: number
    id_cate: number
    img: string

    constructor({id,name,price,date,feature,
        description,
        views,hot,id_cate,img}: ProductData){
        this.id = id
        this.name = name
        this.price = price
        this.date = date
        this.feature = feature
        this.description = description
        this.views = views
        this.hot = hot
        this.id_cate = id_cate
        this.img=img
    }

    removeItem() {
        fetch(`http://localhost:3000/apipro/${this.id}`, 
        {
            method: "DELETE"
        })
    }

    editItem (data: object ) {
        fetch(`http://localhost:3000/api/product/${this.id}`, 
        {
            method: "PUT"
        })
    }
}


export const getData = async <T>(url:string, method: string = 'GET', dataInput?: object): Promise<T[]> => {
    try {

        let response: Response = new Response()
        if(dataInput){
            response = await fetch(url,{
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataInput)
            });
        }
        else{
            response = await fetch(url)
        }
        if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          
        const data = await response.json() as T[];
        
        if (!Array.isArray(data)) {
            return [data as T];
        }
        
        // If data is an array, return it as is
        return data as T[];


      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
}