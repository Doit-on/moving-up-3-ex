/**
 * ==============================================================================
 * Moving Up 3: Critical Reading (ม.6) - Bilingual i18n Engine
 * Application Version: v1.0.0-canyon (Book Code: MU-B3)
 * Publisher: สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT
 * ==============================================================================
 */

const I18N = {
  currentLang: (typeof localStorage !== 'undefined' && localStorage.getItem('mu3_lang')) || 'th',

  dict: {
    // Navigation Bar
    nav_title: { th: 'Moving Up 3: Critical Reading', en: 'Moving Up 3: Critical Reading' },
    nav_subtitle: { th: 'หนังสือเรียน รายวิชาเพิ่มเติม ภาษาอังกฤษ ม.6', en: 'Grade 12 English Supplementary Course' },
    nav_btn_settings: { th: 'ตั้งค่า', en: 'Settings' },
    nav_btn_system: { th: 'ตรวจระบบ', en: 'Diagnostics' },
    nav_btn_lang: { th: 'EN', en: 'ไทย' },
    nav_home: { th: 'หน้าแรก', en: 'Home' },
    nav_units: { th: 'รวม 10 บทเรียน', en: 'All 10 Units' },
    btn_back_home: { th: '← กลับหน้าแรก (Home)', en: '← Back to Home' },

    // Landing Page Hero
    hero_badge_series: { th: 'มัธยมศึกษาปีที่ 6 • Critical Reading (อ่านวิเคราะห์ขั้นสูง)', en: 'Grade 12 (M.6) • Critical Reading' },
    hero_badge_twp: { th: 'สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ) & WorldCom ELT', en: 'Thai Watana Panich & WorldCom ELT' },
    hero_title: {
      th: 'แบบฝึกหัดพัฒนาทักษะการอ่านวิเคราะห์',
      en: 'Analytical Reading Practice WebApp'
    },
    hero_subtitle: {
      th: 'พัฒนาทักษะการคิดวิเคราะห์ การอ่านจับใจความ การเติมคำศัพท์ และการเรียงประโยคภาษาอังกฤษ',
      en: 'Empowering analytical thinking, comprehension, vocabulary mastery, and syntax structure.'
    },
    hero_desc: {
      th: '',
      en: ''
    },
    hero_btn_enter: { th: 'เข้าสู่บทเรียนเพื่อเริ่มทำแบบฝึกหัด ➔', en: 'Enter Lessons & Exercises ➔' },
    hero_btn_start: { th: 'เริ่มบทเรียน Unit 1', en: 'Start Unit 1' },
    hero_btn_explore: { th: 'เลือกบทเรียนทั้งหมด (1-10)', en: 'Explore All Units (1-10)' },

    // Stats Bar
    stat_units: { th: '10 บทเรียน', en: '10 Units' },
    stat_units_sub: { th: 'ครบทั้งเล่มหลักสูตร ม.6', en: 'Full Grade 12 Book' },
    stat_parts: { th: '3 พาร์ท / บท', en: '3 Parts / Unit' },
    stat_parts_sub: { th: '15 ข้อต่อบท รวม 150 ข้อ', en: '15 Items / Unit (150 Total)' },
    stat_audio: { th: 'ระบบเสียง & การอ่าน', en: 'Audio & Speech' },
    stat_audio_sub: { th: 'Native MP3 + TTS อัจฉริยะ', en: 'Native MP3 + Smart TTS' },
    stat_offline: { th: 'ออฟไลน์ 100%', en: '100% Offline PWA' },
    stat_offline_sub: { th: 'ใช้งานได้ทุกที่ ทุกอุปกรณ์', en: 'Works on any device' },

    // Units Grid Section
    section_units_title: { th: 'แบบฝึกหัดและบทเรียน (Units 1–10)', en: 'Units & Exercises (1–10)' },
    section_units_sub: { th: 'เลือกบทเรียนที่ต้องการเพื่อฝึกการอ่านวิเคราะห์ คำศัพท์ และการจัดเรียงประโยค', en: 'Choose a unit to practice critical reading, vocabulary in context, and sentence unscrambling' },
    btn_start_unit: { th: 'เข้าสู่บทเรียน ➔', en: 'Start Unit ➔' },
    badge_native_audio: { th: '🔊 Native MP3', en: '🔊 Native MP3' },
    badge_tts_audio: { th: '🎙️ เสียงอ่าน TTS', en: '🎙️ Natural TTS' },

    // Player View
    btn_back_to_units: { th: '← กลับหน้ารวมบทเรียน', en: '← Back to Units' },
    btn_listen_audio: { th: 'ฟังเสียงอ่าน', en: 'Play Audio' },
    btn_stop_audio: { th: 'หยุดเสียง', en: 'Stop Audio' },
    audio_ready: { th: 'พร้อมเล่นเสียง', en: 'Audio Ready' },
    audio_playing: { th: 'กำลังเล่นเสียง...', en: 'Playing Audio...' },
    panel_reading_title: { th: 'เนื้อหาบทอ่านเพื่อการวิเคราะห์ (Reading Passage)', en: 'Analytical Reading Passage' },
    zoom_hint: { th: '🔍 แตะที่ภาพเพื่อขยายเต็มจอ', en: '🔍 Tap image to zoom full screen' },

    // Tabs
    tab_part_a: { th: 'Part 1: อ่านวิเคราะห์ (MCQ)', en: 'Part 1: Reading (MCQ)' },
    tab_part_b: { th: 'Part 2: เติมคำศัพท์ (Fill in the blanks)', en: 'Part 2: Fill in the blanks' },
    tab_part_c: { th: 'Part 3: เรียงประโยค (Unscramble)', en: 'Part 3: Unscramble' },
    tab_review: { th: 'สรุปผล & ทักษะประจำบท', en: 'Review & Skill Focus' },

    // Instructions
    inst_part_a_title: { th: 'Part 1: Comprehension & Critical Analysis', en: 'Part 1: Comprehension & Critical Analysis' },
    inst_part_a_sub: { th: 'เลือกคำตอบที่ถูกต้องที่สุดจากบทอ่านด้านซ้าย (5 ข้อ 5 คะแนน)', en: 'Choose the best answer based on the passage on the left (5 items, 5 pts)' },
    inst_part_b_title: { th: 'Part 2: Fill in the blanks', en: 'Part 2: Fill in the blanks' },
    inst_part_b_sub: { th: 'แตะเลือกคำศัพท์จากกล่องด้านบนเพื่อนำมาเติมในช่องว่างให้ประโยคสมบูรณ์', en: 'Select words from the box to fill each blank correctly' },
    inst_part_c_title: { th: 'Part 3: Sentence Unscramble (การเรียงประโยค)', en: 'Part 3: Sentence Unscramble' },
    inst_part_c_sub: { th: 'แตะกลุ่มคำด้านล่างเพื่อเรียงเป็นประโยคที่ถูกต้องตามโครงสร้างไวยากรณ์และความหมาย', en: 'Tap the token cards to build the grammatically correct target sentence' },

    // Interactive Buttons
    btn_check_answers: { th: 'ตรวจคำตอบ', en: 'Check Answers' },
    btn_summary_part: { th: '📊 ตรวจ & สรุปคะแนนพาร์ทนี้', en: '📊 Check & summarize this part' },
    btn_show_key: { th: 'ดูเฉลยพร้อมคำอธิบาย', en: 'Show Answers & Explanations' },
    btn_hide_key: { th: 'ซ่อนเฉลย', en: 'Hide Answers' },
    btn_reset_tokens: { th: 'ล้างคำตอบ', en: 'Reset' },
    btn_next_part: { th: 'ไปยังพาร์ทถัดไป ➔', en: 'Next Part ➔' },
    btn_finish_unit: { th: 'สรุปผลคะแนนบทนี้ 🎉', en: 'View Unit Summary 🎉' },
    alert_incomplete: { th: '⚠️ คุณยังทำไม่ครบทั้ง 5 ข้อในพาร์ทนี้ หากกดส่งจะได้ 0 คะแนน', en: '⚠️ Incomplete: All 5 items must be answered to receive points.' },

    // Score Summary
    summary_title_success: { th: 'ยอดเยี่ยมมาก! คุณสำเร็จบทเรียนนี้แล้ว', en: 'Outstanding! Unit Completed Successfully' },
    summary_title_good: { th: 'ทำได้ดี! ฝึกฝนทบทวนเพิ่มเติมเพื่อคะแนนเต็ม', en: 'Good Job! Review and Practice to Score Higher' },
    summary_total_score: { th: 'คะแนนรวมประจำบท (เต็ม 15 คะแนน)', en: 'Total Unit Score (Max 15 Pts)' },
    summary_part_a: { th: 'Part 1: อ่านวิเคราะห์', en: 'Part 1: Reading' },
    summary_part_b: { th: 'Part 2: Fill in the blanks', en: 'Part 2: Fill in the blanks' },
    summary_part_c: { th: 'Part 3: เรียงประโยค', en: 'Part 3: Unscramble' },
    btn_retry_unit: { th: 'ทำบทนี้อีกครั้ง ↺', en: 'Retry This Unit ↺' },
    btn_choose_next: { th: 'ไปยังบทเรียนถัดไป ➔', en: 'Next Unit ➔' },

    // Tiers
    tier_excellent: { th: 'ยอดเยี่ยมมาก รักษามาตรฐานต่อไป', en: 'Excellent! Keep up the good work' },
    tier_very_good: { th: 'ดีมาก', en: 'Very Good' },
    tier_good: { th: 'ทำได้ดี', en: 'Good Job' },
    tier_needs_practice: { th: 'ต้องฝึกอีกหน่อย', en: 'Needs More Practice' },

    // Product Showcase Marquee
    showcase_badge: { th: 'TWP English Showcase', en: 'TWP English Showcase' },
    showcase_header_title: { th: 'ชุดสื่อการเรียนรู้ภาษาอังกฤษคุณภาพ สำนักพิมพ์ไทยวัฒนาพานิช (ทวพ)', en: 'High Quality English Learning Series by Thai Watana Panich (TWP)' },
    showcase_minimize: { th: 'ย่อแถบ', en: 'Minimize' },
    showcase_expand: { th: 'ขยายแถบดูชุดหนังสือ', en: 'Expand Books Showcase' },
    showcase_card_tag_current: { th: 'แอปปัจจุบัน', en: 'Current App' },
    showcase_card_tag_next: { th: 'เล่มถัดไป', en: 'Next Book' },

    // Settings Modal
    modal_settings_title: { th: 'การตั้งค่าระบบ (Settings)', en: 'Application Settings' },
    setting_sound_title: { th: 'เสียงประกอบ (Sound Effects)', en: 'Procedural Sound Effects' },
    setting_sound_desc: { th: 'เปิด/ปิดเสียงเมื่อตอบถูก ตอบผิด และเสียงเฉลิมฉลอง', en: 'Toggle Web Audio API SFX tones' },
    setting_voice_title: { th: 'ทดสอบเสียงอ่านสังเคราะห์ (TTS)', en: 'Voice Preview (TTS)' },
    setting_voice_desc: { th: 'ฟังตัวอย่างเสียงผู้หญิงธรรมชาติที่ระบบคัดเลือกให้', en: 'Preview the educational speech synthesis voice' },
    btn_test_voice: { th: 'ทดสอบเสียง', en: 'Test Voice' },
    setting_reset_title: { th: 'รีเซ็ตคะแนนและความก้าวหน้า', en: 'Reset All Progress' },
    setting_reset_desc: { th: 'ล้างประวัติการทำแบบฝึกหัด Moving Up 3 ทั้งหมดในเครื่องนี้', en: 'Clear all saved scores and progress for Moving Up 3' },
    btn_reset_storage: { th: 'ล้างข้อมูล', en: 'Reset Data' },

    // Footer
    footer_tagline: { th: '"รากฐานแห่งมวลปัญญา"', en: '"The Foundation of Wisdom"' },
    footer_copy: { th: '© สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT. สงวนลิขสิทธิ์ทุกประการ.', en: '© Thai Watana Panich (TWP) & WorldCom ELT. All Rights Reserved.' }
  },

  t(key, fallback = '') {
    if (this.dict[key] && this.dict[key][this.currentLang]) {
      return this.dict[key][this.currentLang];
    }
    return fallback || key;
  },

  setLanguage(lang) {
    if (lang !== 'th' && lang !== 'en') return;
    this.currentLang = lang;
    if (typeof localStorage !== 'undefined') localStorage.setItem('mu3_lang', lang);
    this.applyTranslations();

    const btn = document.getElementById('btnLangToggle');
    if (btn) {
      btn.innerHTML = lang === 'th' ? '<span>🌐</span> English' : '<span>🌐</span> ภาษาไทย';
    }

    if (window.App && typeof AppState !== 'undefined') {
      if (AppState.currentView === 'landing') {
        if (typeof App.renderLandingGrid === 'function') App.renderLandingGrid();
      } else if (AppState.currentView === 'player' && AppState.currentExercise) {
        if (typeof App.renderPlayerHeader === 'function') App.renderPlayerHeader(AppState.currentExercise);
        if (typeof App.renderPassagePanel === 'function') App.renderPassagePanel(AppState.currentExercise);
        if (AppState.activeTab === 'partA' && typeof App.renderPartA === 'function') App.renderPartA(AppState.currentExercise);
        if (AppState.activeTab === 'partB' && typeof App.renderPartB === 'function') App.renderPartB(AppState.currentExercise);
        if (AppState.activeTab === 'partC' && typeof App.renderPartC === 'function') App.renderPartC(AppState.currentExercise);
        if (AppState.activeTab === 'review' && typeof App.renderReview === 'function') App.renderReview(AppState.currentExercise);
      } else if (AppState.currentView === 'summary' && AppState.currentExercise) {
        if (typeof App.renderSummaryView === 'function') App.renderSummaryView(AppState.currentExercise);
      }
    }
  },

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'th' ? 'en' : 'th');
  },

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && this.dict[key]) {
        el.innerHTML = this.dict[key][this.currentLang];
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (key && this.dict[key]) {
        el.setAttribute('title', this.dict[key][this.currentLang]);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && this.dict[key]) {
        el.setAttribute('placeholder', this.dict[key][this.currentLang]);
      }
    });
  }
};

window.I18N = I18N;
