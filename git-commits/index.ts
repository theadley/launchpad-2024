import type { Branch } from "./models/branch";
import type { CommitRoot } from "./models/commit";

// const commitsAllRes = await fetch('https://api.github.com/repos/Hugovs2000/React-Project/commits', {headers: [["Authorization", ""]]});
// const commitsAll = await commitsAllRes.json() as CommitRoot[];

const commitsFile = Bun.file("commits.json");
const commitsAll = await commitsFile.json() as CommitRoot[];

// const branchesRes = await fetch('https://api.github.com/repos/Hugovs2000/React-Project/branches', {headers: [["Authorization", ""]]});
// const branches = await branchesRes.json() as Branch[];

const branchesFile = Bun.file("branches.json");
const branches = await branchesFile.json() as Branch[];

for (const branch of branches) {
    // const branchCommitsRes = await fetch('https://api.github.com/repos/Hugovs2000/React-Project/commits?per_page=100&sha=' + branch.commit.sha, {headers: [["Authorization", ""]]});
    // const branchCommits = await branchCommitsRes.json() as CommitRoot[];

    const branchCommitsFile = Bun.file(`branch-commits-${branch.name}.json`);
    const branchCommits = await branchCommitsFile.json() as CommitRoot[];

    for (const commit of commitsAll) {
        const matchedCommit = branchCommits.find(commitRoot => commitRoot.sha === commit.sha);
        if (matchedCommit) {
            if (commit.commit.branches) {
                commit.commit.branches.push(branch.name);
            } else {
                commit.commit.branches = [branch.name];
            }
        }
    }
}

const branchNames = branches.map(branch => branch.name);
console.log('|SHA\t\t\t\t\t\t|Date\t\t\t|' + branchNames.join(' |') + ' |Message');

for (const commit of commitsAll) {
    let outputString = `|${commit.sha}\t|${commit.commit.author.date}\t|`;
    for (const branch of branchNames) {
        if (commit.commit.branches?.includes(branch)) {
            outputString += 'X' + ' '.repeat(branch.length) + '|';
        } else {
            outputString += ' '.repeat(branch.length) + ' |';
        }
    }
    outputString += commit.commit.message.split('\n')[0];

    console.log(outputString);
}

