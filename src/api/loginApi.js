// //測試用
// export default async function loginApi({ account, password }) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.9) {
//                 reject(new Error("登入失敗"));
//                 return;
//             }
//             let data = {
//                 identity: "",
//                 token: "12345678",
//             };
//             if (Math.random() < 0.3) {
//                 data = { ...data, identity: "student" };
//             } else if (Math.random() < 0.6) {
//                 data = { ...data, identity: "teacher" };
//             } else {
//                 data = { ...data, identity: "admin" };
//             }

//             console.log("登入成功");
//             localStorage.setItem("token", data.access_token);
//             localStorage.setItem("identity", data.identity);

//             resolve(data);
//         }, 10);
//     });
// }

export default async function loginApi({ account, password }) {
    const formData = new FormData();

    formData.append("grant_type", "");
    formData.append("username", account);
    formData.append("password", password);
    formData.append("scope", "");
    formData.append("client_id", "");
    formData.append("client_secret", "");

    const urlEncodedFormData = new URLSearchParams(formData).toString();

    try {
        let response = await fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: urlEncodedFormData,
        });

        if (!response.ok) {
            throw new Error("帳號或密碼輸入錯誤");
        }

        let data = await response.json();

        localStorage.setItem("token", data.access_token);
        localStorage.setItem("identity", data.identity);
        return data;
    } catch (e) {
        throw new Error("帳號或密碼輸入錯誤");
    }
}
