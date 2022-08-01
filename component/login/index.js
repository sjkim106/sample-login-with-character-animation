import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToken } from "../../middleware/store/reducer/user/slice";
import MainPage from "../main";

function LoginComponent() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const ryanRef = useRef(); // document.querySelector("#ryan");
  const [ryanClassName, setRyanClassName] = useState("");
  const [rotateValue, setRotateValue] = useState(`rotate3d(0, 0, 0, 0rad)`);
  const ears = useRef();
  const eyes = useRef();
  const muzzle = useRef();

  const emailRef = useRef(); //document.querySelector('input[type="text"]');
  const passwordRef = useRef(); //document.querySelector('input[type="password"]');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let timer = null;

  const [isShowMainPage, showMainPage] = useState(false);
  useEffect(() => {
    if (token !== "") {
      showMainPage(true);
    }
  }, [token]);

  function rotate3d(x, y, z, rad) {
    const value = `rotate3d(${x}, ${y}, ${z}, ${rad}rad)`;
    setRotateValue(value);
  }

  function requestLogin() {
    axios
      .post("/api/user/login", {
        data: {
          email,
          password,
        },
      })
      .then((response) => {
        const { data } = response;
        dispatch(updateToken(data.token));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return !isShowMainPage ? (
    <div className="container">
      <link rel="stylesheet" href="/css/styled.css" />
      <svg
        className={ryanClassName}
        ref={ryanRef}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,150 C0,65 120,65 120,150"
          fill="#e0a243"
          stroke="#000"
          strokeWidth="2.5"
        />
        <g className="ears" useRef={ears}>
          <path
            d="M46,32 L46,30 C46,16 26,16 26,30 L26,32"
            fill="#e0a243"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform="rotate(-10,38,24)"
          />
          <path
            d="M74,32 L74,30 C74,16 94,16 94,30 L94,32"
            fill="#e0a243"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform="rotate(10,82,24)"
          />
        </g>
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="#e0a243"
          stroke="#000"
          strokeWidth="2.5"
        />
        <g className="eyes" useRef={eyes}>
          <line
            x1="37"
            x2="50"
            y1="46"
            y2="46"
            stroke="#000"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="44" cy="55" r="3" fill="#000" />

          <line
            x1="70"
            x2="83"
            y1="46"
            y2="46"
            stroke="#000"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="76" cy="55" r="3" fill="#000" />
        </g>
        <g className="muzzle" useRef={muzzle}>
          <path
            d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
            fill="#fff"
          />
          <path
            d="M60,66 C58.5,61 49,63 49,69 C49,75 58,77 60,71 M60,66 C61.5,61 71,63 71,69 C71,75 62,77 60,71"
            fill="#fff"
            stroke="#000"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <polygon
            points="59,63.5,60,63.4,61,63.5,60,65"
            fill="#000"
            stroke="#000"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M40,105 C10,140 110,140 80,105 L80,105 L70,111 L60,105 L50,111 L40,105"
          fill="#fff"
        />
      </svg>

      <input
        // onFocus={focus}
        // onKeyUp={look}
        // onClick={look}
        // onBlur={reset}
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        ref={emailRef}
        type="text"
        placeholder="email@domain.com"
      ></input>
      <input
        // onFocus={lookAway}
        // onBlur={reset}
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        ref={passwordRef}
        type="password"
        placeholder="Password"
      ></input>
      <button
        style={{
          fontSize: "16px",
          border: "0",
          borderRadius: "5px",
          outline: "0",
          padding: "10px 15px",
          marginTop: "15px",
        }}
        onClick={requestLogin}
      >
        Login
      </button>
    </div>
  ) : (
    <MainPage />
  );
}

export default LoginComponent;
