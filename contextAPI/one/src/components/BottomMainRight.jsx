// components/BottomMainRight.jsx – level 4 (deepest)
export default function BottomMainRight({name}) {
  return (
    <div className="box deepest">
      <p>
        Hello, <strong>{name || "stranger"}</strong>!
      </p>
      <small>(Rendered in BottomMainRight)</small>
    </div>
  );
}
