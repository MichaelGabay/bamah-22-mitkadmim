# Custom Hooks נפוצים – מדריך לתרגול

המסמך מתאר הוקים מותאמים נפוצים: **מה כל הוק מקבל**, **מה הוא מחזיר**, ו**מה הוא אמור לעשות**.  
**ללא קוד מימוש** – לצורכי תרגול והבנה.

---

## 1. useLocalStorage

**מטרה:** לשמור state ב־`localStorage` ולהיות מסונכרן איתו (עדכון ב־localStorage + עדכון ב־state).

**פרמטרים:**
- `key` (string) – המפתח ב־localStorage.
- `initialValue` (כל ערך) – הערך ההתחלתי אם אין עדיין ערך ב־localStorage.

**מחזיר:**
- `[value, setValue]` – מערך של שני אלמנטים:
  - `value` – הערך הנוכחי (מה שנשמר ב־localStorage או ה־initialValue).
  - `setValue` – פונקציה לעדכון הערך (מקבלת ערך חדש או פונקציה שמקבלת את הערך הישן ומחזירה חדש).

**שימוש טיפוסי:** שמירת העדפות משתמש, theme, טופס שלא נמחק ברענון.

---

## 2. useDebounce

**מטרה:** להשהות עדכון של ערך – הערך "מתעדכן" רק אחרי פרק זמן ללא שינויים (למשל הקלדה).

**פרמטרים:**
- `value` (כל ערך) – הערך שרוצים לעשות לו debounce.
- `delay` (number) – זמן ההמתנה באלפיות שנייה (ms) לפני שהערך המעוכב מתעדכן.

**מחזיר:**
- `debouncedValue` – הערך המעוכב (מתעדכן רק אחרי `delay` ms בלי שינוי ב־`value`).

**שימוש טיפוסי:** חיפוש בזמן הקלדה, וולידציה של שדה, הפחתת קריאות ל־API.

---

## 3. useFetch (או useAsync)

**מטרה:** לבצע בקשת HTTP (fetch) ולנהל את המצב: טעינה, הצלחה, שגיאה.

**פרמטרים:**
- `url` (string) – כתובת ה־API או המשאב.
- `options` (אובייקט, אופציונלי) – אפשרויות ל־fetch (method, headers, body וכו').

**מחזיר:**
- אובייקט (או מערך) שמכיל למשל:
  - `data` – הנתונים שהתקבלו (אחרי parsing).
  - `loading` (boolean) – האם הבקשה עדיין בתהליך.
  - `error` – אובייקט/מחרוזת שגיאה אם יש.
  - `refetch` – פונקציה להפעלת הבקשה מחדש.

**שימוש טיפוסי:** טעינת נתונים מעמוד, אינטגרציה עם REST API.

---

## 4. useToggle

**מטרה:** לנהל ערך בוליאני שמתהפך בין `true` ל־`false` בלחיצה/פעולה אחת.

**פרמטרים:**
- `initialValue` (boolean, אופציונלי) – ערך התחלתי (ברירת מחדל לרוב `false`).

**מחזיר:**
- `[value, toggle]` – או גרסה עם `setTrue`, `setFalse`:
  - `value` (boolean) – המצב הנוכחי.
  - `toggle` – פונקציה שמהפכת את הערך (או מקבלת ערך ספציפי).

**שימוש טיפוסי:** פתיחת/סגירת מודל, תפריט נפתח, מצב "מופעל/כבוי".

---

## 5. usePrevious

**מטרה:** לשמור את הערך שהיה ל־state (או ל־prop) ב־רינדור הקודם.

**פרמטרים:**
- `value` (כל ערך) – הערך שרוצים לעקוב אחרי הגרסה הקודמת שלו.

**מחזיר:**
- `previousValue` – הערך שהיה ב־רינדור הקודם (ב־רינדור הראשון לרוב `undefined`).

**שימוש טיפוסי:** השוואה לפני/אחרי, אנימציות, לוגיקה שתלויה ב"מה היה קודם".

---

## 6. useClickOutside

**מטרה:** לזהות לחיצה מחוץ לאלמנט מסוים (למשל לסגור תפריט או מודל).

**פרמטרים:**
- `ref` (RefObject) – ה־ref של האלמנט שאיתו משווים (האלמנט "הפנימי").
- `handler` (function) – פונקציה שתקרא כשלחצו מחוץ לאלמנט (למשל סגירת תפריט).

**מחזיר:**
- לרוב אין ערך מוחזר – ההוק רק רושם מאזין ל־click (או mousedown) ומפעיל את `handler` כשהלחיצה מחוץ ל־ref.

**שימוש טיפוסי:** סגירת דרופדאון, מודל, תפריט ניווט.

---

## 7. useWindowSize

**מטרה:** לעקוב אחרי גודל חלון הדפדפן (רוחב וגובה) ולעדכן את הקומפוננטה כשהגודל משתנה.

**פרמטרים:**
- אין פרמטרים (או אופציונלי: אובייקט options).

**מחזיר:**
- אובייקט עם למשל:
  - `width` (number) – רוחב החלון בפיקסלים.
  - `height` (number) – גובה החלון בפיקסלים.

**שימוש טיפוסי:** עיצוב רספונסיבי, החלטות UI לפי גודל מסך, מצב landscape/portrait.

---

## 8. useTimer / useInterval

**מטרה:** להריץ פעולה חוזרת כל X שניות (timer/interval) או לספור זמן (countdown/stopwatch).

**פרמטרים (גרסה כללית):**
- `callback` (function) – הפונקציה שתרוץ בכל tick.
- `delay` (number | null) – מרווח באלפיות שנייה; `null` משמש להשהיית הטיימר.

**מחזיר (תלוי בגרסה):**
- לגרסת interval: לרוב `[isRunning, start, stop, reset]` או דומה.
- לגרסת stopwatch: `[seconds, start, pause, reset]` וכו'.

**שימוש טיפוסי:** שעון, countdown, פולינג ל־API, אנימציות חוזרות.

---

## 9. useForm (או useInput)

**מטרה:** לנהל state של טופס (שדות, שינוי ערכים, שליחת טופס) עם פחות boilerplate.

**פרמטרים:**
- `initialValues` (object) – אובייקט של ערכי ברירת מחדל לשדות (למשל `{ email: '', password: '' }`).

**מחזיר:**
- אובייקט שמכיל למשל:
  - `values` – אובייקט עם כל ערכי השדות.
  - `handleChange` – פונקציה שמקבלת event (או name + value) ומעדכנת את השדה המתאים.
  - `handleSubmit` – פונקציה שמקבלת callback (למשל שליחה ל־API) ומטפלת ב־submit.
  - `errors` / `setErrors` – לניהול שגיאות וולידציה (בגרסאות מתקדמות).

**שימוש טיפוסי:** טפסי התחברות, הרשמה, עריכת פרופיל.

---

## 10. useOnScreen (Intersection Observer)

**מטרה:** לדעת אם אלמנט נכנס לתצוגה (viewport) או יוצא ממנה – שימוש ב־Intersection Observer.

**פרמטרים:**
- `ref` (RefObject) – ה־ref של האלמנט שבודקים.
- `options` (object, אופציונלי) – אפשרויות ל־IntersectionObserver (root, threshold, rootMargin).

**מחזיר:**
- `isIntersecting` (boolean) – האם האלמנט כרגע נראה בתצוגה (לפי ה־threshold שהוגדר).

**שימוש טיפוסי:** lazy loading של תמונות, infinite scroll, אנימציות בכניסה viewport.

---

## סיכום קצר

| הוק              | פרמטרים עיקריים     | מחזיר עיקרי                    | שימוש |
|------------------|----------------------|---------------------------------|--------|
| useLocalStorage  | key, initialValue    | [value, setValue]               | שמירה ב־localStorage |
| useDebounce      | value, delay         | debouncedValue                  | השהיית עדכון (חיפוש וכו') |
| useFetch         | url, options?        | { data, loading, error, refetch } | בקשת HTTP |
| useToggle        | initialValue?        | [value, toggle]                 | true/false |
| usePrevious      | value                | previousValue                   | ערך קודם |
| useClickOutside  | ref, handler         | —                               | לחיצה מחוץ לאלמנט |
| useWindowSize    | —                    | { width, height }               | גודל חלון |
| useTimer         | callback, delay      | [isRunning, start, stop, …]     | טיימר/interval |
| useForm          | initialValues        | values, handleChange, handleSubmit | ניהול טופס |
| useOnScreen      | ref, options?        | isIntersecting                  | נראות ב־viewport |

---

# פתרונות – מימוש לדוגמה

להלן מימושים אפשריים לכל הוק. נסה קודם לבד, ואז השווה לפתרון.

---

## 1. useLocalStorage – פתרון

```js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item != null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [key, value]);

  return [value, setValue];
}
```

---

## 2. useDebounce – פתרון

```js
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
```

---

## 3. useFetch – פתרון

```js
import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(res.statusText);
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
```

---

## 4. useToggle – פתרון

```js
import { useState, useCallback } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback((next) => {
    setValue((prev) => (typeof next === 'boolean' ? next : !prev));
  }, []);
  return [value, toggle];
}
```

---

## 5. usePrevious – פתרון

```js
import { useRef, useEffect } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
```

---

## 6. useClickOutside – פתרון

```js
import { useEffect } from 'react';

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
```

---

## 7. useWindowSize – פתרון

```js
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

---

## 8. useInterval – פתרון (גרסת interval)

```js
import { useState, useCallback, useRef, useEffect } from 'react';

function useInterval(callback, delay) {
  const [isRunning, setIsRunning] = useState(false);
  const savedCallback = useRef(callback);
  const idRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = useCallback(() => {
    if (idRef.current) return;
    setIsRunning(true);
    idRef.current = setInterval(() => savedCallback.current(), delay);
  }, [delay]);

  const stop = useCallback(() => {
    if (idRef.current) {
      clearInterval(idRef.current);
      idRef.current = null;
    }
    setIsRunning(false);
  }, []);

  useEffect(() => {
    return () => {
      if (idRef.current) clearInterval(idRef.current);
    };
  }, []);

  return { isRunning, start, stop };
}
```

---

## 9. useForm – פתרון (בסיסי)

```js
import { useState, useCallback } from 'react';

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (onSubmit) => (e) => {
      e.preventDefault();
      onSubmit(values);
    },
    [values]
  );

  const reset = useCallback(() => setValues(initialValues), [initialValues]);

  return { values, handleChange, handleSubmit, setValues, reset };
}
```

---

## 10. useOnScreen – פתרון

```js
import { useState, useEffect } from 'react';

function useOnScreen(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.root, options.threshold, options.rootMargin]);

  return isIntersecting;
}
```

---

*מסמך זה נועד לתרגול – נסה לממש כל הוק בעצמך לפי התיאור, ואז השווה לפתרונות כאן.*
