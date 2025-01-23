import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        alert(`Login avec : ${username}`);
    };

    return (
        <div className="login-page">
            {/* Icône ou Avatar */}
            <div className="avatar">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                    alt="Avatar" 
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        marginBottom: '20px',
                    }}
                />
            </div>

            {/* Champ Email */}
            <div className="input-group">
                <span className="icon">📧</span>
                <input
                    type="text"
                    placeholder="Email ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            {/* Champ Mot de passe */}
            <div className="input-group">
                <span className="icon">🔒</span>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Case à cocher et lien "Mot de passe oublié" */}
            <div className="remember-and-forgot">
                <label className="remember-me">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember me
                </label>
                <a href="/reset-password" className="forgot-password">
                    Forgot Password?
                </a>
            </div>

            {/* Bouton de connexion */}
            <button className="login-button" onClick={handleLogin}>
                LOGIN
            </button>
        </div>
    );
};

export default LoginPage;
