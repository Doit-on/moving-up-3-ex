# Moving Up 3: Critical Reading (ม.6) - Deployment & Operation Guide

**เว็บแอปพลิเคชันเพื่อการศึกษา สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ) & WorldCom ELT**  
**รหัสเล่ม:** `MU-B3` | **เวอร์ชัน:** `v1.0.0-canyon` (Grade 12 Master Edition - All 10 Tracks Included)

---

## 1. ข้อมูลสถาปัตยกรรมและโครงสร้างไฟล์

แอปพลิเคชันนี้ใช้โครงสร้าง **Clean Native Architecture** ตามมาตรฐานเดียวกับ Moving Up 2:

```text
Moving Up 3 app/
├── assets/
│   ├── audio/              # ไฟล์เสียง MP3 แท้คุณภาพสูงครบ 10 บท (ex1.mp3 - ex10.mp3)
│   └── images/
│       ├── covers/         # ภาพปกหนังสือประกอบแถบวิ่งด้านล่าง (Marquee)
│       ├── cover.jpg       # ภาพปก Moving Up 3 Monument Valley Canyon (S__48250904.jpg)
│       ├── twp_logo.png    # โลโก้ ทวพ
│       └── ex1.jpg-ex10.jpg# ภาพประกอบประจำบทเรียน 10 บท ตรงตามเนื้อหาจริง (16:9)
├── css/
│   └── style.css           # ธีมสี Slate Charcoal & Canyon Amber (#24292e, #d97706)
├── js/
│   ├── app.js              # Quiz Engine, Audio Engine, Scoped Storage (mu3_*)
│   ├── data.js             # ฐานข้อมูล 10 บทเรียนเต็ม (150 ข้อ) + Audio Timestamps ครบ 10 บท
│   ├── i18n.js             # ระบบสลับภาษา ไทย ⇄ อังกฤษ Real-time
│   ├── settings.js         # ตัวควบคุมการตั้งค่า (Scoped: mu3_*)
│   ├── system-check.js     # ระบบตรวจวิเคราะห์ความพร้อมของเบราว์เซอร์
│   └── qrcode.min.js       # ไลบรารีสร้าง QR Code ออฟไลน์
├── index.html              # มาร์กอัปหลัก รองรับการเปิด Local และ GitHub Pages โดยตรง 100%
├── manifest.json           # Web App Manifest สำหรับติดตั้ง PWA
├── sw.js                   # Service Worker Offline แคชครบทั้ง 10 เสียง Auto Cache Purge
├── .nojekyll               # ข้าม Jekyll สำหรับ GitHub Pages
├── vercel.json             # Configuration สำหรับ Vercel
├── _redirects              # Configuration สำหรับ Netlify
├── Launch_Moving_Up_3.bat  # สคริปต์เปิดใช้งานบน Windows
├── เปิดใช้งาน Moving Up 3.bat # สคริปต์เปิดใช้งานภาษาไทย
└── DEPLOYMENT_GUIDE.md     # เอกสารแนะนำการติดตั้ง
```

---

## 2. คุณสมบัติเด่นและจุดป้องกันข้อผิดพลาด (Quality Assurance)

* **ธีม Slate Charcoal & Canyon Amber:** 
  * ออกแบบตามสีปกหนังสือเล่ม 3 อย่างแท้จริง (Monument Valley หุบผาหินทรายและสีแอมเบอร์ทอง)
* **โครงสร้าง UI ตามมาตรฐานเล่ม 2:** 
  * ส่วนของ Part 2 ใช้หัวข้อ `Part 2: Fill in the blanks` และกล่องคำศัพท์ระบุ `WORD BANK` สะอาดตา
  * ปุ่มเฉลยใช้คำว่า `Show Answers & Explanations` ในทุกบท
* **การแสดงผลข้อที่ตอบผิด (Red Text Feedback):** 
  * เมื่อตอบผิด ตัวเลือก/คำตอบจะแสดงผลด้วยสีแดงเด่นชัด (`#dc2626`) พร้อมเครื่องหมาย ❌ เพื่อให้ผู้เรียนสังเกตข้อผิดพลาดได้ทันที
* **ระบบเรียงประโยค Part C (Full Stop Token):** 
  * ทุกข้อในทั้ง 10 บทเรียน มีเครื่องหมายจุดมหัพภาค (`.`) อยู่ที่คำท้ายประโยคเพียงตำแหน่งเดียวตรงตามเป้าหมาย 100%
* **ภาพประกอบตรงตามเนื้อหาจริง 100% (16:9 Editorial):** 
  * Ex 1: Digital Footprints (รอยเท้าดิจิทัลและข้อมูลส่วนบุคคล)
  * Ex 2: Why Do We Get Goosebumps? (กลไกการเกิดอาการขนลุกและอารมณ์ความรู้สึก)
  * Ex 3: Turning the Sea into an Airport (การถมทะเลสร้างสนามบินชางงี ประเทศสิงคโปร์)
  * Ex 4: When a City Becomes Too Hot (คลื่นความร้อนในเขตเมืองและการรับมือ)
  * Ex 5: Online Learning vs. Classroom Learning (การเปรียบเทียบการเรียนออนไลน์และการเรียนในชั้นเรียน)
  * Ex 6: What Happens When AI Makes a Decision? (ปัญญาประดิษฐ์กับการตัดสินใจและการตรวจสอบโดยมนุษย์)
  * Ex 7: Why Are Some Cities Sinking? (การทรุดตัวของแผ่นดินในจาการ์ตาและกรุงเทพฯ)
  * Ex 8: The Real Cost of Being Always Available (สมาร์ตโฟน ผลกระทบของการเชื่อมต่อตลอดเวลา และการกำหนดขอบเขต)
  * Ex 9: Why Some Habits Are Hard to Break (จิตวิทยาของการสร้างและปรับเปลี่ยนนิสัย)
  * Ex 10: Would You Eat Food Past Its Date? (ฉลากวันหมดอายุอาหาร คุณภาพ ความปลอดภัย และการลดขยะอาหาร)
* **ระบบเสียง MP3 เจ้าของภาษาแท้ครบ 10 บท:**
  * แปลงจากไฟล์ต้นฉบับด้วยคุณภาพสูง 128kbps stereo/mono ไร้เสียงรบกวน
  * ไฮไลต์ประโยคตามเสียงอ่านแบบ synchronized
* **แยกสโคปความจำอิสระ:**
  * ใช้ `mu3_` prefix ทั้งหมด ไม่ปะปนกับเล่ม 1 หรือเล่ม 2

---

## 3. ขั้นตอนการ Deploy บน GitHub Pages

1. นำไฟล์ในโฟลเดอร์นี้ทั้งหมด (หรือแตกไฟล์จาก `moving-up-3-app-v1.0.0.zip`) อัปโหลดขึ้นสู่ Repository
2. ไปที่ **Settings** > **Pages**
3. เลือก Source เป็น **Deploy from a branch** (เลือก branch `main` หรือ `master` และโฟลเดอร์ `/ (root)`)
4. กด **Save** ระบบจะ Deploy ให้โดยอัตโนมัติภายใน 1-2 นาที (มีไฟล์ `.nojekyll` บรรจุอยู่แล้ว)
