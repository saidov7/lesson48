const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

    form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
          message.classList.remove('hidden', 'text-red-500');
          message.classList.add('text-green-500');
          message.textContent = `Welcome, ${data.firstName}!`;
        } else {
          throw new Error(data.message || "Login failed");
        }
      } catch (error) {
        message.classList.remove('hidden', 'text-green-500');
        message.classList.add('text-red-500');
        message.textContent = error.message;
      }
    });