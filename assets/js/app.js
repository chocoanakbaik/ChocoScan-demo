(() => {
  "use strict";
  const startButton = document.querySelector("[data-start-simulation]");
  const clearButton = document.querySelector("[data-clear-simulation]");
  const stack = document.querySelector("[data-popup-stack]");
  const status = document.querySelector("[data-sim-status]");
  if (!startButton || !clearButton || !stack || !status) return;

  const examples = [
    {title:"Peringatan simulasi", body:"Halaman contoh menampilkan peringatan yang tampak mendesak. Periksa sumber dan alamat situs sebelum mengambil tindakan.", label:"CONTOH 01"},
    {title:"Aktivitas tidak biasa", body:"Pesan ini hanya contoh antarmuka. Demo tidak memindai perangkat atau memeriksa jaringan.", label:"CONTOH 02"},
    {title:"Jangan terburu-buru", body:"Tutup dialog yang tidak relevan dan jangan memasukkan informasi rahasia ke situs yang tidak dikenal.", label:"CONTOH 03"}
  ];
  let active = 0;

  function updateStatus(message) {
    status.textContent = message;
  }

  function addPopup(example, index) {
    const popup = document.createElement("article");
    popup.className = "sim-popup";
    popup.setAttribute("role", "status");
    const heading = document.createElement("h3");
    heading.textContent = example.title;
    const body = document.createElement("p");
    body.textContent = example.body;
    const actions = document.createElement("div");
    actions.className = "popup-actions";
    const label = document.createElement("span");
    label.className = "popup-label";
    label.textContent = example.label;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "dismiss-button";
    close.textContent = "Tutup";
    close.setAttribute("aria-label", "Tutup " + example.title);
    close.addEventListener("click", () => {
      popup.remove();
      updateStatus(stack.children.length ? "Masih ada " + stack.children.length + " dialog simulasi yang bisa ditutup." : "Semua dialog simulasi sudah ditutup.");
    });
    actions.append(label, close);
    popup.append(heading, body, actions);
    stack.append(popup);
    active += 1;
  }

  startButton.addEventListener("click", () => {
    if (stack.children.length) {
      updateStatus("Tutup dialog yang masih terbuka sebelum memulai simulasi lagi.");
      return;
    }
    active = 0;
    examples.forEach((example, index) => addPopup(example, index));
    updateStatus("Simulasi aktif. " + active + " contoh dialog ditampilkan. Semua dialog dapat ditutup satu per satu.");
    startButton.disabled = true;
    window.setTimeout(() => { startButton.disabled = stack.children.length > 0; }, 0);
  });

  clearButton.addEventListener("click", () => {
    stack.replaceChildren();
    startButton.disabled = false;
    updateStatus("Simulasi dibersihkan. Tidak ada data yang dikirim atau disimpan.");
  });

  stack.addEventListener("click", () => {
    if (!stack.children.length) startButton.disabled = false;
  });
})();