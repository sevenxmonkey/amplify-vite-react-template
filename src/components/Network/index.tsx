import React, { useEffect, useState } from "react";
import './network.scss'
import AuthWrapper from "../AuthWrapper";

interface User {
  id: number;
  name: string;
  teamGroup: string;
  email: string;
  role: string;
  location: string;
}

// Sample data
const sampleUsers: User[] = [
  {
    id: 1,
    name: "Alice Chen",
    teamGroup: "Product Development",
    email: "alice.chen@dev640.com",
    role: "Product Manager",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "David Lee",
    teamGroup: "Engineering",
    email: "david.lee@dev640.com",
    role: "Software Engineer",
    location: "San Jose, CA"
  },
  {
    id: 3,
    name: "Emma Davis",
    teamGroup: "Design",
    email: "emma.davis@dev640.com",
    role: "UX Designer",
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "Michael Zhang",
    teamGroup: "Marketing",
    email: "michael.zhang@dev640.com",
    role: "Marketing Specialist",
    location: "New York, NY"
  },
  {
    id: 5,
    name: "Sophia Williams",
    teamGroup: "Customer Support",
    email: "sophia.williams@dev640.com",
    role: "Customer Success Manager",
    location: "Seattle, WA"
  },
  // Add more users as needed
];

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user-card" style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
      {/* User Name */}
      <h4 style={{ fontSize: "1.25rem", margin: "0 0 8px" }}>{user.name}</h4>

      {/* User Role and Team Group */}
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#555" }}>
        <strong>Role:</strong> {user.role}
      </p>
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#555" }}>
        <strong>Team:</strong> {user.teamGroup}
      </p>

      {/* User Email */}
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#555" }}>
        <strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>

      {/* Location */}
      <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#555" }}>
        <strong>Location:</strong> {user.location}
      </p>
    </div>
  );
};

const Network: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulate data fetching
    setUsers(sampleUsers);
  }, []);

  return (
    <AuthWrapper>
      <div className="network-page" style={{ padding: "16px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>Company Network</h2>
        <div className="user-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Network;