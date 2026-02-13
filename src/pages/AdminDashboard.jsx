import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data.users);
        setMessages(res.data.messages);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary mt-5-text">👑 Admin Dashboard</h2>

      <hr />

      {/* Users Section */}
      <h4 className="mt-4">📧 Registered Users</h4>
      <div className="card p-3 mb-4">
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="d-flex justify-content-between border-bottom py-2">
              <span>{user.email}</span>
              <span className="badge bg-secondary">{user.role}</span>
            </div>
          ))
        )}
      </div>

      {/* Messages Section */}
      <h4 className="mt-4">💬 Contact Messages</h4>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="card p-3 mb-3 shadow-sm">
            <strong>{msg.senderEmail}</strong>
            <p className="mb-1">{msg.message}</p>
            <small className="text-muted">
              {new Date(msg.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
