# sentencebuilder

英語造句互動小工具（靜態單頁應用）。

檔案結構重點：

 - `index.html`：主頁面（已改為引用外部 `config.js` 與 `styles.css`）。
 - `config.js`：抽出的設定（`grammarRules`、`levelConfig`、`listeningQuestions`）。
 - `styles.css`：抽出的 CSS 樣式。

如何本地查看：

1. 使用靜態伺服器（建議）：

```bash
# 從專案根目錄執行
npm install -g http-server  # 如未安裝，可用 npx
npx http-server -c-1 . -p 8080
# 然後開啟 http://localhost:8080/index.html
```

2. 或直接在瀏覽器中打開 `index.html`（某些瀏覽器在 local file 上可能有限制語音合成等功能）。

如需我幫你把檔名 `index.html.html` 改成 `index.html`（較慣用），或把專案改為更完整的 Node 開發環境（加入 dev server），請告訴我。
