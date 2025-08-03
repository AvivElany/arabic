
# 🟢 Arabic Learning Project – מערכת ללימוד ערבית ללוחמים

מערכת אינטראקטיבית ללימוד ערבית בניב פלסטיני, שפותחה במיוחד עבור לוחמים בצה״ל בשטח.  
המערכת כוללת שיחון מבצעי, טבלאות אוצר מילים, תעתיק עם ניקוד, תרגום לעברית ואנגלית, דפי תרגול לפי מצבים מבצעיים, וכן ממשק משתמש רספונסיבי ונוח גם לנייד.

---

## 🎯 מטרות הפרויקט

- לאפשר ללוחמים ללמוד ולזכור משפטים שימושיים וקריטיים בשטח.
- להציג אוצר מילים לפי קטגוריות מבצעיות (מעצר, תשאול, מחסום ועוד).
- לאפשר חיפוש חכם של מילים וביטויים.
- לחזק את החיבור בין השפה והפעולה המבצעית.

---

## 🧠 פיצ'רים עיקריים

- 🔤 טבלאות אותיות בערבית עם תעתיק ודוגמאות.
- 📚 מילים מחולקות לפי קטגוריות (גוף האדם, תכולת בית, מקצועות, רגשות, שמות שאלה ועוד).
- 🔎 חיפוש דינאמי וחכם בכל המילים.
- 🧾 עמודים ייעודיים למצבים מבצעיים כמו תשאול, מעצר, מחסום, מפגש עם חשוד ועוד.
- 🧠 עמוד "חשיבות לימוד ערבית" ו"ניבים ודיאלקטים" להסבר תרבותי ומקצועי.

---

## 🛠️ טכנולוגיות בשימוש

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- Vercel – Deploy
- Hooks, Dynamic Routing, Code Splitting

---

## 🗂️ מבנה הפרויקט

```
Arabic/
├── public/                # קבצים סטטיים (תמונות, רקעים, אייקונים)
├── src/
│   ├── components/        # קומפוננטות עיצוביות ופונקציונליות (Hero, Footer, Tables)
│   ├── pages/             # עמודים לפי נושאים מבצעיים (Checkpost, Interrogation וכו')
│   ├── data/              # קבצי אוצר מילים בפורמט JSON
│   ├── hooks/             # hooks מותאמים אישית
│   ├── App.tsx            # רכיב ראשי כולל ניתוב
│   └── main.tsx           # כניסת האפליקציה
├── package.json           # תלותים והרצת סקריפטים
├── vite.config.ts         # קונפיגורציה ל־Vite
├── tsconfig.json          # הגדרות TypeScript
└── README.md              # קובץ תיעוד ראשי
```

---

## 📦 דוגמת קוד – מבנה של מילה באוצר מילים

```ts
{
  hebrew: "מיטה",
  taatik: "תַּכְתֶה",
  arabic: "تخت",
  english: "bed"
}
```

---

## 🔍 דוגמת קוד – שימוש ב־useSearchFilter

```tsx
const { filteredWords, handleSearch } = useSearchFilter(words);

return (
  <>
    <input type="text" onChange={handleSearch} placeholder="חפש מילה..." />
    <WordTable words={filteredWords} />
  </>
);
```

---


## 🌐 קישורים חשובים

- 🔗 רפוזיטורי: [https://github.com/AvivElany/arabic](https://github.com/AvivElany/arabic)
- 🌍 אתר חי: [https://arabic-plum.vercel.app](https://arabic-plum.vercel.app)
- 👨‍💻 פורטפוליו: [https://portfolio-avivelanys.vercel.app](https://portfolio-avivelanys.vercel.app)

---

## 🖼️ תמונות מסך – דוגמאות (להוספה)

```md
![נוהל מעצר חשוד](https://arabic-plum.vercel.app/suspect)
![עמוד אוצר מילים](https://arabic-plum.vercel.app/vocabulary)
![עמוד אלפבית ערבי](https://arabic-plum.vercel.app/arabic-alphabet)
```

---

## 🙋‍♂️ מידע נוסף

- כל עמוד באתר מבוסס על נושא מבצעי (כגון מעצר, מחסום, תשאול).
- האתר כולל מרכיבים עיצוביים מונחי Tailwind, כולל גריד רספונסיבי והתאמה לנייד.
- ה־UX נבנה מתוך הבנה של השטח וצרכי הלוחמים.

---

## 🧑‍💻 פותח ע״י

**אביב אילני**  
מפתח פולסטאק | React | Node.js | MongoDB  
📧 avivelany@gmail.com  
[💼 LinkedIn](https://www.linkedin.com/in/avivelany) | [🌐 פורטפוליו](https://portfolio-avivelanys.vercel.app)

---
