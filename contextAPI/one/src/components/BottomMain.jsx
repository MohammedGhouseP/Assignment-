// components/BottomMain.jsx – level 3
import BottomMainRight from "./BottomMainRight";

export default function BottomMain({name}) {
  return (
    <section className="box level3">
      <h4>BottomMain</h4>
      <BottomMainRight name={name} />
    </section>
  );
}
