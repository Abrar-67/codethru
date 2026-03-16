// auth.js

class Auth {
    constructor() {
        this.userKey = 'user'; // key used to store user data in localStorage
    }

    signup(username, password) {
        // Check if user already exists
        const existingUser = localStorage.getItem(this.userKey);
        if (existingUser) {
            const user = JSON.parse(existingUser);
            if (user.username === username) {
                throw new Error('User already exists.');
            }
        }

        // Store new user
        const newUser = { username, password };  // In a real app, passwords should be hashed
        localStorage.setItem(this.userKey, JSON.stringify(newUser));
        return 'Signup successful';
    }

    login(username, password) {
        const existingUser = localStorage.getItem(this.userKey);
        if (!existingUser) {
            throw new Error('No user found. Please sign up.');
        }

        const user = JSON.parse(existingUser);
        if (user.username === username && user.password === password) {
            // Successfully logged in
            return 'Login successful';
        }
        throw new Error('Invalid username or password');
    }

    logout() {
        localStorage.removeItem(this.userKey);
        return 'Logout successful';
    }
}

// Exporting the Auth class for external usage
export default Auth;