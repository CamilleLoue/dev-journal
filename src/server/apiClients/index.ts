import { prisma } from "../db";

export * from "./githubClient";
export * from "./openAIClient";

async function doTheThing() {
  await prisma.commit.create({
    data: {
      author: "Foo",
      hash: "12312312",
      owner: "Bar",
      repo: "dev_journal",
    },
    select: {
      author: true,
    },
  });
}
