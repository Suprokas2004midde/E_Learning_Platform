# AI Agent Rules

1. **No Auto-Commit or Push**: Never run `git commit` or `git push` unless the user explicitly instructs you to do so.
2. **Branch Discipline**: Stay on the `main` branch. Do not create separate branches unless explicitly requested.
3. **Environment Files**: `.env` files are intentionally **not** in `.gitignore` and **must be pushed** to the remote repo for team collaboration. Do not add `.env` to `.gitignore`.
4. **Mandatory Tracking Update**: After **every** job/task (adding, editing, or removing files, folders, or features), you **must** update `PROJECT_TRACKING.md` so collaborators can follow all changes in the codebase.

