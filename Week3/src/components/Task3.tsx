interface UserCardProps {
    name: string;
    email: string;
  }
  
  const UserCard = ({ name, email }: UserCardProps) => {
    return (
      <div className="p-4 border rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  
  
