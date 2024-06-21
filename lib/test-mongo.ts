
import { testMongoDBConnection } from '@/lib/mongodb';

async function main() {
  await testMongoDBConnection();
}

main().catch(console.error);
