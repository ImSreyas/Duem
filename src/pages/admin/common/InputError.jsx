const InputError = ({error, shake}) => {
  return (
    <div data-shake={shake} className="error-wrapper">
      {error}
    </div>
  );
};

export default InputError;
