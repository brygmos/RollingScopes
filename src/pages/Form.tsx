import React, { FC } from 'react';
import cl from './styles/Form.module.css';

const Form: FC = (): JSX.Element => {
  return (
    <div className={'container'}>
      <form className={cl.form__field} action="#">
        <h1>Form</h1>
        <input type="text" placeholder={'Your name...'} />
        <input type="text" placeholder={'Your surname...'} />
        <input type="email" placeholder={'Email...'} />
        <label>birthday date:</label>
        <input type="date" />
        <div className={cl.type_radio}>
          <label>select your role:</label>
          <input type="radio" id="html" name="fav_language" value="tutor" />
          <label htmlFor="html">Tutor</label>
          <input type="radio" id="css" name="fav_language" value="student" />
          <label htmlFor="css">Student</label>
        </div>
        <br />
        <label htmlFor="cars">choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <label htmlFor="file-upload" className={cl.customFileInput}>
          upload avatar:
        </label>
        <br />
        <input type="file" />
        <br />
        <label htmlFor="checkAgreement">Agree to data processing:</label>
        <input id={'checkAgreement'} type="checkbox" />
        <input type="submit" value={'Register'} />
      </form>
    </div>
  );
};

export default Form;
