document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="mode_change"]');
  const graduationTable = document.getElementById('graduation-table');
  const laboTable = document.getElementById('labo-table');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      graduationTable.classList.add("hidden");
      laboTable.classList.add("hidden");

      if (radio.value === "graduation") {
        graduationTable.classList.remove("hidden");
      } else if (radio.value === "labo") {
        laboTable.classList.remove("hidden");
      }
    });
  });

  const general = parseInt(localStorage.getItem('general_sub_sum')) || 0;
  const required = parseInt(localStorage.getItem('required_sub_sum')) || 0;
  const select = parseInt(localStorage.getItem('select_sub_sum')) || 0;

  const GENERAL_MAX = 31;
  const GRADUATION_REQUIRED_MAX = 66;
  const GRADUATION_SELECT_MAX = 30;
  const LABO_REQUIRED_MAX = 49;
  const LABO_SELECT_MAX = 16;

  // 卒業要件表示
  document.getElementById("graduation-general-value").textContent = `${general}/${GENERAL_MAX}単位`;
  document.getElementById("graduation-required-value").textContent = `${required}/${GRADUATION_REQUIRED_MAX}単位`;
  document.getElementById("graduation-select-value").textContent = `${select}/${GRADUATION_SELECT_MAX}単位`;

  // 研究室配属要件表示
  document.getElementById("labo-general-value").textContent = `${general}/${GENERAL_MAX}単位`;
  document.getElementById("labo-required-value").textContent = `${required}/${LABO_REQUIRED_MAX}単位`;
  document.getElementById("labo-select-value").textContent = `${select}/${LABO_SELECT_MAX}単位`;
});
