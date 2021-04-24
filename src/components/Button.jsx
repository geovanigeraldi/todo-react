export default function Button({text, click}) {
  return (
    <div>
      <button
        type="button"
        onClick={click}
      >
        {text}
      </button>
    </div>
  );
}