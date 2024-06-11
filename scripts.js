$(document).ready(function() {
    // 实时验证用户名和密码输入
    // ...（之前的代码保持不变）...

    // 表单提交验证
    $('#registrationForm').submit(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var email = $('#email').val();
        var isValid = true;

        // 清空之前的错误消息
        $('#message').text('').css('color', '');

        if(username === '' || password === '') {
            $('#message').text('用户名和密码不能为空。').css('color', 'red');
            isValid = false;
        }

        // 密码强度检测
        if(password.length < 8) {
            $('#message').text('密码长度至少为8位。').css('color', 'red');
            isValid = false;
        }

        // 邮箱格式验证
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailRegex.test(email)) {
            $('#message').text('邮箱地址格式不正确。').css('color', 'red');
            isValid = false;
        }

        if(isValid) {
            // 这里添加模拟注册成功的逻辑
            // 例如，发送异步请求到服务器进行注册
            // 假设注册成功，显示注册成功的提示
            alert('注册成功！');
            // 清空表单
            this.reset();
            window.location.href = 'index.html';
            // 可以添加其他注册成功后的操作，如跳转到登录页面等
        }
    });

    // ...（其他代码保持不变）...
});

$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // 阻止表单的默认提交行为

        var loginUsername = $('#loginUsername').val();
        var loginPassword = $('#loginPassword').val();
        var isValid = true;

        // 清空之前的错误消息
        $('#message').text('');

        // 检查用户名和密码是否为空
        if (loginUsername === '' || loginPassword === '') {
            isValid = false;
            $('#message').text('用户名和密码不能为空。');
        }

        // 如果输入有效
        if (isValid) {
            // 这里添加登录成功的逻辑
            // 例如，发送异步请求到服务器进行验证

            // 模拟登录成功
            alert('登录成功！'); // 登录成功提示

            // 清空表单（可选）
            this.reset();

            // 登录成功后跳转到主页或其他页面
            window.location.href = 'index.html'; 
        }
    });
});

$(document).ready(function() {
    $('#surveyForm').submit(function(e) {
        e.preventDefault(); // 阻止表单的默认提交行为

        var name = $('#name').val();
        var email = $('#email').val();
        var isValid = true;

        // 清空之前的错误消息
        $('.error-message').text('');

        // 检查姓名和邮箱是否为空
        if (name === '' || email === '') {
            isValid = false;
            $('.error-message').text('姓名和邮箱不能为空。');
        }

        // 如果输入有效
        if (isValid) {
            // 显示提交成功的模态框
            $('#successModal').modal('show');

            // 清空表单（可选）
            this.reset();
            window.location.href = 'index.html'; 
        }
    });
});