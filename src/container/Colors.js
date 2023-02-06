import { useEffect, useState } from 'react';
import { colorApi } from '../api/colorApi';
import Color from '../components/Color';

const IDLE = 'IDLE';
const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

const Colors = () => {
  const [colors, setColors] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [apiState, setApiState] = useState(IDLE);

  const initFetch = async () => {
    try {
      setApiState(PENDING);
      const response = await colorApi();
      setColors(response.data.colors);
      setApiState(SUCCESS);
    } catch (error) {
      setApiState(ERROR);
    }
  };

  useEffect(() => {
    initFetch();
  }, []);

  return (
    <div>
      <h1>Colors</h1>
      <div className="main-box">
        <input type="text" className="input" placeholder="Search..." onChange={(event) => { setSearchText(event.target.value); }} />
        <div className="color-box">
          {apiState === PENDING ? (
            <>
              <div className="heatmap" />
              <div className="heatmap" />
              <div className="heatmap" />
              <div className="heatmap" />
              <div className="heatmap" />
            </>
          ) : null}
          {apiState === ERROR ? <p>There was a problem</p> : null}
          {apiState === SUCCESS
            ? colors.filter((val) => {
              if (searchText === '') {
                return val;
              } if (val.color.toLowerCase().includes(searchText.toLocaleLowerCase())) {
                return val;
              }
              return '';
            }).map((color) => (
              <Color key={color.id} colors={color} />
            )) : null}
        </div>
      </div>
    </div>
  );
};

export default Colors;
