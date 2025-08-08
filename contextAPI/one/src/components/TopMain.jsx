// components/TopMain.jsx – level 1
import MiddleMain from "./MiddleMain";

export default function TopMain({name}) {
  return (
    <section className="box level1">
      <h2>TopMain</h2>
      <MiddleMain name={name} />
    </section>
  );
}
