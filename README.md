# 五專資工三甲-班級網頁
#### 請先下載MarkDown流程圖預覽插件 [點擊瀏覽套件](vscode:extension/bierner.markdown-mermaid)
## 網站建構流程圖
```mermaid
graph LR;
    goble-->登入系統-->連結google帳號;
    index-->關於我們;
    index-->訂餐系統;
    index-->學習資訊;

    關於我們-->成員介紹;
    成員介紹-->Ging_Kai-->留言;
    成員介紹-->Sheng_Yun-->留言;
    成員介紹-->Zequlard-->留言;
    留言-->網站製作動機;
    留言-->網站製作目的;
    留言-->網站製作過程;

    訂餐系統-->選擇餐廳-->發起訂單;
    訂餐系統-->新增餐廳-->發起訂單;
    訂餐系統-->歷史紀錄;

    學習資訊-->學科支援;
    學科支援-->各科學習筆記;
    學科支援-->學習計劃;
    學習計劃-->定期線上課程公告;
    學習計劃-->學習互助社群;
    學習互助社群-->發起討論;
    學習互助社群-->論壇紀錄;

    學習資訊-->重要訊息公告;
    重要訊息公告-->課堂作業;
    重要訊息公告-->考試提醒;
    重要訊息公告-->其他重要事件;

```