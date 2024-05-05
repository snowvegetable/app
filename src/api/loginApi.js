export default async function loginApi({ account, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        reject(new Error("登入失敗"));
        return;
      }

      let user = {
        id: 1,
        name: "張三",
        identity: "",
        token: "12345678",
      };

      if (Math.random() < 0.3) {
        user = { ...user, identity: "student" };
      } else if (Math.random() < 0.6) {
        user = { ...user, identity: "teacher" };
      } else {
        user = { ...user, identity: "admin" };
      }

      console.log("登入成功");

      resolve(user);
    }, 10);
  });
}
