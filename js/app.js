/**
 * ==============================================================================
 * Moving Up 3: Critical Reading (ม.6) - Master Application Controller
 * Application Version: v1.0.0-canyon (Book Code: MU-B3)
 * Publisher: สำนักพิมพ์ไทยวัฒนาพานิช (TWP) & WorldCom ELT
 * ==============================================================================
 */

// Application State
var AppState = {
  currentView: 'landing', // 'landing', 'player', 'summary'
  currentExercise: null,
  activeTab: 'partA', // 'partA', 'partB', 'partC', 'review'

  answers: {
    partA: {}, // qId: optIndex
    partB: {}, // slotIndex: word
    partC: {}  // itemId: array of placed tokens
  },

  partBActiveSlot: 0,

  submitted: {
    partA: false,
    partB: false,
    partC: false
  },

  answerKeyRevealed: {
    partA: false,
    partB: false,
    partC: false
  },

  scores: {
    partA: 0,
    partB: 0,
    partC: 0,
    total: 0
  },

  showcaseCollapsed: false
};

// ============================================================
// Web Audio API Procedural Sound Synthesizer (Zero asset dependency)
// ============================================================
var SoundFX = {
  ctx: null,

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },

  playTone(freq, type, duration, delay = 0) {
    if (typeof SettingsController !== 'undefined' && !SettingsController.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      }, delay);
    } catch (e) {
      console.warn('Sound synthesis error:', e);
    }
  },

  playCorrect() {
    this.playTone(523.25, 'sine', 0.15, 0);   // C5
    this.playTone(659.25, 'sine', 0.25, 100); // E5
    this.playTone(783.99, 'sine', 0.35, 200); // G5
  },

  playWrong() {
    this.playTone(280, 'triangle', 0.15, 0);
    this.playTone(220, 'triangle', 0.25, 120);
  },

  playFanfare() {
    this.playTone(440, 'triangle', 0.15, 0);
    this.playTone(554.37, 'triangle', 0.15, 150);
    this.playTone(659.25, 'triangle', 0.2, 300);
    this.playTone(880, 'sine', 0.5, 450);
  }
};

// ============================================================
// Dual Audio & Speech Engine (Native MP3 + Fallback Web Speech)
// ============================================================
// ============================================================
// Dual Audio & Speech Engine (Native MP3 + Fallback Web Speech)
// ============================================================
var AudioEngine = {
  nativeAudio: null,
  isPlaying: false,
  usingTTS: false,
  playbackRate: 1.0,
  currentParaIdx: -1,
  paragraphsQueue: [],

  setSpeed(rate) {
    this.playbackRate = rate;
    if (this.nativeAudio) {
      this.nativeAudio.playbackRate = rate;
    }
    // Update speed buttons
    document.querySelectorAll('.btn-speed').forEach(b => b.classList.remove('active'));
    const btnId = rate === 0.8 ? 'btnSpeed08' : (rate === 1.2 ? 'btnSpeed12' : 'btnSpeed10');
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) activeBtn.classList.add('active');
    showToast(`ปรับความเร็วเสียงเป็น: ${rate}x`, 'info');
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopAudio();
    } else {
      this.playExerciseAudio(AppState.currentExercise);
    }
  },

  playExerciseAudio(exercise) {
    this.stopAudio();
    if (!exercise) return;

    // If no native audio file provided (e.g. Unit 3), play directly via synchronized TTS
    if (!exercise.audio) {
      this.playPassageTTSChunks(exercise);
      return;
    }

    // Try Native Audio first (assets/audio/ex[N].mp3 or ex[N].mp3)
    const audioPath = (window.App && typeof window.App.getAssetPath === 'function')
      ? window.App.getAssetPath(exercise.audio)
      : exercise.audio;
    this.nativeAudio = new Audio(audioPath);
    this.nativeAudio.playbackRate = this.playbackRate;

    this.nativeAudio.onplay = () => {
      this.isPlaying = true;
      this.usingTTS = false;
      this.updatePlayerButtons(true, 'Native MP3');
    };

    this.nativeAudio.ontimeupdate = () => {
      if (!this.isPlaying || !exercise.timestamps || !exercise.timestamps.length) return;
      const cur = this.nativeAudio.currentTime;
      const idx = exercise.timestamps.findIndex(t => cur >= t.start && cur < t.end);
      if (idx !== -1) {
        if (idx !== this.currentParaIdx) {
          this.currentParaIdx = idx;
          this.highlightParagraph(idx);
        }
      } else {
        this.clearParagraphHighlights();
      }
    };

    this.nativeAudio.onended = () => {
      this.isPlaying = false;
      this.updatePlayerButtons(false);
      this.clearParagraphHighlights();
    };

    this.nativeAudio.onerror = () => {
      const flatName = exercise.audio.substring(exercise.audio.lastIndexOf('/') + 1);
      if (this.nativeAudio.src.indexOf(flatName) === -1 || this.nativeAudio.src.includes('assets/')) {
        console.warn('[AudioEngine] Trying flat root audio:', flatName);
        this.nativeAudio.src = flatName;
        this.nativeAudio.play().catch(() => {
          this.playPassageTTSChunks(exercise);
        });
      } else {
        console.log('[AudioEngine] Native audio file not found, switching to synchronized paragraph TTS');
        this.playPassageTTSChunks(exercise);
      }
    };

    this.nativeAudio.play().catch(() => {
      const flatName = exercise.audio.substring(exercise.audio.lastIndexOf('/') + 1);
      if (this.nativeAudio.src.indexOf(flatName) === -1 || this.nativeAudio.src.includes('assets/')) {
        this.nativeAudio.src = flatName;
        this.nativeAudio.play().catch(() => this.playPassageTTSChunks(exercise));
      } else {
        this.playPassageTTSChunks(exercise);
      }
    });
  },

  playPassageTTSChunks(exercise) {
    if (!('speechSynthesis' in window)) {
      showToast('เบราว์เซอร์นี้ไม่รองรับระบบเสียงอ่าน', 'info');
      return;
    }

    window.speechSynthesis.cancel();
    this.paragraphsQueue = exercise.passage || [];
    this.currentParaIdx = 0;
    this.isPlaying = true;
    this.usingTTS = true;
    this.updatePlayerButtons(true, 'Smart TTS');

    this.playNextTTSChunk();
  },

  playNextTTSChunk() {
    if (!this.isPlaying || this.currentParaIdx >= this.paragraphsQueue.length) {
      this.stopAudio();
      return;
    }

    const idx = this.currentParaIdx;
    this.highlightParagraph(idx);

    const text = this.paragraphsQueue[idx];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = this.playbackRate * 0.95;

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.lang.startsWith('en') && /female|zira|samantha|natural|google us/i.test(v.name));
    if (femaleVoice) utterance.voice = femaleVoice;

    utterance.onend = () => {
      if (this.isPlaying) {
        this.currentParaIdx++;
        this.playNextTTSChunk();
      }
    };

    utterance.onerror = () => {
      this.stopAudio();
    };

    window.speechSynthesis.speak(utterance);
  },

  playSingleParagraph(idx) {
    const ex = AppState.currentExercise;
    if (!ex || !ex.passage[idx]) return;

    this.stopAudio();
    this.highlightParagraph(idx);

    // If native audio and timestamps are present, play segment directly from native MP3
    if (ex.audio && ex.timestamps && ex.timestamps[idx]) {
      const seg = ex.timestamps[idx];
      const audioPath = (window.App && typeof window.App.getAssetPath === 'function')
        ? window.App.getAssetPath(ex.audio)
        : ex.audio;
      this.nativeAudio = new Audio(audioPath);
      this.nativeAudio.playbackRate = this.playbackRate;
      this.nativeAudio.currentTime = seg.start;

      this.nativeAudio.onplay = () => {
        this.isPlaying = true;
        this.usingTTS = false;
        this.updatePlayerButtons(true, `ย่อหน้า ${idx + 1} (MP3)`);
      };

      this.nativeAudio.ontimeupdate = () => {
        if (this.nativeAudio && this.nativeAudio.currentTime >= seg.end) {
          this.stopAudio();
        }
      };

      this.nativeAudio.onended = () => {
        this.stopAudio();
      };

      this.nativeAudio.onerror = () => {
        const flatAudio = ex.audio.substring(ex.audio.lastIndexOf('/') + 1);
        if (this.nativeAudio.src.indexOf(flatAudio) === -1 || this.nativeAudio.src.includes('assets/')) {
          this.nativeAudio.src = flatAudio;
          this.nativeAudio.currentTime = seg.start;
          this.nativeAudio.play().catch(() => this.playSingleParagraphTTS(ex, idx));
        } else {
          this.playSingleParagraphTTS(ex, idx);
        }
      };

      this.nativeAudio.play().catch(() => {
        const flatAudio = ex.audio.substring(ex.audio.lastIndexOf('/') + 1);
        if (this.nativeAudio.src.indexOf(flatAudio) === -1 || this.nativeAudio.src.includes('assets/')) {
          this.nativeAudio.src = flatAudio;
          this.nativeAudio.currentTime = seg.start;
          this.nativeAudio.play().catch(() => this.playSingleParagraphTTS(ex, idx));
        } else {
          this.playSingleParagraphTTS(ex, idx);
        }
      });
      return;
    }

    this.playSingleParagraphTTS(ex, idx);
  },

  playSingleParagraphTTS(ex, idx) {
    if (!('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(ex.passage[idx]);
    utterance.lang = 'en-US';
    utterance.rate = this.playbackRate * 0.95;

    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.lang.startsWith('en') && /female|zira|samantha|natural/i.test(v.name));
    if (femaleVoice) utterance.voice = femaleVoice;

    this.isPlaying = true;
    this.usingTTS = true;
    this.updatePlayerButtons(true, 'TTS ย่อหน้า');

    utterance.onend = () => {
      this.isPlaying = false;
      this.updatePlayerButtons(false);
      this.clearParagraphHighlights();
    };

    utterance.onerror = () => {
      this.stopAudio();
    };

    window.speechSynthesis.speak(utterance);
  },

  highlightParagraph(idx) {
    this.clearParagraphHighlights();
    const el = document.getElementById(`passagePara_${idx}`);
    if (el) {
      el.classList.add('speaking-active');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  clearParagraphHighlights() {
    document.querySelectorAll('.passage-paragraph').forEach(p => p.classList.remove('speaking-active'));
  },

  stopAudio() {
    if (this.nativeAudio) {
      try { this.nativeAudio.pause(); } catch(e) {}
      this.nativeAudio = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlaying = false;
    this.clearParagraphHighlights();
    this.updatePlayerButtons(false);
  },

  updatePlayerButtons(playing, modeText = '') {
    const btnTopbar = document.getElementById('btnPlayAudio');
    const btnMedia = document.getElementById('btnAudioMain');
    const iconMedia = document.getElementById('audioMainIcon');
    const textMedia = document.getElementById('audioMainText');
    const statusBadge = document.getElementById('audioStatusBadge');
    const formatPill = document.getElementById('audioFormatPill');

    if (playing) {
      if (btnTopbar) {
        btnTopbar.classList.add('playing');
        btnTopbar.innerHTML = '<span>⏹️</span> <span>หยุดเสียง</span>';
      }
      if (btnMedia) {
        btnMedia.classList.add('playing');
        if (iconMedia) iconMedia.textContent = '⏹️';
        if (textMedia) textMedia.textContent = 'หยุดเสียงอ่าน';
      }
      if (statusBadge) {
        statusBadge.innerHTML = `🔊 กำลังเล่นเสียง (${modeText || 'Playing'})`;
        statusBadge.style.color = 'var(--marine-vibrant)';
      }
      if (formatPill) {
        formatPill.textContent = modeText || 'Playing';
        formatPill.style.background = 'var(--accent-yellow)';
        formatPill.style.color = '#000000';
      }
    } else {
      if (btnTopbar) {
        btnTopbar.classList.remove('playing');
        btnTopbar.innerHTML = '<span>🔊</span> <span>ฟังเสียงอ่าน</span>';
      }
      if (btnMedia) {
        btnMedia.classList.remove('playing');
        if (iconMedia) iconMedia.textContent = '▶️';
        if (textMedia) textMedia.textContent = 'ฟังเสียงอ่านเนื้อหา';
      }
      if (statusBadge) {
        statusBadge.innerHTML = '🔊 พร้อมเล่นเสียงอ่าน';
        statusBadge.style.color = '';
      }
      if (formatPill) {
        const hasNative = AppState.currentExercise && AppState.currentExercise.audio;
        formatPill.textContent = hasNative ? 'Native MP3 Ready' : 'Smart TTS Voice';
        formatPill.style.background = hasNative ? '' : '#fef3c7';
        formatPill.style.color = hasNative ? '' : '#92400e';
      }
    }
  }
};

// ============================================================
// Main Application Controller
// ============================================================
var App = {
  getAssetPath(url) {
    if (!url) return '';
    if (window.IS_FLAT_STRUCTURE) {
      return url.substring(url.lastIndexOf('/') + 1);
    }
    return url;
  },

  handleImgError(img) {
    if (!img) return;
    if (!img.dataset.triedFlat) {
      img.dataset.triedFlat = '1';
      const currentSrc = img.getAttribute('src') || img.src || '';
      const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);
      if (filename) {
        img.src = filename;
        return;
      }
    }
    img.src = window.IS_FLAT_STRUCTURE ? 'cover.jpg' : 'assets/images/cover.jpg';
  },

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    SettingsController.init();
    I18N.applyTranslations();

    // Init views
    this.renderLandingGrid();
    this.renderProductMarquee();

    // Check version pill
    const verPill = document.getElementById('navbarVersionPill');
    if (verPill && typeof APP_META !== 'undefined') {
      verPill.textContent = 'v' + APP_META.version;
    }

    console.log(`%c[Moving Up 3 App] Initialized ${APP_META.buildTag}`, 'color:#d97706; font-weight:bold; font-size:14px;');

    // Support deep linking: ?unit=1&tab=partB or #unit1-partB
    const href = window.location.href || '';
    const validTabs = { parta: 'partA', partb: 'partB', partc: 'partC', review: 'review' };
    
    let targetUnit = null;
    let targetTab = 'partA';

    // 1. Direct syntax matching: unit1, unit1-partB, unit1_partC
    const directMatch = href.match(/unit(\d+)(?:[-_&](partA|partB|partC|review))?/i);
    if (directMatch) {
      targetUnit = parseInt(directMatch[1]);
      if (directMatch[2]) {
        targetTab = validTabs[directMatch[2].toLowerCase()] || 'partA';
      }
    }

    // 2. Query param parsing (?unit=1&tab=partB)
    if (href.includes('?')) {
      const qPart = href.split('?')[1].split('#')[0];
      const urlParams = new URLSearchParams(qPart);
      if (urlParams.has('unit')) {
        targetUnit = parseInt(urlParams.get('unit'));
      }
      if (urlParams.has('tab')) {
        const t = urlParams.get('tab').toLowerCase();
        if (validTabs[t]) targetTab = validTabs[t];
      }
    }

    if (targetUnit && targetUnit >= 1 && targetUnit <= 10) {
      this.enterExercise(targetUnit, targetTab);
    }
  },

  // ------------------------------------------------------------
  // View Navigation
  // ------------------------------------------------------------
  switchView(viewName) {
    AudioEngine.stopAudio();
    AppState.currentView = viewName;

    document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById('view-' + viewName);
    if (target) target.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Auto-adjust bottom banner depending on view
    if (viewName === 'player') {
      this.collapseProductShowcase(true);
    } else {
      this.collapseProductShowcase(false);
    }
  },

  // ------------------------------------------------------------
  // Landing Page
  // ------------------------------------------------------------
  renderLandingGrid() {
    const grid = document.getElementById('exercisesGrid');
    if (!grid || typeof DEFAULT_EXERCISES === 'undefined') return;

    grid.innerHTML = DEFAULT_EXERCISES.map(ex => {
      const savedScore = localStorage.getItem(`mu3_ex_${ex.id}_score`);
      const isCompleted = localStorage.getItem(`mu3_ex_${ex.id}_completed`) === 'true';

      const statusHtml = isCompleted
        ? `<span class="card-status-pill" style="color:var(--success);">✅ ${savedScore}/15 pts</span>`
        : `<span class="card-status-pill" style="color:var(--text-muted);">15 ข้อ</span>`;

      return `
        <div class="exercise-card" onclick="App.enterExercise(${ex.id})">
          <div class="card-thumb-wrap">
            <img src="${App.getAssetPath(ex.cover)}" alt="${ex.title}" loading="lazy" onerror="App.handleImgError(this)">
            <div class="card-badge-unit">Unit ${ex.id}</div>
            ${statusHtml}
          </div>
          <div class="card-content">
            <div class="card-skill-tag">${ex.skill}</div>
            <h3 class="card-title">${ex.title}</h3>
            <p class="card-desc">${ex.skill_desc.substring(0, 110)}...</p>
            <div class="card-footer-meta">
              <span>📖 3 Parts (15 ข้อ)</span>
              <button class="btn-card-start">
                <span data-i18n="btn_start_unit">เข้าสู่บทเรียน ➔</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // ------------------------------------------------------------
  // Exercise Player View
  // ------------------------------------------------------------
  enterExercise(unitId, initialTab = 'partA') {
    const ex = DEFAULT_EXERCISES.find(e => e.id === unitId);
    if (!ex) return;

    AppState.currentExercise = ex;
    AppState.activeTab = initialTab;
    AppState.answers = { partA: {}, partB: {}, partC: {} };
    AppState.submitted = { partA: false, partB: false, partC: false };
    AppState.answerKeyRevealed = { partA: false, partB: false, partC: false };
    AppState.partBActiveSlot = 0;
    AppState.scores = { partA: 0, partB: 0, partC: 0, total: 0 };

    this.renderPlayerHeader(ex);
    this.renderPassagePanel(ex);
    AudioEngine.updatePlayerButtons(false);
    this.switchTab(initialTab);

    this.switchView('player');
  },

  renderPlayerHeader(ex) {
    const titleEl = document.getElementById('playerUnitTitle');
    const badgeEl = document.getElementById('playerUnitBadge');
    if (titleEl) titleEl.textContent = `Unit ${ex.id}: ${ex.title}`;
    if (badgeEl) badgeEl.textContent = ex.skill;
  },

  renderPassagePanel(ex) {
    const heroImg = document.getElementById('passageHeroImage');
    const skillBox = document.getElementById('passageSkillBox');
    const bodyEl = document.getElementById('passageTextBody');

    if (heroImg) {
      heroImg.src = App.getAssetPath(ex.cover);
      heroImg.alt = ex.title;
      heroImg.onerror = function() { App.handleImgError(this); };
    }

    if (skillBox) {
      skillBox.innerHTML = `<strong>💡 ทักษะประจำบท: ${ex.skill}</strong><br>${ex.skill_desc}`;
    }

    if (bodyEl) {
      bodyEl.innerHTML = ex.passage.map((p, idx) => `
        <p class="passage-paragraph" id="passagePara_${idx}" onclick="AudioEngine.playSingleParagraph(${idx})" title="แตะเพื่อฟังเสียงอ่านเฉพาะย่อหน้านี้">${p}</p>
      `).join('');
    }
  },

  switchTab(tabName) {
    AppState.activeTab = tabName;

    document.querySelectorAll('.quiz-tab-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('tabBtn_' + tabName);
    if (activeBtn) activeBtn.classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    const activePane = document.getElementById('pane_' + tabName);
    if (activePane) activePane.classList.add('active');

    const ex = AppState.currentExercise;
    if (!ex) return;

    if (tabName === 'partA') this.renderPartA(ex);
    else if (tabName === 'partB') this.renderPartB(ex);
    else if (tabName === 'partC') this.renderPartC(ex);
    else if (tabName === 'review') this.renderReview(ex);
  },

  // ------------------------------------------------------------
  // Part 1: Reading Comprehension (MCQs)
  // ------------------------------------------------------------
  renderPartA(ex) {
    const container = document.getElementById('partAQuestionsList');
    if (!container) return;

    container.innerHTML = ex.partA.map(q => {
      const selected = AppState.answers.partA[q.id];
      const isSubmitted = AppState.submitted.partA;
      const showKey = AppState.answerKeyRevealed.partA;

      const optsHtml = q.options.map((opt, oi) => {
        let stateClass = '';
        let badgeHtml = '';
        if (selected === oi) stateClass += ' selected';
        if (isSubmitted || showKey) {
          if (oi === q.answer) {
            stateClass += ' is-correct';
            badgeHtml = `<span style="margin-left:auto; color:var(--success); font-weight:700; font-size:0.85rem;">✅ คำตอบที่ถูกต้อง</span>`;
          } else if (selected === oi && oi !== q.answer) {
            stateClass += ' is-wrong';
            badgeHtml = `<span style="margin-left:auto; color:#dc2626; font-weight:700; font-size:0.85rem;">❌ คุณตอบข้อนี้ (ไม่ถูกต้อง)</span>`;
          }
        }

        const markerLetter = String.fromCharCode(65 + oi);

        return `
          <div class="mcq-option-card ${stateClass}" onclick="App.selectOptionA(${q.id}, ${oi})">
            <span class="mcq-opt-marker">${markerLetter}</span>
            <span class="mcq-opt-text">${opt}</span>
            ${badgeHtml}
          </div>
        `;
      }).join('');

      let statusBadge = '';
      if (isSubmitted || showKey) {
        if (selected === q.answer) {
          statusBadge = `<span style="color:var(--success); font-weight:700; font-size:0.85rem; margin-left:8px;">✅ ถูกต้อง (1/1 คะแนน)</span>`;
        } else {
          statusBadge = `<span style="color:#dc2626; font-weight:700; font-size:0.85rem; margin-left:8px;">❌ ไม่ถูกต้อง (0/1 คะแนน)</span>`;
        }
      }

      const expHtml = (isSubmitted || showKey)
        ? `<div class="mcq-explanation-box">💡 <strong>คำอธิบาย:</strong> ${q.explanation}</div>`
        : '';

      return `
        <div class="mcq-item">
          <div class="mcq-q-text"><strong>${q.id}.</strong> ${q.question} ${statusBadge}</div>
          <div class="mcq-options-list">${optsHtml}</div>
          ${expHtml}
        </div>
      `;
    }).join('');
  },

  selectOptionA(qId, optIdx) {
    if (AppState.submitted.partA) return;
    AppState.answers.partA[qId] = optIdx;
    this.renderPartA(AppState.currentExercise);
  },

  submitPartA() {
    const ex = AppState.currentExercise;
    const answeredCount = Object.keys(AppState.answers.partA).length;

    // Incomplete = 0 points rule
    if (answeredCount < ex.partA.length) {
      if (!confirm('⚠️ คุณยังตอบไม่ครบทั้ง 5 ข้อ หากส่งคำตอบตอนนี้จะได้ 0 คะแนน คุณต้องการส่งเลยหรือไม่?')) {
        return;
      }
      AppState.scores.partA = 0;
    } else {
      let score = 0;
      ex.partA.forEach(q => {
        if (AppState.answers.partA[q.id] === q.answer) score++;
      });
      AppState.scores.partA = score;
    }

    AppState.submitted.partA = true;
    this.renderPartA(ex);

    if (AppState.scores.partA >= 4) SoundFX.playCorrect();
    else SoundFX.playWrong();

    showToast(`สรุปคะแนน Part 1: ${AppState.scores.partA} / 5 คะแนน`, 'info');
  },

  toggleKeyPartA() {
    AppState.answerKeyRevealed.partA = !AppState.answerKeyRevealed.partA;
    this.renderPartA(AppState.currentExercise);
  },

  // ------------------------------------------------------------
  // Part 2: Word Bank (Fill in the blanks with Derangement pool)
  // ------------------------------------------------------------
  renderPartB(ex) {
    const poolWrap = document.getElementById('wordBankPool');
    const questionsWrap = document.getElementById('wordBankQuestions');
    if (!poolWrap || !questionsWrap) return;

    // Render Deranged Word Chips
    const usedWords = Object.values(AppState.answers.partB);
    poolWrap.innerHTML = ex.wordBank.scrambledWords.map(word => {
      const isUsed = usedWords.includes(word);
      return `
        <button type="button" class="word-chip ${isUsed ? 'used' : ''}" 
                onclick="App.placeWordChip('${word}')" ${isUsed ? 'disabled' : ''}>
          ${word}
        </button>
      `;
    }).join('');

    // Render Sentences with blanks
    const isSubmitted = AppState.submitted.partB;
    const showKey = AppState.answerKeyRevealed.partB;

    questionsWrap.innerHTML = ex.wordBank.questions.map((q, idx) => {
      const userWord = AppState.answers.partB[idx] || '';
      const isActive = AppState.partBActiveSlot === idx;

      let feedbackClass = '';
      let statusText = '';
      if (isSubmitted || showKey) {
        if (userWord.toLowerCase() === q.answer.toLowerCase()) {
          feedbackClass = 'is-correct';
          statusText = `<span style="color:var(--success); font-weight:700; font-size:0.85rem; margin-left:6px;">✅ ถูกต้อง</span>`;
        } else {
          feedbackClass = 'is-wrong';
          statusText = `<span style="color:#dc2626; font-weight:700; font-size:0.85rem; margin-left:6px;">❌ ไม่ถูกต้อง</span>`;
        }
      }

      const blankContent = userWord
        ? `<span>${userWord}</span> <span class="wb-slot-remove" onclick="event.stopPropagation(); App.removeWordSlot(${idx})">✕</span>`
        : `<span style="opacity:0.4;">(แตะเพื่อเลือกคำ)</span>`;

      const parts = q.sentence.split('__________');
      const sentenceHtml = parts.length === 2
        ? `${parts[0]} <span class="wb-slot-blank ${isActive ? 'active-target' : ''} ${userWord ? 'filled' : ''} ${feedbackClass}" onclick="App.selectSlotB(${idx})">${blankContent}</span> ${parts[1]} ${statusText}`
        : q.sentence;

      const keyNote = (isSubmitted || showKey)
        ? (feedbackClass === 'is-wrong'
            ? `<div style="font-size:0.85rem; color:#dc2626; font-weight:600; margin-top:6px;">❌ คำตอบยังไม่ถูกต้อง (คำตอบที่ถูกคือ: <strong style="color:var(--success); font-size:0.95rem;">${q.answer}</strong>)</div>`
            : `<div style="font-size:0.85rem; color:var(--success); font-weight:600; margin-top:6px;">✅ คำตอบถูกต้อง: <strong>${q.answer}</strong></div>`)
        : '';

      return `
        <div class="wb-sentence-item">
          <div><strong>${idx + 1}.</strong> ${sentenceHtml}</div>
          ${keyNote}
        </div>
      `;
    }).join('');
  },

  selectSlotB(idx) {
    if (AppState.submitted.partB) return;
    AppState.partBActiveSlot = idx;
    this.renderPartB(AppState.currentExercise);
  },

  placeWordChip(word) {
    if (AppState.submitted.partB) return;
    AppState.answers.partB[AppState.partBActiveSlot] = word;

    // Advance to next unfilled slot
    const totalSlots = AppState.currentExercise.wordBank.questions.length;
    let nextSlot = -1;
    for (let i = 0; i < totalSlots; i++) {
      if (!AppState.answers.partB[i]) {
        nextSlot = i;
        break;
      }
    }
    if (nextSlot !== -1) AppState.partBActiveSlot = nextSlot;

    this.renderPartB(AppState.currentExercise);
  },

  removeWordSlot(idx) {
    if (AppState.submitted.partB) return;
    delete AppState.answers.partB[idx];
    AppState.partBActiveSlot = idx;
    this.renderPartB(AppState.currentExercise);
  },

  submitPartB() {
    const ex = AppState.currentExercise;
    const answeredCount = Object.keys(AppState.answers.partB).length;

    if (answeredCount < ex.wordBank.questions.length) {
      if (!confirm('⚠️ คุณยังเติมคำไม่ครบทั้ง 5 ข้อ หากส่งคำตอบจะได้ 0 คะแนน ต้องการส่งเลยหรือไม่?')) {
        return;
      }
      AppState.scores.partB = 0;
    } else {
      let score = 0;
      ex.wordBank.questions.forEach((q, idx) => {
        if ((AppState.answers.partB[idx] || '').toLowerCase() === q.answer.toLowerCase()) {
          score++;
        }
      });
      AppState.scores.partB = score;
    }

    AppState.submitted.partB = true;
    this.renderPartB(ex);

    if (AppState.scores.partB >= 4) SoundFX.playCorrect();
    else SoundFX.playWrong();

    showToast(`สรุปคะแนน Part 2: ${AppState.scores.partB} / 5 คะแนน`, 'info');
  },

  toggleKeyPartB() {
    AppState.answerKeyRevealed.partB = !AppState.answerKeyRevealed.partB;
    this.renderPartB(AppState.currentExercise);
  },

  // ------------------------------------------------------------
  // Part 3: Sentence Unscramble
  // ------------------------------------------------------------
  renderPartC(ex) {
    const listWrap = document.getElementById('unscrambleList');
    if (!listWrap) return;

    const isSubmitted = AppState.submitted.partC;
    const showKey = AppState.answerKeyRevealed.partC;

    listWrap.innerHTML = ex.partC.map(item => {
      const placedTokens = AppState.answers.partC[item.id] || [];
      const placedTexts = placedTokens.map(t => t.text);

      // Ensure pool tokens are properly scrambled (never pre-arranged as answer)
      let poolTokens = item.shuffledTokens || item.tokens || [];
      const targetCleanStr = item.target.trim().replace(/[.!?,]$/, '').toLowerCase();
      const currentJoinedStr = poolTokens.join(' ').trim().replace(/[.!?,]$/, '').toLowerCase();
      if (currentJoinedStr === targetCleanStr && poolTokens.length > 1) {
        poolTokens = [...poolTokens].reverse();
        item.shuffledTokens = poolTokens;
      }

      // Available tokens in pool
      const availablePool = poolTokens.filter((token, tokenIdx) => {
        return !placedTokens.some(p => p.originalIndex === tokenIdx);
      });

      // Render Drop Zone
      const dropZoneTokensHtml = placedTokens.map((p, pIdx) => `
        <span class="token-card in-drop-zone" onclick="App.returnTokenC(${item.id}, ${pIdx})">
          ${p.text}
        </span>
      `).join('');

      // Render Source Pool
      const poolTokensHtml = poolTokens.map((token, tokenIdx) => {
        const isPlaced = placedTokens.some(p => p.originalIndex === tokenIdx);
        return `
          <button type="button" class="token-card ${isPlaced ? 'placed' : ''}" 
                  onclick="App.placeTokenC(${item.id}, '${token.replace(/'/g, "\\'")}', ${tokenIdx})" 
                  ${isPlaced ? 'disabled' : ''}>
            ${token}
          </button>
        `;
      }).join('');

      let feedbackClass = '';
      let isCorrect = false;
      if (isSubmitted || showKey) {
        const assembledStr = placedTexts.join(' ').trim().replace(/[.!?,]$/, '').toLowerCase();
        const targetClean = item.target.trim().replace(/[.!?,]$/, '').toLowerCase();
        if (assembledStr === targetClean) {
          feedbackClass = 'is-correct';
          isCorrect = true;
        } else {
          feedbackClass = 'is-wrong';
          isCorrect = false;
        }
      }

      let statusBadgeC = '';
      if (isSubmitted || showKey) {
        statusBadgeC = isCorrect
          ? `<span style="color:var(--success); font-weight:700; font-size:0.85rem; margin-left:8px;">✅ ถูกต้อง (1/1 คะแนน)</span>`
          : `<span style="color:#dc2626; font-weight:700; font-size:0.85rem; margin-left:8px;">❌ ไม่ถูกต้อง (0/1 คะแนน)</span>`;
      }

      const keyNote = (isSubmitted || showKey)
        ? (isCorrect
            ? `<div style="font-size:0.9rem; color:var(--success); font-weight:700; margin-top:8px;">✅ เรียงประโยคถูกต้องสมบูรณ์ (1/1 คะแนน)</div>
               <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">เฉลย: <strong style="color:var(--marine-deep); font-size:0.95rem;">${item.target}</strong></div>`
            : `<div style="font-size:0.9rem; color:#dc2626; font-weight:700; margin-top:8px;">❌ เรียงประโยคยังไม่ถูกต้อง (0/1 คะแนน)</div>
               <div style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">เฉลย: <strong style="color:var(--success); font-size:0.95rem;">${item.target}</strong></div>`)
        : '';

      return `
        <div class="unscramble-item">
          <div class="unscramble-q-num">ข้อ ${item.id} ${statusBadgeC}</div>
          <div class="target-drop-zone ${placedTokens.length === 0 ? 'placeholder-empty' : ''} ${feedbackClass}">
            ${dropZoneTokensHtml}
          </div>
          <div class="token-source-pool">
            ${poolTokensHtml}
          </div>
          ${keyNote}
        </div>
      `;
    }).join('');
  },

  placeTokenC(itemId, text, originalIndex) {
    if (AppState.submitted.partC) return;
    if (!AppState.answers.partC[itemId]) AppState.answers.partC[itemId] = [];
    AppState.answers.partC[itemId].push({ text, originalIndex });
    this.renderPartC(AppState.currentExercise);
  },

  returnTokenC(itemId, placedIdx) {
    if (AppState.submitted.partC) return;
    if (AppState.answers.partC[itemId]) {
      AppState.answers.partC[itemId].splice(placedIdx, 1);
      this.renderPartC(AppState.currentExercise);
    }
  },

  resetTokensC() {
    if (AppState.submitted.partC) return;
    AppState.answers.partC = {};
    this.renderPartC(AppState.currentExercise);
    showToast('ล้างคำตอบพาร์ทเรียงประโยคแล้ว', 'info');
  },

  submitPartC() {
    const ex = AppState.currentExercise;
    const answeredCount = Object.keys(AppState.answers.partC).filter(k => (AppState.answers.partC[k] || []).length > 0).length;

    if (answeredCount < ex.partC.length) {
      if (!confirm('⚠️ คุณยังเรียงประโยคไม่ครบทั้ง 5 ข้อ หากส่งตอนนี้จะได้ 0 คะแนน ต้องการส่งเลยหรือไม่?')) {
        return;
      }
      AppState.scores.partC = 0;
    } else {
      let score = 0;
      ex.partC.forEach(item => {
        const placed = AppState.answers.partC[item.id] || [];
        const assembled = placed.map(t => t.text).join(' ').trim().replace(/[.!?,]$/, '').toLowerCase();
        const targetClean = item.target.trim().replace(/[.!?,]$/, '').toLowerCase();
        if (assembled === targetClean) score++;
      });
      AppState.scores.partC = score;
    }

    AppState.submitted.partC = true;
    this.renderPartC(ex);

    if (AppState.scores.partC >= 4) SoundFX.playCorrect();
    else SoundFX.playWrong();

    showToast(`สรุปคะแนน Part 3: ${AppState.scores.partC} / 5 คะแนน`, 'info');
  },

  toggleKeyPartC() {
    AppState.answerKeyRevealed.partC = !AppState.answerKeyRevealed.partC;
    this.renderPartC(AppState.currentExercise);
  },

  // ------------------------------------------------------------
  // Review & Summary View
  // ------------------------------------------------------------
  renderReview(ex) {
    const container = document.getElementById('reviewContentContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="padding:10px;">
        <h3 style="color:var(--marine-deep); margin-bottom:12px;">📊 ทบทวนทักษะและสรุปผลประจำบท</h3>
        <p style="margin-bottom:16px;"><strong>ทักษะหลัก:</strong> ${ex.skill} — ${ex.skill_desc}</p>
        <p style="margin-bottom:20px; color:var(--text-secondary);">เมื่อคุณทำครบทั้ง 3 พาร์ทแล้ว สามารถกดปุ่มด้านล่างเพื่อสรุปผลคะแนนรวมประจำบทได้ทันที</p>
        <button type="button" class="btn-action primary" onclick="App.showSummary()">
          <span>🎉</span> สรุปผลคะแนนรวมประจำบท (15 คะแนน)
        </button>
      </div>
    `;
  },

  showSummary() {
    const ex = AppState.currentExercise;
    if (!ex) return;

    // Calculate total score
    AppState.scores.total = AppState.scores.partA + AppState.scores.partB + AppState.scores.partC;
    const total = AppState.scores.total;

    // Save to LocalStorage with mu3_ scope
    localStorage.setItem(`mu3_ex_${ex.id}_score`, total);
    localStorage.setItem(`mu3_ex_${ex.id}_completed`, 'true');

    // Render Summary Card
    const cardEl = document.getElementById('summaryCardContent');
    if (cardEl) {
      let tierText = '';
      let tierColor = '';

      if (total >= 12) {
        tierText = I18N.t('tier_excellent');
        tierColor = 'var(--success)';
        SoundFX.playFanfare();
      } else if (total >= 10) {
        tierText = I18N.t('tier_very_good');
        tierColor = 'var(--marine-vibrant)';
        SoundFX.playCorrect();
      } else if (total >= 8) {
        tierText = I18N.t('tier_good');
        tierColor = 'var(--info)';
      } else {
        tierText = I18N.t('tier_needs_practice');
        tierColor = 'var(--warning)';
      }

      // Next Unit button logic (Strict final unit rule: hide if Unit 10!)
      const nextUnitBtnHtml = ex.id < 10
        ? `<button type="button" class="btn-action primary" onclick="App.enterExercise(${ex.id + 1})">
             <span data-i18n="btn_choose_next">ไปยังบทถัดไป (Unit ${ex.id + 1}) ➔</span>
           </button>`
        : `<div style="font-weight:700; color:var(--success); margin:10px 0;">🎉 ยินดีด้วย! คุณทำแบบฝึกหัดครบทั้ง 10 บทเรียนของ Moving Up 3 แล้ว</div>`;

      cardEl.innerHTML = `
        <h2 style="font-size:1.8rem; color:var(--marine-deep); margin-bottom:6px;">Unit ${ex.id}: ${ex.title}</h2>
        <p style="color:var(--text-muted); margin-bottom:24px;">สรุปผลคะแนนแบบฝึกหัด 3 พาร์ท</p>

        <div class="summary-score-circle">
          <span class="score-num-big">${total}</span>
          <span class="score-num-denom">/ 15 คะแนน</span>
        </div>

        <div style="font-size:1.2rem; font-weight:700; color:${tierColor}; margin-bottom:24px;">
          ${tierText}
        </div>

        <div class="summary-breakdown-grid">
          <div class="summary-breakdown-col">
            <div class="breakdown-title" data-i18n="summary_part_a">Part 1: การอ่าน</div>
            <div class="breakdown-score">${AppState.scores.partA} / 5</div>
          </div>
          <div class="summary-breakdown-col">
            <div class="breakdown-title" data-i18n="summary_part_b">Part 2: คลังคำศัพท์</div>
            <div class="breakdown-score">${AppState.scores.partB} / 5</div>
          </div>
          <div class="summary-breakdown-col">
            <div class="breakdown-title" data-i18n="summary_part_c">Part 3: เรียงประโยค</div>
            <div class="breakdown-score">${AppState.scores.partC} / 5</div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:14px; margin-top:24px; flex-wrap:wrap;">
          <button type="button" class="btn-action" onclick="App.enterExercise(${ex.id})">
            <span>↺</span> <span data-i18n="btn_retry_unit">ทำบทนี้อีกครั้ง ↺</span>
          </button>
          <button type="button" class="btn-action" onclick="App.switchView('landing')">
            <span>🏠</span> <span data-i18n="nav_home">กลับหน้าแรก</span>
          </button>
          ${nextUnitBtnHtml}
        </div>
      `;
    }

    this.switchView('summary');
  },

  // ------------------------------------------------------------
  // Bottom Product Showcase Banner
  // ------------------------------------------------------------
  renderProductMarquee() {
    const track = document.getElementById('productMarqueeTrack');
    if (!track || typeof PRODUCT_COVERS === 'undefined') return;

    // Render items duplicated twice for seamless loop
    const items = [...PRODUCT_COVERS, ...PRODUCT_COVERS];

    track.innerHTML = items.map(p => `
      <div class="showcase-item-card" title="${p.title}">
        <div class="showcase-cover-thumb">
          <img src="${App.getAssetPath(p.image)}" alt="${p.title}" loading="lazy" onerror="App.handleImgError(this)">
        </div>
        <div class="showcase-item-info">
          <span class="showcase-item-tag">${p.tag}</span>
          <span class="showcase-item-title">${p.title}</span>
          <span class="showcase-item-level">${p.level}</span>
        </div>
      </div>
    `).join('');
  },

  toggleProductShowcase() {
    this.collapseProductShowcase(!AppState.showcaseCollapsed);
  },

  collapseProductShowcase(collapse) {
    AppState.showcaseCollapsed = collapse;
    const banner = document.getElementById('bottomProductShowcase');
    const toggleBtn = document.getElementById('btnToggleShowcase');

    if (banner) {
      if (collapse) {
        banner.classList.add('collapsed');
        document.body.classList.add('banner-collapsed');
      } else {
        banner.classList.remove('collapsed');
        document.body.classList.remove('banner-collapsed');
      }
    }

    if (toggleBtn) {
      if (collapse) {
        toggleBtn.innerHTML = '<span class="icon-toggle">▲</span> <span>ดูชุดหนังสือ</span>';
        toggleBtn.title = 'ขยายแถบดูชุดหนังสือ';
      } else {
        toggleBtn.innerHTML = '<span class="icon-toggle">▼</span> <span data-i18n="showcase_minimize">ย่อแถบ</span>';
        toggleBtn.title = 'ย่อแถบโฆษณา';
      }
    }
  },

  // ------------------------------------------------------------
  // Lightbox Zoom Modal
  // ------------------------------------------------------------
  openLightbox(imgSrc) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    if (modal && img) {
      img.src = App.getAssetPath(imgSrc);
      img.onerror = function() { App.handleImgError(this); };
      modal.classList.add('active');
    }
  },

  closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.classList.remove('active');
  }
};

// Global Toast Notifications
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

// Window bindings
window.App = App;
window.SoundFX = SoundFX;
window.AudioEngine = AudioEngine;
window.AudioController = AudioEngine;
window.showToast = showToast;

// Boot application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
