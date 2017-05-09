# Demo Nightmare + nodecron + sendEmail

## Nightmare
- Sử dụng [Nightmare](https://www.npmjs.com/package/nightmare)
- Chức năng: Để lấy dữ liệu từ trang khác về.
- Cấu hình

    ```
    const nightmare = Nightmare({
        dock: true
    });
    ```
- Options

    ```
    .goto('https://techmaster.vn') : Vào trang
    
    .click('.parent-menu li:nth-child(5) a') : Click vào đối tượng trong web
    
    .wait('#search') : Chờ cho id: search load xong
    
    .type('#search', 'Fullstack') : Gõ vào input có id: search chữ "Fullstack"
    
    .wait(1000) :  Chờ 1s
    
    .evaluate(function () {
        var item = document.querySelectorAll('.grid-item .card .card-content h2 a');
        var result = [];
        for(var i = 0; i < item.length; i++){
            var selector = item[i];
            result.push({headline: selector.innerText, url: selector.href});
        }
        return result;
    }) : Lấy tất cả thẻ a trong ".grid-item .card .card-content h2", cho vào vòng lặp để lấy từng thằng 1. sau đó lấy innerText và href của thẻ a.
    
    .end() : Kết thúc
    
    .then(function (result) { : Kết quả lấy được sẽ trả về biến: result
    ```
    
## Send Email
- Sử dụng: [nodemailer](https://www.npmjs.com/package/nodemailer)
- Chức năng: Gửi email
- Cấu hình

    + User, password
    
        ```
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'thanhdat21293@gmail.com',
                pass: ''
            }
        });
        ```
    + Nội dung
        ```
        let mailOptions = {
            from: '"Thanh Dat" <thanhdat@gmail.com>', // sender address
            to: 'cuong@techmaster.vn,thanhdat21293@gmail.com', // list of receivers
            subject: 'Tất cả bài viết với từ khóa "Fullstack"', // Subject line
            html: 'Dear anh Cường, <br> <br>' + content + '<br> Đạt,' // html body
        };
        ```
    + Gửi Email
        ```
        transporter.sendMail(mailOptions, (error, info) => {
	        if (error) {
	            return console.log(error);
	        }
	        console.log('Message %s sent: %s', info.messageId, info.response);
		});
        ```
        
## Nodecron
- Sử dụng: [node-cron](https://www.npmjs.com/package/node-cron)
- Chức năng: Thực hiện 1 hành động nào đó vào 1 thời gian nào đó 
- Cấu hình
    ```
    /* 
     * * * * * *: giây phút giờ ngày tháng năm
     */
    var task = cron.schedule('0 53 9 * * *', function(){
        console.log('running');
        require('./basic.js');
    });
    task.start();
    res.json({ahehe: '111'});
    ```