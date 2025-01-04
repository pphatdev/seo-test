import os

def replace_assets(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    content = content.replace('/assets', './assets')

    with open(file_path, 'w') as file:
        file.write(content)

if __name__ == "__main__":
    file_path = 'index.html'  # Update this path if needed
    if os.path.exists(file_path):
        replace_assets(file_path)
        print(f'Replaced "/assets" with "./assets" in {file_path}')
    else:
        print(f'File {file_path} does not exist')