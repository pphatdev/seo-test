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

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        return query ? data.items : data;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

export const projects = (async () => {
    let currentPage = 1;
    let loading = false;
    let searchTimeout: NodeJS.Timeout;
    const githubProjects = await fetchGitHubProjects("pphatdev", currentPage);

    const renderProjects = (projects: GitHubRepo[]) => `
        <div class="space-y-5">
            <ul id="projects-list" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                ${projects.map(project => `
                    <li class="bg-foreground/5 rounded-lg p-5 relative min-h-40">
                        <h3 class="text-foreground font-bold text-xl">${project.name}</h3>
                        <p class="text-foreground/80 line-clamp-5 leading-7">${project.description || 'No description available'}</p>
                        <a href="${project.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    setTimeout(() => {
        // Add search functionality
        const searchInput = document.getElementById('project-search') as HTMLInputElement;
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                // Clear existing timeout
                if (searchTimeout) {
                    clearTimeout(searchTimeout);
                }

                // Set new timeout to debounce API calls
                searchTimeout = setTimeout(async () => {
                    const searchTerm = (e.target as HTMLInputElement).value.trim();
                    const projectsList = document.getElementById('projects-list');

                    if (projectsList) {
                        // Reset page when searching
                        currentPage = 1;

                        // Fetch searched projects
                        const searchedProjects = await fetchGitHubProjects("pphatdev", currentPage, 16, searchTerm);

                        projectsList.innerHTML = searchedProjects.map(project => `
                            <li class="bg-foreground/5 rounded-lg p-5 relative min-h-40">
                                <h3 class="text-foreground font-bold text-xl">${project.name}</h3>
                                <p class="text-foreground/80 line-clamp-5 leading-7">${project.description || 'No description available'}</p>
                                <a href="${project.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
                            </li>
                        `).join('');
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
                const searchTerm = (document.getElementById('project-search') as HTMLInputElement)?.value.trim();
                const newProjects = await fetchGitHubProjects("pphatdev", currentPage, 16, searchTerm);

                if (newProjects.length > 0) {
                    const projectsList = document.getElementById('projects-list');
                    if (projectsList) {
                        projectsList.innerHTML += newProjects.map(project => `
                            <li class="bg-foreground/5 rounded-lg p-5 relative min-h-40">
                                <h3 class="text-foreground font-bold text-xl">${project.name}</h3>
                                <p class="text-foreground/80 line-clamp-5 leading-7">${project.description || 'No description available'}</p>
                                <a href="${project.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
                            </li>
                        `).join('');
                    }
                }
                loading = false;
            }
        });
    }, 100);

    return renderProjects(githubProjects);
})();
