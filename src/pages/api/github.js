/**
 * Path: /pages/api/github.js
 * Created: 21.12.2021
 * Dev by Gabriel.
 **/

const { Octokit } = require("@octokit/rest");

const github_token = "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";

export default async (req, res) => {
  const octokit = new Octokit({
    auth: github_token,
  });

  const followers = await octokit.request(
    "/users/gabrielvfonseca/followers?per_page=100"
  );

  const followerCount = followers.data.length;

  const stars = await octokit.request("/users/gabrielvfonseca/repos");

  const startsCount = stars.data
    .filter((repo) => !repo.fork)
    .reduce((acc, item) => {
      return acc + item.stargazers_count;
    }, 0);

  const reposStarred = await octokit.request("/users/gabrielvfonseca/starred");
  const starredCount = reposStarred.data.length;

  return res.status(200).json({
    stars: startsCount,
    followers: followerCount,
    starred: startsCount,
  });
};
