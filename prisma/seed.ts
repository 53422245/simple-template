import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // your seed code start

  // your seed code end
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
