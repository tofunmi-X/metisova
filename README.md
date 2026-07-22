Metisova — Company Website

A single-file, self-contained website for Metisova (index.html). No build step, no dependencies to install — it's ready to host as-is.

How to put this on GitHub and get it live on metisova.com
Create the repo
Go to github.com → New repository → name it e.g. metisova-site (public).
Don't initialize with a README (you already have one here).
Upload the file
Easiest way: on the new repo's page, click "uploading an existing file," drag in index.html and README.md, then commit.
Or, from a terminal, from inside this folder:
     git init
     git add .
     git commit -m "Metisova site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/metisova-site.git
     git push -u origin main
Turn on GitHub Pages
In the repo: Settings → Pages → under "Build and deployment," set Source to "Deploy from a branch," Branch to main / root.
Save. GitHub gives you a live link like https://YOUR-USERNAME.github.io/metisova-site/ within a minute or two.
Point metisova.com at it
In the repo's Pages settings, there's a "Custom domain" field — enter metisova.com and save. This creates a CNAME file in your repo automatically.
At your domain registrar (wherever you bought metisova.com), add these DNS records:
Four A records for the root domain pointing to GitHub's IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
A CNAME record for www pointing to YOUR-USERNAME.github.io
DNS changes can take anywhere from a few minutes to a few hours to propagate.

That's the whole path from file to live site on your own domain, for free.

Editing the content later

Everything — copy, colors, layout — lives in the one index.html file. Text content is in plain HTML in the <body>; colors and spacing are set as CSS variables at the top of the <style> block (:root { ... }) if you want to adjust the palette.
