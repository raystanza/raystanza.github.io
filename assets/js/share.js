(function () {
  "use strict";

  const restoreAfter = 2500;

  function enableCopyButtons() {
    const buttons = document.querySelectorAll(".share-button--copy");
    buttons.forEach((button) => {
      const url = button.getAttribute("data-share-url");
      if (!url) return;
      const originalHTML = button.innerHTML;
      const originalLabel = button.getAttribute("aria-label") || "Copy link";
      let resetTimer = null;

      const reset = () => {
        button.innerHTML = originalHTML;
        button.setAttribute("aria-label", originalLabel);
        button.classList.remove("share-button--copied");
        button.removeAttribute("aria-live");
      };

      const setFeedback = (message, { isSuccess = true } = {}) => {
        if (resetTimer) window.clearTimeout(resetTimer);
        button.textContent = message;
        button.setAttribute("aria-label", message);
        if (isSuccess) {
          button.classList.add("share-button--copied");
          button.setAttribute("aria-live", "polite");
          resetTimer = window.setTimeout(reset, 2500);
        } else {
          button.classList.remove("share-button--copied");
          button.setAttribute("aria-live", "assertive");
        }
      };

      button.addEventListener("click", async () => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url);
            setFeedback("Link copied! ✨");
            return;
          }
        } catch (error) {
          console.warn("Clipboard copy failed", error);
        }

        const manual = window.prompt("Copy this link", url);
        if (manual !== null) {
          setFeedback("Link ready to copy", { isSuccess: true });
        } else {
          setFeedback("Copy unavailable", { isSuccess: false });
        }
      });
    });
  }

  function enableNativeShare() {
    if (!navigator.share) {
      return;
    }

    document
      .querySelectorAll(".share-button--native")
      .forEach((button) => {
        const url = button.getAttribute("data-share-url");
        if (!url) {
          return;
        }

        const title = button.getAttribute("data-share-title") || document.title;
        const text = button.getAttribute("data-share-text") || title;

        button.hidden = false;
        button.addEventListener("click", async () => {
          try {
            await navigator.share({ url, title, text });
          } catch (error) {
            if (error && error.name === "AbortError") {
              return;
            }
            console.warn("Native share failed", error);
          }
        });
      });
  }

  document.addEventListener("DOMContentLoaded", () => {
    enableCopyButtons();
    enableNativeShare();
  });
})();
