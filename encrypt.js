const cryptLib = require("@skavinvarnan/cryptlib");
const key = "w0HXiDp6baR2uLNRQ3FpVDePii3aeP7R";

const secretKey = key.substring(0, 32);

const encrypt = (body) => {
  const stringfiedData = JSON.stringify(body);
  const encryptedResult = cryptLib.encryptPlainTextWithRandomIV(stringfiedData, secretKey);
  return encryptedResult;
};

console.log({
  startTime: encrypt(new Date().toISOString()),
  endTime: encrypt(new Date().toISOString()),
  patientName: encrypt("Booked"),
  nurseUUID: encrypt("c4b59c94-8c37-4a39-b167-74e6b6f3ab5e"),
  service: encrypt("Some service"),
  caseDescription: encrypt("Some case description"),
});
