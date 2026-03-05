import { useState } from 'react';
import './index.css';

export default function ContactReply({ message = null }) {
  const [replyMessage, setReplyMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/admin/contact/reply/${message?.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `replyMessage=${encodeURIComponent(replyMessage)}`,
      });

      if (response.ok) {
        alert('Reply sent successfully!');
        window.location.href = '/admin/contact';
      }
    } catch (err) {
      console.error('Error sending reply:', err);
      alert('Failed to send reply');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!message) {
    return (
      <div className="admin-layout">
        <div className="main-content">
          <main className="dashboard-content">
            <div className="gmail-card">
              <p>Message not found</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <div className="main-content">
        <main className="dashboard-content">
          <div className="gmail-card">
            <h2>
              Reply to:
              <span className="text-primary"> {message.name}</span>
              (<span>{message.email}</span>)
            </h2>

            <div className="mb-4">
              <p>
                <strong>Subject:</strong> <span>{message.subject}</span>
              </p>
              <p>
                <strong>Message:</strong> <span>{message.message}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="gmail-label">Reply Message</label>
              <textarea
                name="replyMessage"
                className="form-control"
                rows="7"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="gmail-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Reply'}
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
