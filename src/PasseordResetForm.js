import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function PasswordResetForm({ resetToken }) {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory()

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Implement the logic to reset the password and update it in the backend
    // You can make a POST request to your Node.js backend here

    // Example: Send the new password and reset token to the backend
    const response = await fetch('/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, resetToken }),
    });

    if (response.status === 200) {
      setMessage('Password reset successful');
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  return (
    <div className="container">
      <h2>Reset Password : </h2>
      <form onSubmit={handlePasswordReset}>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='reset_btn'>Reset Password</button>
        <button type="button" className='back_btn' onClick={()=>history.push("/")}>Back</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PasswordResetForm;
