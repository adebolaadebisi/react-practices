function Button({ variant = 'primary', size = 'medium', children, className = '', ...rest }) {
  // contract:
  // props: variant -> one of primary|secondary|danger|success
  //        size -> one of large|medium|small
  //        children -> content inside button
  // returns: a tailwind-styled button element

  const base = 'inline-flex items-center justify-center font-semibold rounded-md focus:outline-none transition-shadow shadow-sm';

  const variantMap = {
    primary: 'bg-green-600 text-white border-0 hover:bg-green-700',
    secondary: 'bg-white text-green-600 border border-green-600 hover:bg-green-50',
    danger: 'bg-red-600 text-white border-0 hover:bg-red-700',
    success: 'bg-green-500 text-white border-0 hover:bg-green-600',
  };

  const sizeMap = {
    large: 'px-6 py-3 text-lg',
    medium: 'px-4 py-2 text-base',
    small: 'px-3 py-1 text-sm',
  };

  const v = variantMap[variant] || variantMap.primary;
  const s = sizeMap[size] || sizeMap.medium;

  return (
    <button
      type="button"
      className={`${base} ${v} ${s} ${className}`.trim()}
      {...rest}
    >
      {children ?? 'Button'}
    </button>
  );
}

export default Button;
