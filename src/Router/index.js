import Header from "../Component/Header/Header";
import Product from "../Page/List-Product/List_Product";



const publicRoutes = [
    {path: '/', Comment: Header}, //trang chủ
    {path: '/List_Product', Comment: Product}, //sản phẩm
]

const privateRoutes = []

export {publicRoutes, privateRoutes}