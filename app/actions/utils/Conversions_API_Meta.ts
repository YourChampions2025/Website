import { type IContactUsForm } from "../../../components/globals/forms/contact-us-form/contact-us-form";
import { type ICareersForm } from "../../../components/screens/careers/side-content-careers/side-content-careers";
import { type IClientInfo } from "../../../utils/useGetClientInfo";

const hash = require("hash.js");

export default async function Conversions_API_Meta(
  data: (IContactUsForm | ICareersForm) & IClientInfo,
  event_name = "MHTL Form Submission"
) {
  const event_params = {
    event_id: data.eventId,
    event_time: Math.round(Date.now() / 1000),
    event_name: event_name,
    event_source_url: data.locationHref,
    action_source: "website",
  };

  const user_data = {
    client_ip_address: data.ip,
    client_user_agent: data.userAgent,
    fn: [hash.sha256(data.name.split(" ")[0]).digest("hex")],
    ln: [hash.sha256(data.name.split(" ")[1]).digest("hex")],
    ph: [hash.sha256().update(data.phone).digest("hex")],
    em: [hash.sha256().update(data.email).digest("hex")],
  };

  const API_VERSION = "v17.0";
  const DATASET_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const TOKEN = process.env.META_CONVERSIONS_API;
  const event_data = { data: [{ ...event_params, user_data }] };

  const url = `https://graph.facebook.com/${API_VERSION}/${DATASET_ID}/events?access_token=${TOKEN}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event_data),
  });

  const json = await response.json();
  console.log(json);
}
