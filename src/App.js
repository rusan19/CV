import Title from "./components/Header";
import "./components/App.css";
import Edu from "./components/Education"
import Yetenek from "./components/Yetenek";

function App() {
  const Bilgiler = [
    {
      id: "1",
      Name: "Özkan Ruşan",
      Tag: "Yazılımcı",
      Summary:
        "Yazılımcı olma yolunda emin adımlarla ilerlemeye çalışan bilgisayar mühendisi öğrencisi",
        
    },

    {
      id: 2,
      School: "Trakya Üniversitesi, Bilgisayar Mühendisliği",
      Gpa: "3.6/4",
      Start : "2019.09.27",
      Graduate: "2023.06.30",

    },
    {
      id:3,
      Beceri :
            "Python      70% ■■■■■■■▢▢▢\n"+
            "C           60% ■■■■■■▢▢▢▢\n"+
            "C#          80% ■■■■■■■■▢▢\n"+
            "HTML/CSS    40% ■■■■▢▢▢▢▢▢\n"+
            "JAVA        50% ■■■■■▢▢▢▢▢\n", 
    }
  ]
  return (
    <div>
      <Title items={Bilgiler}/>
      <Edu items={Bilgiler}/>
      <Yetenek items={Bilgiler}/>
    </div>
  );
}

export default App;
