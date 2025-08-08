// components/MiddleMain.jsx – level 2
import BottomMain from "./BottomMain";

export default function MiddleMain({name}) {
  return (
    <section className="box level2">
      <h3>MiddleMain</h3>
      <BottomMain name={name} />
    </section>
  );
}
