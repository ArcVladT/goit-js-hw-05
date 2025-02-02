const getUsersWithFriend = (users, friendName) => {
  let usersWithFriend = users.filter((user) =>
    user.friends.includes(friendName)
  );
  let userNames = usersWithFriend.map((user) => user.name);
  return userNames;
};
