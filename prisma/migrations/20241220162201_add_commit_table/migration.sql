-- CreateTable
CREATE TABLE "commit" (
    "hash" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "repo" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "commit_pkey" PRIMARY KEY ("hash")
);
