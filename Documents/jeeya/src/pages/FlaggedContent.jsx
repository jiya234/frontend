import React from "react";

const FlaggedContent = () => {
  // Dummy data for flagged posts
  const flaggedPosts = [
    { id: 1, user: "JohnDoe", reason: "Hate speech", content: "This is offensive content." },
    { id: 2, user: "JaneDoe", reason: "Spam", content: "Click here to win a free iPhone!" },
    { id: 3, user: "RandomUser", reason: "Harassment", content: "You're so dumb, get lost!" },
  ];

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Flagged Content</h1>
      <div className="bg-white shadow-md rounded-lg p-5">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">User</th>
              <th className="border p-2">Reason</th>
              <th className="border p-2">Content</th>
            </tr>
          </thead>
          <tbody>
            {flaggedPosts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="border p-2">{post.user}</td>
                <td className="border p-2">{post.reason}</td>
                <td className="border p-2">{post.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlaggedContent;
