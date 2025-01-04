interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
}

async function fetchGitHubProjects(username: string, page: number = 1, perPage: number = 16, query?: string): Promise<GitHubRepo[]> {
    try {
        let url: string;
        if (query) {
            url = `https://api.github.com/search/repositories?q=${query}+user:${username}&page=${page}&per_page=${perPage}`;
        } else {
            url = `https://api.github.com/users/${username}/repos?sort=updated&page=${page}&per_page=${perPage}`;
        }

        const response = await fetch(url, {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN ?? ""}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        return query ? data.items : data;
    } catch (error) {
        console.error('Error fetching GitHub blogs:', error);
        return [];
    }
}

const list = (blogs: GitHubRepo[]) => blogs.map(
    Blog => (`
        <article class="bg-foreground/5 rounded-lg p-5 relative min-h-32 sm:min-h-40">
            <h3 class="text-foreground font-medium sm:font-bold line-clamp-2 sm:text-xl">${Blog.name}</h3>
            <p class="text-foreground/80 line-clamp-3 sm:line-clamp-5 text-sm sm:text-base leading-5 sm:leading-7">${Blog.description || 'No description available'}</p>
            <a href="${Blog.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
        </article>`
    )
).join('')


export const blogs = (async () => {
    let currentPage = 1;
    let loading = false;
    let searchTimeout: NodeJS.Timeout;
    const githubProjects = await fetchGitHubProjects("pphatdev", currentPage);

    const renderProjects = (blogs: GitHubRepo[]) => `
        <section class="space-y-5 mt-5">
            <div id="blogs-list" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                ${list(blogs)}
            </div>
        </section>
    `;

    setTimeout(() => {
        // Add search functionality
        const searchInput = document.getElementById('blog-search') as HTMLInputElement;
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                // Clear existing timeout
                if (searchTimeout) {
                    clearTimeout(searchTimeout);
                }

                // Set new timeout to debounce API calls
                searchTimeout = setTimeout(async () => {
                    const searchTerm = (e.target as HTMLInputElement).value.trim();
                    const projectsList = document.getElementById('blogs-list');

                    if (projectsList) {
                        // Reset page when searching
                        currentPage = 1;

                        // Fetch searched blogs
                        const searchedProjects = await fetchGitHubProjects("pphatdev", currentPage, 16, searchTerm);

                        projectsList.innerHTML = list(searchedProjects);
                    }
                }, 300);
            });
        }

        // Infinite scroll handler
        window.addEventListener('scroll', async () => {
            if (loading) return;
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                loading = true;
                currentPage++;
                const searchTerm = (document.getElementById('blog-search') as HTMLInputElement)?.value.trim();
                const newProjects = await fetchGitHubProjects("pphatdev", currentPage, 16, searchTerm);

                if (newProjects.length > 0) {
                    const projectsList = document.getElementById('blogs-list');
                    if (projectsList) {
                        projectsList.innerHTML += list(newProjects);
                    }
                }
                loading = false;
            }
        });
    }, 100);

    return renderProjects(githubProjects);
})();
