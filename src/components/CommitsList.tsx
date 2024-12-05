"use client";

type Commit = {
  sha: string;
  message: string;
  date: string | null;
  url: string;
};

interface CommitsListProps {
  commits: Commit[];
}

export function CommitsList({ commits }: CommitsListProps) {
  return <pre>{JSON.stringify(commits, null, 2)}</pre>;
}
