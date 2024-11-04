import express from 'express'; // Import thư viện express để tạo ứng dụng web
import routes from './routes/routes.js'; // Import router từ file routes.js
import connectDB from './db/ConnectDB.js'; // Import hàm connectDB từ file ConnectDB.js
import bodyParser from 'body-parser'; // Import middleware 'body-parser' từ thư viện 'body-parser'
import path from 'path'; // Import thư viện path để làm việc với đường dẫn file

const app = express(); // Tạo một ứng dụng express
const port = process.env.PORT || 8080 // Xác định cổng mà ứng dụng sẽ listen(khởi chạy), sử dụng cổng được cung cấp hoặc mặc định là 8080
const DATABASEURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/portfolio';// Xác định đường dẫn đến cơ sở dữ liệu, sử dụng DATABASE_URL nếu có hoặc mặc định là 'mongodb://127.0.0.1:27017/portfolio'

app.use(bodyParser.urlencoded({ extended: false }));// Sử dụng middleware 'body-parser' để xử lý dữ liệu từ phần thân yêu cầu dưới định dạng URL-encoded

// Sử dụng middleware để parse JSON từ body của request
app.use(express.json());

//DATABASE
connectDB(DATABASEURL);// Kết nối đến cơ sở dữ liệu

// Static file
app.use(express.static(path.join(process.cwd(),'public')))// Sử dụng các file tĩnh trong thư mục 'public'

//EJS
// Thiết lập view engine là EJS
app.set('view engine', 'ejs');  
app.set('views', './views')

// Create routes
    // Sử dụng router được định nghĩa trong file routes.js
app.use('/', routes)

// Khởi chạy các kết nối trên cổng được xác định và hiển thị thông báo khi server bắt đầu "listen"
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})