// Import thư viện mongoose, được sử dụng để kết nối với MongoDB
import mongoose from "mongoose";
// Định nghĩa hàm connectDB để kết nối với cơ sở dữ liệu
 const connectDB = async(DATABASEURL)=>{
     // Tạo một đối tượng chứa các tùy chọn cho kết nối cơ sở dữ liệu
    const DB_OPTIONS = {
        dbName:'portfolio',  // Tên của database cần kết nối
    }
    // Thực hiện kết nối với MongoDB, sử dụng đường dẫn DATABASEURL và tùy chọn DB_OPTIONS
    const data = await mongoose.connect(DATABASEURL,DB_OPTIONS)
    // Nếu kết nối thành công, in ra console thông báo thành công
    if(data){
        console.log('Database connect sucessful..')
    }
}
// Xuất hàm connectDB để có thể sử dụng trong các file khác
export default connectDB