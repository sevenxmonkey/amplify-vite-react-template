import React from "react";
import './profile.scss'
import AuthWrapper from "../AuthWrapper";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface CommentedPost {
  postId: number;
  title: string;
  comment: string;
  commentTime: string;
}

interface UserProfile {
  id: number;
  name: string;
  teamGroup: string;
  email: string;
  role: string;
  location: string;
  bio: string;
  commentedPosts: CommentedPost[];
}

const userProfile: UserProfile = {
  id: 1,
  name: "Alice Chen",
  teamGroup: "Product Development",
  email: "alice.chen@company.com",
  role: "Product Manager",
  location: "San Francisco, CA",
  bio: "Passionate about creating innovative products and fostering team collaboration.",
  commentedPosts: [
    {
      postId: 101,
      title: "Remote Work Best Practices",
      comment: "Great tips! I've found that having a dedicated workspace is essential for focus.",
      commentTime: "2024-10-15T10:12:00Z"
    },
    {
      postId: 102,
      title: "Team Building Activities",
      comment: "I recommend virtual coffee breaks. They help build team morale!",
      commentTime: "2024-10-17T14:32:00Z"
    },
    {
      postId: 103,
      title: "Feedback on the New Onboarding Process",
      comment: "The new process is more streamlined. Just a suggestion: consider adding a mentorship aspect.",
      commentTime: "2024-10-20T08:45:00Z"
    },
  ]
};

const Profile: React.FC = () => {
  const { teamGroup, email, role, location, bio, commentedPosts } = userProfile;
  const { user } = useAuthenticator((context) => [context.user]);
  return (
    <AuthWrapper>
      <div className="user-profile" style={{ padding: "16px" }}>
        {/* User Information Section */}
        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "8px", color: "orange" }}>Hi {user?.signInDetails?.loginId}</h2>
          <p style={{ fontSize: "1rem", color: "#555" }}>{role} - {teamGroup}</p>
          <p style={{ fontSize: "1rem", color: "#555" }}>Location: {location}</p>
          <p style={{ fontSize: "1rem", color: "#555" }}>Email: <a href={`mailto:${email}`}>{user?.signInDetails?.loginId}</a></p>
          <p style={{ fontSize: "1rem", color: "#555", marginTop: "16px" }}>{bio}</p>
        </section>

        {/* Commented Posts Section */}
        <section>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Commented Posts</h3>
          {commentedPosts.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {commentedPosts.map((post) => (
                <li key={post.postId} style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", marginBottom: "12px" }}>
                  <h4 style={{ fontSize: "1.25rem", margin: "0 0 8px" }}>{post.title}</h4>
                  <p style={{ fontSize: "1rem", color: "#555", marginBottom: "8px" }}>{post.comment}</p>
                  <small style={{ fontSize: "0.85rem", color: "#888" }}>Commented on {new Date(post.commentTime).toLocaleDateString()}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: "1rem", color: "#555" }}>No comments yet.</p>
          )}
        </section>
      </div>
    </AuthWrapper>
  );
};

export default Profile;