# OrientAI Governance Prototype

企業級治理與權限管理 Prototype，包含角色、群組、帳號、團隊、知識庫發布與審核情境。

## 本機預覽

在此資料夾執行：

```powershell
node server.js
```

接著開啟 `http://localhost:8080`。

## 主要檔案

- `enterprise-permission-prototype-v3.html`：互動式 Prototype
- `permissions.csv`：功能權限分類與細項來源
- `roles.json`：角色與功能權限設定
- `group-roles.json`：群組與角色關係
- `accounts.json`：帳號與群組關係
- `teams.json`：團隊與知識庫展示資料
- `server.js`：本機預覽伺服器
