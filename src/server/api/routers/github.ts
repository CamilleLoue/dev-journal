import { z } from "zod";
import { Octokit } from "octokit";
import { getCommits } from "../../apiClients/githubClient";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";

const octokit = new Octokit({
  auth: env.GITHUB_TOKEN,
});

export const githubRouter = createTRPCRouter({
  getMyCommits: publicProcedure
    .input(
      z.object({
        username: z.string(),
        repoOwner: z.string(),
        repoName: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const { username, repoOwner, repoName } = input;

      const commits = await getCommits(username, repoOwner, repoName);

      console.log(commits);

      return commits;
    }),
});
