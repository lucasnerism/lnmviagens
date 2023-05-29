import "dotenv/config.js";

const jwtKey = process.env.JWT_KEY || "uRealy_should_make_a_JWT_KEYinYourDotEnv";

export default jwtKey;