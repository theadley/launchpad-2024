import type { Branch } from "./models/branch";
import type { CommitRoot } from "./models/commit";

const branchesFile = Bun.file("branches.json");
const branches = await branchesFile.json() as Branch[];

const branchToFetch = 'read-manga-feature';
const branchSHA = branches.find(b => b.name === branchToFetch)?.commit.sha;

if (branchSHA) {
    const branchCommitsRes = await fetch('https://api.github.com/repos/Hugovs2000/React-Project/commits?per_page=100&sha=' + branchSHA, { headers: [["Authorization", ""]] });
    const branchCommits = await branchCommitsRes.json() as CommitRoot[];

    await Bun.write(`branch-commits-${branchToFetch}.json`, JSON.stringify(branchCommits));
}
