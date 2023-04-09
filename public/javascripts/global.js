var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Category {
    constructor({ id, name, img }) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
}
export class User {
    constructor({ id, name, email, password, role }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
export class Product {
    constructor({ id, name, price, date, feature, description, views, hot, id_cate, img }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
        this.feature = feature;
        this.description = description;
        this.views = views;
        this.hot = hot;
        this.id_cate = id_cate;
        this.img = img;
    }
    removeItem() {
        fetch(`http://localhost:3000/apipro/${this.id}`, {
            method: "DELETE"
        });
    }
    editItem(data) {
        fetch(`http://localhost:3000/api/product/${this.id}`, {
            method: "PUT"
        });
    }
}
export const getData = (url, method = 'GET', dataInput) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = new Response();
        if (dataInput) {
            response = yield fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataInput)
            });
        }
        else {
            response = yield fetch(url);
        }
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = yield response.json();
        if (!Array.isArray(data)) {
            return [data];
        }
        // If data is an array, return it as is
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
});
