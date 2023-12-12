/** @type {import('next').NextConfig} */

const cron = require("node-cron");

cron.schedule("* * * * *", async function () {
  console.log("Say scheduled hello");
  await fetch("https://qwip.onrender.com");
  await fetch("https://myfi-mbsj.onrender.com");
});

const nextConfig = {};

module.exports = nextConfig;
