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

- Keep original portfolio media as real files in `src/assets/` when each file is at or under the 10 MB repo commit limit; only files over 10 MB stay as CDN `.asset.json` pointers. Keep the ordered presentation manifest in a browser-safe data module.
- Render the portfolio as one continuous page with in-page section navigation; the source experience is a single scrolling portfolio.
- Keep visual roles and responsive layouts in the global semantic design system; this makes presentation-only updates consistent.
