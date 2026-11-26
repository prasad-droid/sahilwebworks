export default function FormField({
  id,
  label,
  error,
  required = false,
  as = 'input',
  options = [],
  className = '',
  children,
  ...props
}) {
  const shared = {
    id,
    name: id,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? `${id}-error` : undefined,
    ...props,
  }

  return (
    <div className={`form-field${error ? ' has-error' : ''}${className ? ` ${className}` : ''}`}>
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {as === 'select' ? (
        <select {...shared}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          {children}
        </select>
      ) : as === 'textarea' ? (
        <textarea {...shared} />
      ) : (
        <input {...shared} />
      )}
      {error && (
        <span className="form-field__error" id={`${id}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
