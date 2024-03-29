// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./pages/users/UserPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Login from "./pages/login/LoginPage";
import ProductPage from "./pages/product/ProductPage";
import OrderPage from "./pages/order/OrderPage";
import PaymentPage from "./pages/payment/PaymentPage";
import AddProductPage from "./pages/product/AddProduct";
import ArticlePage from "./pages/blogpost/BlogpostPage";
import AddBlogPostPage from "./pages/blogpost/AddBlogpost";
import EditBlogPostPage from "./pages/blogpost/EditArticle";
import ArticleDetailsPage from "./pages/blogpost/DetailBlogpost";
import CategoryPage from "./pages/category/CategoryPage";
import EditCategoryPage from "./pages/category/EditCategoryPage";
import AddCategoryPage from "./pages/category/AddCategoryPage";
import CarouselPage from "./pages/carousel/CarouselPage";
import AddCarouselPage from "./pages/carousel/AddCarouselPage";
import EditCarouselPage from "./pages/carousel/EditCarouselPage";
import ReviewsPage from "./pages/review/ReviewPage";
import ProductReviewsPage from "./pages/review/DetailsReview";
import EditProductPage from "./pages/product/EditProductPage";
import OrderDetail from "./pages/order/OrderDetailPage";
import ProductDetailPage from "./pages/product/DetailProductPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <div className="flex-grow">
          <Routes>
            <Route path="/customer" element={<UserPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/create" element={<AddProductPage />} />
            <Route path="/products/detail/:id" element={<EditProductPage />} />
            <Route path="/products/details/:id" element={<ProductDetailPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route exact path="/orders/details/:id" element={<OrderDetail />} />  
            <Route path="/payments" element={<PaymentPage />} />
            <Route path="/blog-posts" element={<ArticlePage />} />
            <Route path="/blog-posts/create" element={<AddBlogPostPage />} />
            <Route path="/blog-posts/edit/:id" element={<EditBlogPostPage />} />
            <Route
              path="/blog-posts/details/:id"
              element={<ArticleDetailsPage />}
            />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/create" element={<AddCategoryPage />} />
            <Route path="/category/edit/:id" element={<EditCategoryPage />} />
            <Route path="/carousel" element={<CarouselPage />} />
            <Route path="/carousel/create" element={<AddCarouselPage />} />
            <Route path="/carousel/edit/:id" element={<EditCarouselPage />} />

            <Route path="/review" element={<ReviewsPage />} />
            <Route path="/review/detail/:id" element={<ProductReviewsPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
