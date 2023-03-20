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
        <fieldset>
          <p>Please select your role:</p>
          <input type="radio" id="html" name="fav_language" value="tutor" />
          <label htmlFor="html">Tutor</label>
          <input type="radio" id="css" name="fav_language" value="student" />
          <label htmlFor="css">Student</label>
        </fieldset>
        <br />
        <label htmlFor="cars">Choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="image" alt={'avatar'} />
        <label htmlFor="checkAgreement">Agree to data processing:</label>
        <input id={'checkAgreement'} type="checkbox" />
        <input type="submit" value={'Register'} />
      </form>
    </div>
  );
};

export default Form;
