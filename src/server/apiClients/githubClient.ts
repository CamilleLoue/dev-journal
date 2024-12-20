import { Octokit } from "octokit";

interface Commit {
  sha: string;
  message: string;
  date: Date | null;
  url: string;
}

export async function getCommits(
  repoOwner: string,
  repoName: string,
  username: string,
): Promise<Commit[]> {
  const response = await Octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: repoOwner,
    repo: repoName,
    author: username,
    per_page: 100,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return {
    author: response.authorName,
    diff: response.diff,
  };
}

// TODO: Implement the Github API client and the OpenAI API client
// add tests for each API function
// test it yourself
