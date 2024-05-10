export default async function verify_token() {
    let token = localStorage.getItem("token");

    try {
        let response = await fetch("http://localhost:8080/verify_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            return false;
        }

        let data = await response.json();
        return data;
    } catch (e) {
        throw false;
    }
}
