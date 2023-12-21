function UserProfile({user}){
  console.log(user);
  return (
    <div className="user-profile">
      <img src={user.imgUrl} className="user-profile-image" alt={user.name} />
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default UserProfile;