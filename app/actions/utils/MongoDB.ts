import { MongoClient, ServerApiVersion } from 'mongodb';
import { type IClientInfo } from '../../../utils/useGetClientInfo';
import { type IContactUsForm } from '../../../components/globals/forms/contact-us-form/contact-us-form';
import { type ICareersForm } from '../../../components/screens/careers/side-content-careers/side-content-careers';

const uri: any = process.env.MONGODB_URI;

async function Mongo_DB(
  data: (Partial<IContactUsForm> & Partial<ICareersForm>) & {
    score: number;
  } & IClientInfo
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

  const database = mongoClient.db('fischer-redavid');
  const collection = database.collection('form-submissions');
  const result = await collection.insertOne(data);

  await mongoClient.close();

  console.log(result, 'Mongo DB Result');
}

export default Mongo_DB;
