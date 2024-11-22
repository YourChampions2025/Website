import { MongoClient, ServerApiVersion } from "mongodb";
import { type IMiniContactUsFormData } from "../../../components/global/MiniContactUsForm";
import { type IYourRightsFormData } from "../../../components/global/YourRightsGlobalComponent";
import { type IYourRightsHomeFormData } from "../../../components/Home/YourRightsHomeComponent";
import { type IClientInfo } from "../../../utils/useGetClientInfo";

const uri: any = process.env.MONGODB_URI;

async function Mongo_DB(
  data: (Partial<IMiniContactUsFormData> &
    Partial<IYourRightsFormData> &
    Partial<IYourRightsHomeFormData>) &
    IClientInfo
) {
  if (!uri) throw new Error(`No MongoDB URI setup for this project, aborting.`);

  const mongoClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await mongoClient.connect();

  const database = mongoClient.db("bush-and-bush-law-group");
  const collection = database.collection("form-submissions");
  const result = await collection.insertOne(data);

  await mongoClient.close();

  console.log(result, "Mongo DB Result");
}

export default Mongo_DB;
