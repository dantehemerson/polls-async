import { RedisClientType, createClient } from 'redis';

let client: RedisClientType;

export async function createRedisClient(url: string): Promise<RedisClientType> {
  try {
    if (client?.isOpen || client?.isReady) {
      return client;
    }

    client = createClient({
      url,
    });

    await client.connect();

    return client;
  } catch (error) {
    console.log('Error connecting to Redis', error);
  }
}
