//Pages
import Header from '../components/page/Header';
import Category_home from '../components/page/Page_category/Category_home';
import Product_detail_page from '../components/page/Product/Product_detail_page';
import Product_supplier from "../components/page/Product_supplier/Product_supplier";

const publicRoutes = [
    {path: '/', component: Header}, // này là trang chủ
    {path: '/Category_home', component: Category_home},//trang category
    {path: '/Product_detail_page', component: Product_detail_page},//trang category
    {path: '/Shop_detail', component: Product_supplier},//trang shop


]

const privateRoutes = []

export {publicRoutes, privateRoutes}