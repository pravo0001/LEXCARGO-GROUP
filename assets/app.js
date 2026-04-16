(function () {
  const baseRates = {
    general: 1.15,
    groupage: 0.9,
    pallet: 1.05,
    fragile: 1.35,
    temperature: 1.55,
    adr: 1.85,
  };

  const currencyFormatter = new Intl.NumberFormat("uk-UA");

  function updateEstimate() {
    const calculator = document.querySelector("[data-calculator]");
    if (!calculator) {
      return;
    }

    const weightInput = calculator.querySelector("[name='weight']");
    const volumeInput = calculator.querySelector("[name='volume']");
    const fromInput = calculator.querySelector("[name='from']");
    const toInput = calculator.querySelector("[name='to']");
    const cargoInput = calculator.querySelector("[name='cargoType']");
    const output = calculator.querySelector("[data-estimate-value]");

    if (!weightInput || !volumeInput || !fromInput || !toInput || !cargoInput || !output) {
      return;
    }

    const weight = Math.max(Number(weightInput.value) || 0, 1);
    const volume = Math.max(Number(volumeInput.value) || 0, 1);
    const from = fromInput.value.trim().toLowerCase();
    const to = toInput.value.trim().toLowerCase();
    const cargoType = cargoInput.value;
    const distanceFactor = from && to && from === to ? 1 : 1.4;
    const densityFactor = weight / volume;
    const typeRate = baseRates[cargoType] || 1;
    const total = Math.round((weight * 0.18 + volume * 42 + densityFactor * 0.11) * distanceFactor * typeRate);

    output.textContent = "від " + currencyFormatter.format(total) + " грн";
  }

  function handleDemoForms() {
    const forms = document.querySelectorAll("[data-demo-form]");

    forms.forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const successMessage = form.parentElement.querySelector("[data-success-message]");
        if (successMessage) {
          successMessage.classList.add("is-visible");
        }

        form.reset();
        updateEstimate();
      });
    });
  }

  function setupShareButtons() {
    const shareBlocks = document.querySelectorAll("[data-share-title]");

    shareBlocks.forEach(function (block) {
      const title = block.getAttribute("data-share-title") || "";
      const caption = block.getAttribute("data-share-caption") || "";
      const url = block.getAttribute("data-share-url") || window.location.href;

      block.querySelectorAll("[data-share-action]").forEach(function (button) {
        button.addEventListener("click", async function () {
          const action = button.getAttribute("data-share-action");
          const encodedUrl = encodeURIComponent(url);
          const encodedCaption = encodeURIComponent(caption);
          const shareText = encodeURIComponent(title + "\n" + caption + "\n" + url);

          if (action === "facebook") {
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl, "_blank", "noopener");
            return;
          }

          if (action === "telegram") {
            window.open(
              "https://t.me/share/url?url=" + encodedUrl + "&text=" + encodedCaption,
              "_blank",
              "noopener",
            );
            return;
          }

          if (action === "whatsapp") {
            window.open("https://wa.me/?text=" + shareText, "_blank", "noopener");
            return;
          }

          if (action === "copy") {
            const hint = block.querySelector("[data-copy-hint]");

            try {
              await navigator.clipboard.writeText(title + "\n\n" + caption + "\n\n" + url);
              if (hint) {
                hint.textContent = "Текст скопійовано. Можна вставляти в Instagram або допис.";
              }
            } catch (error) {
              if (hint) {
                hint.textContent = "Не вдалося скопіювати автоматично. Скопіюйте текст вручну.";
              }
            }
          }
        });
      });
    });
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("input", function (event) {
    if (event.target && event.target.closest("[data-calculator]")) {
      updateEstimate();
    }
  });

  document.addEventListener("change", function (event) {
    if (event.target && event.target.closest("[data-calculator]")) {
      updateEstimate();
    }
  });

  updateEstimate();
  handleDemoForms();
  setupShareButtons();
  setCurrentYear();
})();
