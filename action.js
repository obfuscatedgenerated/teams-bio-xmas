const axios = require("axios");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const { TEAMS_TOKEN } = process.env;

const today = new Date();

let effective_year = (today.getMonth() === 12 && today.getDate() >= 25) ? today.getFullYear() + 1 : today.getFullYear();
const xmas = new Date(effective_year, 11, 25);

const days = Math.round((xmas - today) / (1000 * 60 * 60 * 24)) + 1;

let effective_bio = (days === 0) ? "Happy Holidays!" : `Only ${days} days until December 25th!`;

axios.patch(
    "https://graph.microsoft.com/v1.0/me",
    {
        aboutMe: effective_bio
    },
    {
        headers: {
            Authorization: `Bearer ${TEAMS_TOKEN}`,
            "Content-Type": "application/json"
        }
    }
).then((response) => {
    console.log("Success! API Returned Data: " + response.data);
}).catch((error) => {
    console.error("Error! Code: " + error.response.status + " API Returned Data: " + error.response.data);
    throw error;
});