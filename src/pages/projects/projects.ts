interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
}

async function fetchGitHubProjects(username: string, page: number = 1, perPage: number = 16): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&page=${page}&per_page=${perPage}&selector=name,description,html_url`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data: GitHubRepo[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        return [];
    }
}

export const projects = (async () => {
    let currentPage = 1;
    let loading = false;
    const githubProjects = await fetchGitHubProjects( "pphatdev", currentPage );

    const renderProjects = (projects: GitHubRepo[]) => `
        <ul id="projects-list" class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
            ${projects.map(project => `
                <li class="bg-foreground/5 rounded-lg p-5 relative min-h-40">
                    <h3 class="text-foreground font-bold text-xl">${project.name}</h3>
                    <p class="text-foreground/80 line-clamp-5 leading-7">${project.description || 'No description available'}</p>
                    <a href="${project.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
                </li>
            `).join('')}
        </ul>
    `;

    setTimeout(() => {
        window.addEventListener('scroll', async () => {
            if (loading) return;
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                loading = true;
                currentPage++;
                const newProjects = await fetchGitHubProjects("pphatdev", currentPage);
                const projectsList = document.getElementById('projects-list');
                if (projectsList && newProjects.length > 0) {
                    projectsList.innerHTML += newProjects.map(
                        project => `
                        <li class="bg-foreground/5 rounded-lg p-5 relative min-h-40">
                            <h3 class="text-foreground font-bold text-xl">${project.name}</h3>
                            <p class="text-foreground/80">${project.description || 'No description available'}</p>
                            <a href="${project.html_url}" class="absolute inset-0" target="_blank"><span class="sr-only">View on GitHub</span></a>
                        </li>
                    `).join('');
                }
                loading = false;
            }
        });
    }, 100);

    return renderProjects(githubProjects);
})();
