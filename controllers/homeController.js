import User from "../model/userModel.js";
import Skill from "../model/skillModel.js";

const homeController = async (req, res) => {
    try {
        // Lấy danh sách kỹ năng từ MongoDB
        const skills = await Skill.find();

        res.render('server', { skills }); // Truyền skills cho view 'server'
    } catch (error) {
        console.log(error.message);
    }
};

const handleContactAndSkill = async (req, res) => {
    try {
        // Lấy thông tin từ yêu cầu (request)
        const { name, email, subject, message, skillName, skillLevel } = req.body;
        // Kiểm tra và lưu thông tin liên hệ nếu các trường thông tin được cung cấp
        if (name && email && subject && message) {
            const userData = new User({
                name,
                email,
                subject,
                message,
            });

            await userData.save();// Lưu thông tin liên hệ vào cơ sở dữ liệu
            console.log("User saved successfully");
        }
        // Kiểm tra và lưu thông tin kỹ năng nếu các trường thông tin được cung cấp
        if (skillName && skillLevel) {
            const newSkill = new Skill({
                skillName,
                skillLevel,
            });

            await newSkill.save();// Lưu thông tin kỹ năng vào cơ sở dữ liệu
            console.log("Skill added successfully");
        }

        // Sau khi lưu thông tin liên hệ và kỹ năng, chuyển hướng lại view 'server'
        res.redirect('/'); // Chuyển hướng về trang chủ sau khi xử lý dữ liệu
    } catch (error) {
        console.log(error.message);// Ghi log nếu có lỗi xảy ra
    }
};

// Hàm xử lý thêm kỹ năng mới
const addSkill = async (req, res) => {
    try {
        const { skillName, skillLevel } = req.body;

        if (skillName && skillLevel) {
            const newSkill = new Skill({
                skillName,
                skillLevel,
            });

            await newSkill.save();
            console.log("Skill added successfully");
            res.sendStatus(200); // Gửi mã phản hồi 200 khi thêm kỹ năng thành công
        } else {
            res.status(400).send("Invalid data"); // Gửi mã phản hồi 400 nếu dữ liệu không hợp lệ
        }
    } catch (error) {
        console.error('Error adding skill:', error);
        res.status(500).send('Server error'); // Gửi mã phản hồi 500 nếu có lỗi xảy ra
    }
};

export { homeController, handleContactAndSkill, addSkill }; // Xuất hàm addSkill
