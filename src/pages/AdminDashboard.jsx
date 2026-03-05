import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        
        console.log("Fetching dashboard data with token:", token);

        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Dashboard response received:", res.data);
        
        setUsers(res.data.users || []);
        setMessages(res.data.messages || []);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Failed to fetch dashboard data");
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
  
  if (error) return <h3 className="text-center mt-5 text-danger">Error: {error}</h3>;

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
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.email}</td>
                    <td><span className="badge bg-secondary">{user.role}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Messages Section */}
      <h4 className="mt-4">💬 Form Submissions</h4>
      {messages.length === 0 ? (
        <p>No messages found</p>
      ) : (
        messages.map((msg) => (
          <div key={msg._id} className="card p-3 mb-3 shadow-sm">
            <div className="row">
              <div className="col-md-6">
                <strong>Name:</strong> <p>{msg.name}</p>
              </div>
              <div className="col-md-6">
                <strong>Email:</strong> <p>{msg.email}</p>
              </div>
              <div className="col-md-6">
                <strong>Phone:</strong> <p>{msg.phone}</p>
              </div>
              <div className="col-md-6">
                <strong>Position:</strong> <p>{msg.position}</p>
              </div>
              <div className="col-md-12">
                <strong>Message:</strong> <p>{msg.message}</p>
              </div>
             
            </div>
            <small className="text-muted">
              Submitted: {new Date(msg.createdAt).toLocaleString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
