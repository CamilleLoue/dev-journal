// Write a CommitSummary data type

const responseSchema = z.object({});

function summariseCommit(commit: Commit): CommitSummary {
  // Call OpenAI API to summarise the commit
  // const response = fetch()
  // const parsed = JSON.parse(response.body)
  // parse response with zod schema
  // const summary = commitSummarySchema.parse(parsed)
  // Convert response from OpenAI to our CommitSummary
}

// Write tests for each function in the OpenAIClient
