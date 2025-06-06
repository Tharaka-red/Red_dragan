```js
const axios = require("axios");

module.exports = {
  name: "video",
  alias: ["tiktokvideo"],
  desc: "Download TikTok video",
  category: "Downloader",
  usage: ".video <TikTok Link>",
  async exec({ msg, args }) {
    if (!args[0]) return msg.reply("Please provide a TikTok link!");

    try {
      let api = `https://api.lolhuman.xyz/api/tiktok?apikey=YOUR_API_KEY&url=${args[0]}`;
      let res = await axios.get(api);
      let videoUrl = res.data.result.link;

      await msg.sendFile(videoUrl, "tiktok.mp4", "Here is your video!");
    } catch (e) {
      console.error(e);
      msg.reply("❌ Error downloading the video. Check the link or API.");
    }
  },
};
