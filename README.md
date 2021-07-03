# FS-June-3
Hi guys, welcome to the Github repo for our full stack team 3. This repo is just for you to practice using git either individually or collaboratively.

If you want to develop a theme, **DO NOT CLONE FROM THIS REPO!** You should be creating a theme using your own discourse_theme_CLI. 

First, create a branch with your name in this repo. When you want to push your theme, you want to `git add remote` this repo to your local folder first, and then later on you can just commit and push to your branch.

THE FILES WE NEED ARE:
```
#here we import both themes so the toogle will select
common/common.scss

#here will be the toggle button
common/head_tag.html

#dark.scss would import all the dark-[name-of-part].scss files
scss/dark.scss
scss/dark-button.scss
scss/dark-background.scss
scss/dark-text.scss
scss/dark-header.scss
scss/dark-footer.scss
scss/dark-dropdown.scss
scss/dark-input-field.scss

#light.scss would import all the light-[name-of-part].scss files
scss/light.scss
scss/light-button.scss
scss/light-background.scss
scss/light-text.scss
scss/light-header.scss
scss/light-footer.scss
scss/light-dropdown.scss
scss/light-input-field.scss
```
This is just a basic structure and feel free to add to this. With this division we will not have conflicts with files, because you won't really work on the same file. Please divide the work within your group
