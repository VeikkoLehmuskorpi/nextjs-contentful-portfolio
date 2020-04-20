require('dotenv').config();

module.exports = {
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
    CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN,
  },
};
