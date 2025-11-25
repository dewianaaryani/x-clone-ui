import { prisma } from "./lib/prisma";

// Your actual application code here
async function main() {
  // Example: Create a user
  const user = await prisma.user.create({
    data: {
      id: "user1",
      email: "test@example.com",
      username: "testuser"
    }
  });
  console.log("Created user:", user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());