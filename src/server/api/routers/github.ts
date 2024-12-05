import { z } from "zod";
import { Octokit } from "octokit";
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

      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner: repoOwner,
          repo: repoName,
          author: username,
          per_page: 100,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        },
      );

      return response.data.map((commit) => ({
        sha: commit.sha,
        message: commit.commit.message,
        date: commit.commit.author?.date ?? null,
        url: commit.html_url,
      }));
    }),
});
