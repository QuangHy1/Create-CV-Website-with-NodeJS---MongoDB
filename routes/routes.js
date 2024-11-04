// Import thư viện express để tạo router
import express from 'express';
// Tạo một router mới từ thư viện express
const routes = express.Router();
// Import hàm controller cho trang chủ từ file homeController.js
import { homeController, handleContactAndSkill, addSkill } from '../controllers/homeController.js';
// Xác định route cho URL '/' và ánh xạ nó đến hàm homeController
routes.get('/', homeController);

// Xử lý cả yêu cầu liên quan đến contact và thêm kỹ năng
routes.post('/', handleContactAndSkill);
// Route POST để thêm kỹ năng mới
routes.post('/addSkill', addSkill); // Sử dụng hàm xử lý addSkill
// Xuất router để có thể sử dụng trong file khác
export default routes;