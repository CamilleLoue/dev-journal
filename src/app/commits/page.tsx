import { CommitsList } from "~/components/CommitsList";
import { api } from "~/trpc/server";

export default async function CommitsPage() {
  const commits = await api.github.getMyCommits({
    username: "CamilleLoue",
    repoOwner: "Multiverse-io",
    repoName: "account_hub",
  });

  return <CommitsList commits={commits} />;
}
