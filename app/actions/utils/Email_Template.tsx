import React from "react";

import {
  Html,
  Head,
  Tailwind,
  Container,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import { IContactUsForm } from "../../../components/globals/forms/contact-us-form/contact-us-form";
import { ICareersForm } from "../../../components/screens/careers/side-content-careers/side-content-careers";
import { IClientInfo } from "../../../utils/useGetClientInfo";

const Email_Template = (
  data: (Partial<IContactUsForm> & Partial<ICareersForm>) & {
    score: number;
  } & IClientInfo
) => {
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

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Fischer and Redavid Trial Lawyers</title>
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#000",
              },
            },
          },
        }}
      >
        <Container className="text-center text-black border border-solid border-slate-200 mt-10 shadow-sm max-w-[600px] p-5 bg-white rounded-md">
          <Img
            className="block mx-auto mt-5 max-w-[250px] max-h-[100px] object-contain p-3 bg-slate-800 rounded-lg"
            src="https://cg-fischer-redavid.s3.us-east-1.amazonaws.com/fischer+logo.png"
            alt="Fischer and Redavid Trial Lawyers"
          />
          <Hr className="my-3 max-w-[70%] mx-auto" />
          <Text className="font-bold mt-0 mb-1">
            Fischer and Redavid Trial Lawyers Lead
          </Text>

          <Hr className="my-3 max-w-[70%] mx-auto" />

          {Object.keys(data).map((_keyName, i) => {
            const keyName = _keyName as keyof typeof DATA_LABEL_MAP;

            // Remove types I don't want in the map
            if (!(keyName in DATA_LABEL_MAP)) return;

            return (
              <Text
                key={i}
                className={`${
                  i % 2 == 0 ? "bg-gray-200" : "bg-gray-50"
                } font-bold text-gray-600 mt-0 mb-1 text-left py-2.5 px-3 w-[90%] mx-auto`}
              >
                {DATA_LABEL_MAP[keyName]}:{" "}
                {data[keyName] ? data[keyName].toString() : "N/A"}
              </Text>
            );
          })}
        </Container>
      </Tailwind>
    </Html>
  );
};

export default Email_Template;
