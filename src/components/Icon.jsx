const Icon = ({ name, className = '' }) => (
  <svg className={`icon ${className}`.trim()} aria-hidden="true" focusable="false">
    <use href={`/assets/icons.svg#${name}`} />
  </svg>
);

export default Icon;
