import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Implement the logic to send the email to the backend
    // You can make a POST request to your Node.js backend here

    // Example: Send the email address to the backend
    const response = await fetch('/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 200) {
      setMessage('Password reset email sent. Check your inbox.');
    } else {
      const data = await response.json();
      setMessage(data.error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="col-md-6 offset-md-3">
          <h2 className='title-text'>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label className='email-text'>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="button" className='btn btn-danger' onClick={()=>history.push("/resetPassword")}>ResetPassword</button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
