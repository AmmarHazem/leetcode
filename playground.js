main();
console.log();

function main() {
  let auth = {
    username: "Akira",
    token: "i3u4yf871g",
    getUserId() {
      return this.username + this.token;
    },
  };
  let stoleUserId = auth.getUserId.bind(auth);
  console.log(auth.getUserId());
  console.log(stoleUserId());
  console.log();
}
