# FindingJob Portfolio Demo

以 AI 協作建立的求職研究流程之**安全縮小展示版**。原工作區涉及私人履歷與郵件，本 repository 不包含那些資料，也不是原系統的完整開源備份。

## 可以試什麼

- 使用原專案的 JavaScript 職稱篩選器，區分初步候選與明確資深／管理職。
- 以虛構公司與職缺展示去重、分類和待查狀態。
- 閱讀 [案例說明](CASE-STUDY.md)，了解原專案的來源查核、履歷版本、審閱閘門與 Dashboard 架構。

此展示版無網路呼叫、無寄信、無真實求職資料，不需 API key。

## 快速開始

安裝 Node.js 20 以上，在本目錄執行：

```sh
npm run demo
npm test
```

沒有第三方依賴，不需 npm install。輸出為 JSON；Remote 只是原始地區描述，不代表確認可在台灣工作。

## 技術與 Skill

展示版：Node.js、JavaScript ESM、JSON、node:test。原專案另外使用 Python PDF 工具、React/Vite Dashboard 與自訂 taiwan-remote-job-search Skill；**那些模組未包含在此 repository**。未複製第三方 Data App 共用框架。

## AI 分工

我負責需求、偏好、流程拆解與使用回饋，Codex 協助實作程式與文件。這是 AI 協作作品，不宣稱獨立手寫全部程式。這個展示版是在整理作品集時新增，用來安全說明原有設計，不是過去已上線的服務。

## 限制

分類是規則式初篩，並不證明職缺開放、學歷符合、簽證可行或工作適合。範例全部虛構，沒有求職成效承諾。未部署服務、未啟用自動投遞。
