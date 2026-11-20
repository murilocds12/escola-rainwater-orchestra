<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Site content lives in the single self-contained file `public/site-chuva.html`; its photos and video are real files under `public/assets/` referenced by root-relative paths (`/assets/...`), because the user asked for the media to sit in the public folder rather than on the CDN.
