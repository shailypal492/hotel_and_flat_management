const signInForm = document.getElementById('signin-form');
signInForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const response = await fetch('http://localhost:5000/api/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Sign-in successful!');
    } else {
        alert(data.error || 'Something went wrong');
    }
});