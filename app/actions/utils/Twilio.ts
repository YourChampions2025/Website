import { type IContactUsForm } from "../../../components/globals/forms/contact-us-form/contact-us-form";
import { type ICareersForm } from "../../../components/screens/careers/side-content-careers/side-content-careers";
import { type IClientInfo } from "../../../utils/useGetClientInfo";

/**
 * pnpm i twilio
 */

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require("twilio")(accountSid, authToken);

const THE_CASELY_GROUP_PHONE_NUMBER_LIST = [
  "+19545402697", // Davin
];

async function Twilio(
  data: (Partial<IContactUsForm> & Partial<ICareersForm>) & {
    score: number;
  } & IClientInfo,
  formName:
    | "Contact Form"
    | "Career Form"
) {
  // To not send prop names but instead labels
  const DATA_LABEL_MAP: {
    [prop in keyof typeof data]: string;
  } = {
    email: "Email",
    name: "Full Name",
    phone: "Phone Number",
    barNumber: "Bar Number",
    desiredRole: "Desired Role",
    location: "Location",
    message: "Message",
    eventId: "Event Id",
    ip: "IP",
    locationHref: "Event URL",
    score: "ReCaptcha Score",
    userAgent: "User Agent",
  };

  const TEXT_MESSAGE =
    `***Fischer And Redavid Lead***\n` +
    `${Object.keys(data)
      .map((_keyName, i) => {
        const keyName = _keyName as keyof typeof DATA_LABEL_MAP;

        // Remove types I don't want in the map
        if (!(keyName in DATA_LABEL_MAP)) return "";

        if (keyName === "message") {
          // Special case
          let description = data[keyName];
          if (!description) return "";

          if (description.length > 100) {
            description = `${description.substring(0, 100)}...`;
          }

          return `${DATA_LABEL_MAP[keyName]}: ${
            description ? description : "N/A"
          }`;
        }

        return `${DATA_LABEL_MAP[keyName]}: ${
          data[keyName] ? data[keyName].toString() : "N/A"
        }`;
      })
      .filter(Boolean) // Filter out empty strings
      .join("\n")}\n` +
    `Event: ${formName}
`;

  const phoneNumbers =
    // Remove repetition
    Array.from(new Set([...THE_CASELY_GROUP_PHONE_NUMBER_LIST]));

  for (const phoneNumber of phoneNumbers) {
    await twilioClient.messages
      .create({
        body: TEXT_MESSAGE,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: phoneNumber,
      })
      .then((message: any) => console.log(message.sid));
  }
}

export default Twilio;
