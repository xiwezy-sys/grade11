# Grade 11 Writing and APUSH Summer Studio

This is a static HTML/CSS/JavaScript learning site for summer writing practice.

## Files

- `index.html` - the website entry page
- `styles.css` - visual styling
- `app.js` - course content, saved progress, export/import progress
- `.nojekyll` - tells GitHub Pages to serve the files as a plain static site

## Deploy to GitHub Pages

1. Create a new public GitHub repository.
2. Upload these files to the root of the repository:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - `README.md`
3. Go to the repository on GitHub.
4. Open **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose the `main` branch and the `/root` folder.
8. Save.

After GitHub finishes publishing, the site will be available at:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Progress Sharing

Student work is saved in the browser's local storage. To share work:

1. The student clicks **Export Progress**.
2. The student sends the downloaded `.json` file to a parent.
3. The parent opens the site and clicks **Import Progress**.
