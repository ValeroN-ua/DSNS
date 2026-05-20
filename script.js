// Захищаємо від помилок, якщо скрипт завантажився раніше за форму
const formElement = document.getElementById('regForm');

if (formElement) {
    formElement.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');
        
        messageDiv.textContent = ""; 

        if (email === "valera.rohalskiy@gmail.com" && password === "Valera17") {
            submitBtn.textContent = "Вхід виконується...";
            submitBtn.disabled = true;
            
            messageDiv.textContent = "Авторизація успішна! Перехід...";
            messageDiv.className = "message success";
            
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            messageDiv.textContent = "Невірний логін або пароль! Доступ заблоковано.";
            messageDiv.className = "message error";
        }
    });
}
