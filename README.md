
# Monorepo project for a Media App (Name comming soon)

This project was created to learn react native, but i went way beyond:
- learned react native
- structured project as a mono repo
- have shared packages for consistency and DRY

It was originally inspired by [tutorial](https://www.youtube.com/watch?v=ZBCUegTZF7M&t=86s)

<!-- The changes from the original project have been documented [here](./markdown//changes.md) -->

## Third Party Services
Services have been implemeted and accounts are required for the project. The following services are used:
 - firebase

## Project Structure

This project uses a monorepo setup with multiple workspaces and shared directories. Below is an overview of the project's directory structure:
'''
- **`core/`**: Contains shared functionality and configuration files used across all apps.
- **`api/`**: Contains API-related logic and hooks.
- **`server/`**: Contains server-side code and logic.
- **`mobile/`**: Contains the mobile application code (React Native).
- **`client/`**: Contains the web application code.
- **`project/`**: Contains additional project files like PDFs and design mockups.
- **`markdown/`**: Contains Markdown files for project documentation.
- **`scripts/`**: Contains utility scripts for project setup and maintenance.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: The root package configuration file.
- **`README.md`**: The main README file for the project.
'''

This simplified overview should help others understand the general structure of your project without delving into the specifics of each directory.



## Project Start

for instruction on how to setup and start project start [here](./markdown//serverStart.md)
