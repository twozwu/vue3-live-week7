import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min';

export default {
  mounted() {
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      (tooltipNode) => new Tooltip(tooltipNode),
    );
  },
};
