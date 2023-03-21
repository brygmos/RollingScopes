import React from 'react';
import cl from './styles/Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

type State = {
  formIsValid: boolean;
  nameError: string;
  nameVisited: boolean;
  surnameError: string;
  surnameVisited: boolean;
};

type Props = {
  card: string;
};

class Form extends React.Component<Props, State> {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      formIsValid: false,
      nameError: '',
      nameVisited: false,
      surnameError: '',
      surnameVisited: false,
    };
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
  }
  setFormStatus(status: boolean) {
    this.setState({ formIsValid: status });
  }
  getFormStatus() {
    return this.state.formIsValid;
  }

  submitForm(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => {
      this.validateForm(e);
    }, 100);
    createCard();
  }

  validateForm(e: React.FormEvent): boolean {
    e.preventDefault();
    this.validateNameField();
    this.validateSurnameField();
    if (!this.state.formIsValid) {
      alert('Form is invalid!');
      return false;
    } else return true;
  }

  validateNameField() {
    this.setFormStatus(false);
    const regex = new RegExp(/[A-Z][a-z]*/g);
    const value: string = this.nameRef.current?.value || '';
    if (value.length <= 1) {
      this.setState({ nameError: 'Field is required' });
      return;
    } else if (!regex.test(value)) {
      this.setState({ nameError: 'First letter should be capital' });
      return;
    } else {
      this.setState({ nameError: '' });
    }
    this.setFormStatus(true);
  }

  validateSurnameField() {
    this.setFormStatus(false);
    const regex = new RegExp(/[A-Z][a-z]*/g);
    const value: string = this.surnameRef.current?.value || '';
    if (value.length <= 1) {
      this.setState({ surnameError: 'Field is required' });
      return;
    } else if (!regex.test(value)) {
      this.setState({ surnameError: 'First letter should be capital' });
      return;
    } else {
      this.setState({ surnameError: '' });
    }
    this.setFormStatus(true);
  }

  handleBlur(e: React.BaseSyntheticEvent) {
    const fieldName = e.target.id;
    switch (fieldName) {
      case 'name':
        this.setState({ nameVisited: true });
        this.validateNameField();
        break;
      case 'surname':
        this.setState({ surnameVisited: true });
        this.validateSurnameField();
        break;
    }
  }

  // render() {
  //   return (
  //     <div className={'container'}>
  //       <form
  //         onSubmit={(event) => {
  //           this.validateForm(event);
  //         }}
  //         onBlur={(event) => {
  //           this.handleBlur(event);
  //         }}
  //         className={cl.form__field}
  //       >
  //         <input id="name" type="text" ref={this.nameRef} placeholder={'Your name...'} />
  //         <span>{this.state.nameError}</span>
  //         <input id="surname" type="text" ref={this.surnameRef} placeholder={'Your surname...'} />
  //         {this.state.surnameVisited && this.state.surnameVisited && (
  //           <span>{this.state.surnameError}</span>
  //         )}
  //         <input type="submit" value={'Register'} />
  //       </form>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className={'container'}>
        <form
          onSubmit={(event) => {
            this.submitForm(event);
          }}
          onBlur={(event) => {
            this.handleBlur(event);
          }}
          className={cl.form__field}
          action="#"
        >
          <h1>Form</h1>
          <input id="name" type="text" ref={this.nameRef} placeholder={'Your name...'} />
          <span>{this.state.nameError}</span>
          <input id="surname" type="text" ref={this.surnameRef} placeholder={'Your surname...'} />
          <span>{this.state.surnameError}</span>
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
            <i className="fa-solid fa-file-arrow-up"></i>
            <FontAwesomeIcon icon={faFileArrowUp} />
            <span> upload avatar</span>
            <input id={'file-upload'} type="file" />
          </label>
          <label htmlFor="checkAgreement">
            <div>
              <span>Agree to data processing: </span>
            </div>
            <input id={'checkAgreement'} type="checkbox" />
          </label>
          <input type="submit" value={'Create card'} />
        </form>
      </div>
    );
  }
}

export default Form;

// render() {
//   return (
//     <div className={'container'}>
//       <form
//         onSubmit={(event) => {
//           this.validateForm(event);
//         }}
//         className={cl.form__field}
//         action="#"
//       >
//         <h1>Form</h1>
//         <input id="name" type="text" ref={this.inputRef} placeholder={'Your name...'} />
//         <input id="name" type="text" placeholder={'Your surname...'} />
//         <input type="email" placeholder={'Email...'} />
//         <label>birthday date:</label>
//         <input type="date" />
//         <div className={cl.type_radio}>
//           <label>select your role:</label>
//           <input type="radio" id="html" name="fav_language" value="tutor" />
//           <label htmlFor="html">Tutor</label>
//           <input type="radio" id="css" name="fav_language" value="student" />
//           <label htmlFor="css">Student</label>
//         </div>
//         <br />
//         <label htmlFor="cars">choose a car:</label>
//         <select id="cars" name="cars">
//           <option value="volvo">Volvo</option>
//           <option value="saab">Saab</option>
//           <option value="fiat">Fiat</option>
//           <option value="audi">Audi</option>
//         </select>
//         <label htmlFor="file-upload" className={cl.customFileInput}>
//           <i className="fa-solid fa-file-arrow-up"></i>
//           <FontAwesomeIcon icon={faFileArrowUp} />
//           <span> upload avatar</span>
//           <input id={'file-upload'} type="file" />
//         </label>
//         <label htmlFor="checkAgreement">
//           <div>
//             <span>Agree to data processing: </span>
//           </div>
//           <input id={'checkAgreement'} type="checkbox" />
//         </label>
//         <input type="submit" value={'Register'} />
//       </form>
//     </div>
//   );
// }
// }
