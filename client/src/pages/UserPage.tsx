import { useLoaderData } from "react-router";
import type { User } from "better-auth";

const UserPage = () => {
  const { user } = useLoaderData() as { user: User };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
