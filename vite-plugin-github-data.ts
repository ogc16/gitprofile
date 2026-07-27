import type { Plugin, IndexHtmlTransformResult } from 'vite';
import type CONFIG from './gitprofile.config';

type ConfigType = typeof CONFIG;

interface GitHubData {
  profile: {
    avatar_url: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    public_repos: number;
  } | null;
  projects: Array<{
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
  }>;
}

export default function githubDataPlugin(): Plugin {
  let githubData: GitHubData = { profile: null, projects: [] };

  return {
    name: 'vite-plugin-github-data',

    async config() {
      const config: ConfigType = (await import('./gitprofile.config')).default;
      const username = config.github?.username;

      if (!username) {
        console.warn('[github-data] No GitHub username in config, skipping.');
        return;
      }

      const token = process.env.VITE_GITHUB_TOKEN || process.env.GITHUB_TOKEN;
      const headers: Record<string, string> = {
        'Content-Type': 'application/vnd.github.v3+json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      try {
        const profileRes = await fetch(
          `https://api.github.com/users/${username}`,
          { headers },
        );

        if (!profileRes.ok) {
          console.warn(
            `[github-data] GitHub profile fetch failed: ${profileRes.status}`,
          );
        } else {
          const profileData = await profileRes.json();
          githubData.profile = {
            avatar_url: profileData.avatar_url,
            name: profileData.name || ' ',
            bio: profileData.bio || '',
            location: profileData.location || '',
            company: profileData.company || '',
            public_repos: profileData.public_repos,
          };

          if (config.projects?.github?.display) {
            const ghConfig = config.projects.github;
            let url: string;

            if (ghConfig.mode === 'automatic') {
              const excludeRepo =
                ghConfig.automatic?.exclude?.projects
                  ?.map((p: string) => `+-repo:${p}`)
                  .join('') || '';
              const sortBy = ghConfig.automatic?.sortBy || 'stars';
              const limit = ghConfig.automatic?.limit || 8;
              const forks = ghConfig.automatic?.exclude?.forks;
              const query = `user:${username}+fork:${!forks}${excludeRepo}`;
              url = `https://api.github.com/search/repositories?q=${query}&sort=${sortBy}&per_page=${limit}&type=Repositories`;
            } else {
              const repos =
                ghConfig.manual?.projects
                  ?.map((p: string) => `+repo:${p}`)
                  .join('') || '';
              url = `https://api.github.com/search/repositories?q=${repos}+fork:true&type=Repositories`;
            }

            const reposRes = await fetch(url, { headers });

            if (reposRes.ok) {
              const reposData = await reposRes.json();
              githubData.projects = reposData.items || [];
            } else {
              console.warn(
                `[github-data] GitHub repos fetch failed: ${reposRes.status}`,
              );
            }
          }
        }
      } catch (err) {
        console.warn('[github-data] Failed to fetch GitHub data:', err);
      }
    },

    transformIndexHtml(html): IndexHtmlTransformResult {
      const script = `<script>window.__GITHUB_DATA__=${JSON.stringify(githubData)};</script>`;
      return html.replace('</head>', `${script}</head>`);
    },
  };
}
