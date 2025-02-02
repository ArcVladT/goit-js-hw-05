const getTotalBalanceByGender = (users, gender) => {
  const genderBalance = users.filter((user) => user.gender === gender);

  let allBalance = 0;
  for (let user of genderBalance) {
    allBalance += user.balance;
  }

  return allBalance;
};
