function CreateElements2() {
    // إنشاء div
    var div_ = document.createElement("div");
    div_.className = "Div-K";
    div_.style.display = "flex";
    div_.style.flexDirection = "column";
    div_.style.gap = "10px"; 
    

    // الليبل لي اسم المستخدم
    var label1 = document.createElement("label");
    label1.htmlFor = "UserName";
    label1.innerText = "Username";
    label1.name = "Username";

    // لانبت الاسم المستخدم
    var UserName = document.createElement("input");
    UserName.type = "text";
    UserName.name = "UserName";
    UserName.id = "UserName";

    // إنشاء label لكلمة المرور
    var label2 = document.createElement("label");
    label2.htmlFor = "Password";
    label2.innerText = "Password";
    label2.name = "Password";

    // إنشاء input لكلمة المرور
    var password = document.createElement("input");
    password.type = "password";
    password.name = "Password";

    // إنشاء label لتأكيد كلمة المرور
    var label3 = document.createElement("label");
    label3.htmlFor = "ConfirmPassword";
    label3.innerText = "Confirm Password";
    label3.name = "ConfirmPassword";

    // إنشاء input لتأكيد كلمة المرور
    var confirmPassword = document.createElement("input");
    confirmPassword.type = "password";
    confirmPassword.name = "ConfirmPassword";

    // إنشاء label للبريد الإلكتروني
    var label4 = document.createElement("label");
    label4.htmlFor = "Email";
    label4.innerText = "Email";
    label4.name = "Email";

    // إنشاء input للبريد الإلكتروني
    var Email = document.createElement("input");
    Email.type = "email";
    Email.name = "Email";

    // إنشاء زر الإرسال
    var button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "Submit";
    button.value = "Submit";
    button.name = "Submit";

    // إنشاء div لعرض رسائل الخطأ
    var errorDiv = document.createElement("div");
    errorDiv.style.color = "red";

    // إضافة العناصر إلى div
    div_.appendChild(label1);
    div_.appendChild(UserName);
    div_.appendChild(label2);
    div_.appendChild(password);
    div_.appendChild(label3);
    div_.appendChild(confirmPassword);
    div_.appendChild(label4);
    div_.appendChild(Email);
    div_.appendChild(button);
    div_.appendChild(errorDiv); 


    button.onclick = function() {
        var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        errorDiv.innerText = "";

        
        if (UserName.value === "") {
            errorDiv.innerText = "User name cannot be empty";

        } else if (password.value.length < 9) {

            errorDiv.innerText = "Password must be at least 9 characters long";
        }
        else if (password.value !== confirmPassword.value)
            {
                errorDiv.innerText = "Password not match"
            }
            else if (!emailregex.test(Email.value)) {
                errorDiv.innerText = "Please enter a valid email address";
            }
    };

    return div_;
}

var Container_Father = document.getElementsByClassName("container")[0];

var Call = CreateElements2();

Container_Father.appendChild(Call);