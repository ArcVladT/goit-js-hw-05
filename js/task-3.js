const sortByDescendingFriendCount = (users) => {
  let sortedUsers = users.toSorted(
    (a, b) => b.friends.length - a.friends.length
  );

  let userNames = sortedUsers.map((user) => user.name);

  return userNames;
};
