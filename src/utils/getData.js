import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios.get('https://olegior-json-server.vercel.app/cheatsheet/');
        if (response.status === 200)
            return response.data;
    }
    catch (err) {
        console.log(err);
    }
    return [];
}