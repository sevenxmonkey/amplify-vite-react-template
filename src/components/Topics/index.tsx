import { useEffect, useState } from "react";
import { Post } from "./interfaces";
import { sampleTopics } from "./_mock_data_";
import './topics.scss'
import { useNavigate } from "react-router";

const TopicCard = ({ post }: { post: Post }): JSX.Element => {

  return (
    <div className="post-card" style={{ border: "1px solid #ddd", padding: "16px", marginBottom: "16px", borderRadius: "8px" }}>
      {/* First row: Title, Read Count, and Vote Count */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontSize: "1.5rem", margin: 0 }}>{post.title}</h3>
        <div style={{ fontSize: "0.9rem", color: "#888" }}>
          Reads: {post.readCount} | Likes: {post.voteCount}
        </div>
      </div>

      {/* Second row: Author and Post Time */}
      <div style={{ fontSize: "0.9rem", color: "hsl(190, 70%, 70%)", margin: "8px 0" }}>
        By {post.author} on {new Date(post.postTime).toLocaleDateString()}
      </div>

      {/* Third row: Tags */}
      <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "8px" }}>
        Tags: {post.tags.join(", ")}
      </div>

      {/* Fourth row: Content */}
      <p style={{ fontSize: "1rem", margin: "8px 0" }}>{post.content}</p>

      {/* Comment Button */}
      <button className="primary-btn" style={{ display: "flex" }} >
        <i className="material-icons">chat</i> Comments ({post.comments.length})
      </button>
    </div>
  )
}

const Topics = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    setPosts(sampleTopics);
  }, []);

  return (
    <div className="posts-list" style={{ padding: "50px 0 10px 0" }}>
      <div className="top">
        <button
          className="primary-btn create"
          onClick={() => navigate('/edit')}
        >
          <i className="material-icons">edit</i><b>Write a topic</b>
        </button>
        <button
          className="primary-btn create"
          style={{ backgroundColor: "orange" }}
          onClick={() => navigate('/network')}
        >
          <i className="material-icons" style={{ fontSize: '30px' }}>groups</i>
          <b>Networking</b>
        </button>
      </div>
      <h2 style={{ fontSize: "2rem", marginBottom: "16px", display: "flex", alignItems: "center" }}>
        Hot Topics
        <i className="material-icons" style={{ fontSize: '30px', color: "orange" }}>local_fire_department</i>
      </h2>
      {posts.map((post) => (
        <TopicCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Topics;