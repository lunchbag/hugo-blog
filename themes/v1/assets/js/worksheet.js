// Interactive worksheet: autosave answers in this browser, print, copy, clear.
(function () {
  var root = document.querySelector('[data-worksheet]');
  if (!root) return;

  var key = 'ws:' + root.getAttribute('data-worksheet');
  var fields = Array.prototype.slice.call(root.querySelectorAll('[data-ws]'));
  var status = document.getElementById('ws-status');
  var saveTimer = null;

  function load() {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; }
  }
  function store(data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { /* private mode etc. */ }
  }
  function autosize(el) {
    if (el.tagName !== 'TEXTAREA') return;
    el.style.height = 'auto';
    el.style.height = Math.max(el.scrollHeight, 56) + 'px';
  }
  function answered() {
    return fields.filter(function (f) { return f.value.trim() !== ''; }).length;
  }
  function updateStatus(note) {
    if (!status) return;
    var n = answered();
    status.textContent = (note ? note + ' · ' : '') + n + ' of ' + fields.length + ' answered';
  }
  function save() {
    var data = {};
    fields.forEach(function (f) { if (f.value.trim() !== '') data[f.getAttribute('data-ws')] = f.value; });
    store(data);
    updateStatus('Saved');
  }

  // restore
  var saved = load();
  fields.forEach(function (f) {
    var v = saved[f.getAttribute('data-ws')];
    if (v) f.value = v;
    autosize(f);
    f.addEventListener('input', function () {
      autosize(f);
      updateStatus('Saving…');
      clearTimeout(saveTimer);
      saveTimer = setTimeout(save, 400);
    });
  });
  // open any collapsed section that already has an answer
  root.querySelectorAll('[data-ws-details]').forEach(function (d) {
    if (Array.prototype.some.call(d.querySelectorAll('[data-ws]'), function (f) { return f.value.trim() !== ''; })) d.open = true;
  });
  // textareas inside <details> can't be measured while closed
  root.querySelectorAll('[data-ws-details]').forEach(function (d) {
    d.addEventListener('toggle', function () { if (d.open) d.querySelectorAll('textarea').forEach(autosize); });
  });
  updateStatus(answered() ? 'Restored' : '');

  // tools
  var openState = [];
  window.addEventListener('beforeprint', function () {
    openState = [];
    root.querySelectorAll('[data-ws-details]').forEach(function (d) { openState.push(d.open); d.open = true; d.querySelectorAll('textarea').forEach(autosize); });
  });
  window.addEventListener('afterprint', function () {
    root.querySelectorAll('[data-ws-details]').forEach(function (d, i) { d.open = openState[i]; });
  });

  var printBtn = document.getElementById('ws-print');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  var copyBtn = document.getElementById('ws-copy');
  if (copyBtn) copyBtn.addEventListener('click', function () {
    var lines = [document.title.split(' · ')[0], ''];
    fields.forEach(function (f) {
      if (f.value.trim() === '') return;
      lines.push(f.getAttribute('data-label'));
      lines.push(f.value.trim());
      lines.push('');
    });
    var text = lines.join('\n');
    var done = function () { var t = copyBtn.textContent; copyBtn.textContent = 'Copied!'; setTimeout(function () { copyBtn.textContent = t; }, 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done);
    else { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); done(); }
  });

  var clearBtn = document.getElementById('ws-clear');
  if (clearBtn) clearBtn.addEventListener('click', function () {
    if (!confirm('Clear all your answers on this page? This cannot be undone.')) return;
    fields.forEach(function (f) { f.value = ''; autosize(f); });
    try { localStorage.removeItem(key); } catch (e) {}
    updateStatus('Cleared');
  });
})();
