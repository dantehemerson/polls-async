import { connect, disconnect, connection } from 'mongoose';

export async function createMongoClient(uri: string) {
  try {
    if (connection.readyState === 1) {
      console.log('MongoDB is already connected');
      return connection;
    }

    const URI = uri || process.env.MONGODB_URI;

    if (!URI) {
      throw new Error('❌ Mongo connection string was not found in env vars');
    }

    console.log(
      `🔗 Connecting to MongoDB: ${URI.replace(new RegExp('//.*@'), '//')}`,
    );

    await connect(URI);

    process.on('exit', async () => {
      console.log(
        `🔗 Disconnecting to MongoDB: ${URI.replace(
          new RegExp('//.*@'),
          '//',
        )}`,
      );
      await disconnect();
    });

    return connection;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
