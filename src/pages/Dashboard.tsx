import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Dashboard() {
  const [value, setValue] = useState<number>(0);
  const [sensorValue, setSensorValue] = useState<number>(0);
  const [kelembaban, setKelembaban] = useState<number>(0);

  useEffect(() => {
    const unsubValue = onValue(
      ref(db, "lampu"),
      (snapshot) => {
        const data: number = snapshot.val();
        console.log(data);
        setValue(data);
      },
      (error) => {
        console.log("Terjadi Error", error);
      }
    );

    const unsubKelembaban = onValue(
      ref(db, "kelembaban"),
      (snapshot) => {
        const data: number = snapshot.val();
        setKelembaban(data);
      },
      (error) => {
        console.log("Terjadi Error", error);
      }
    );

    const unsubSensor = onValue(
      ref(db, "sensor"),
      (snapshot) => {
        const data: number = snapshot.val();

        setSensorValue(data);
        console.log(data);
      },
      (error) => {
        console.log("Terjadi Error", error);
      }
    );

    return () => {
      unsubValue();
      unsubSensor();
      unsubKelembaban();
    };
  });

  async function handleOnOff() {
    try {
      if (value == 0) {
        await set(ref(db, "lampu"), 1);
      } else {
        await set(ref(db, "lampu"), 0);
      }
    } catch (error) {
      console.log("Terjadi Error", error);
    }
  }

  return (
    <div>
      <h1>Simple IOT</h1>
      <p>Nilai Suhu = {sensorValue}</p>
      <p>Nilai Kelembaban = {kelembaban}</p>
      <button onClick={handleOnOff} className={value == 0 ? "on" : "off"}>
        {value == 0 ? "Lampu ON" : "Lampu OFF"}
      </button>
    </div>
  );
}
