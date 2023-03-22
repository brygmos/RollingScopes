import React from 'react';
import cl from './styles/Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CardType } from '../components/CardItem';

type State = {
  formIsValid: boolean;
  nameError: string;
  nameVisited: boolean;
  surnameError: string;
  surnameVisited: boolean;
  fileUrl: string;
};

type Props = {
  formHandler: (card: CardType) => void;
  lastId: number;
};

class Form extends React.Component<Props, State> {
  nameRef: React.RefObject<HTMLInputElement>;
  surnameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  radioRef: React.RefObject<HTMLInputElement>;
  titleRef: React.RefObject<HTMLInputElement>;
  categoryRef: React.RefObject<HTMLSelectElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      formIsValid: false,
      nameError: '',
      nameVisited: false,
      surnameError: '',
      surnameVisited: false,
      fileUrl: '',
    };
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.radioRef = React.createRef();
    this.titleRef = React.createRef();
    this.categoryRef = React.createRef();
  }

  onFileUpload = (event: React.BaseSyntheticEvent) => {
    this.setState({ fileUrl: URL.createObjectURL(event.target.files[0]) });
  };

  setFormObject() {
    const card: CardType = {
      id: this.props.lastId + 1,
      title: this.titleRef.current?.value || '',
      date: this.dateRef.current?.value || '',
      author: {
        firstname: this.nameRef.current?.value || '',
        lastname: this.surnameRef.current?.value || '',
      },
      email: this.nameRef.current?.value || '',
      role: this.radioRef.current?.checked ? this.radioRef.current?.value : 'student',
      category: this.categoryRef.current?.value ? this.categoryRef.current.value : 'selecttt',
      image: this.state.fileUrl || '',
    };
    this.props.formHandler(card);
  }
  setFormStatus(status: boolean) {
    this.setState({ formIsValid: status });
  }
  getFormStatus() {
    return this.state.formIsValid;
  }

  submitForm(e: React.FormEvent) {
    e.preventDefault();
    this.validateForm(e);
  }

  validateForm(e: React.FormEvent): boolean {
    console.log(e);
    this.validateNameField();
    this.validateSurnameField();
    if (!this.state.formIsValid) {
      alert('Form is invalid!');
      return false;
    } else {
      this.setFormObject();
      return true;
    }
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
          <input id="name" type="text" ref={this.nameRef} placeholder={'Your name'} />
          <span>{this.state.nameError}</span>
          <input id="surname" type="text" ref={this.surnameRef} placeholder={'Your surname'} />
          <span>{this.state.surnameError}</span>
          <input id="title" type="text" ref={this.titleRef} placeholder={'Title of card'} />
          <label>Date of creation:</label>
          <input type="date" ref={this.dateRef} />
          <div className={cl.type_radio}>
            <label>select your role:</label>
            <input
              ref={this.radioRef}
              type="radio"
              id="tutor"
              name="role"
              value="tutor"
              defaultChecked={true}
            />
            <label htmlFor="tutor">Tutor</label>
            <input type="radio" id="student" name="role" value="student" />
            <label htmlFor="student">Student</label>
          </div>
          <br />
          <label htmlFor="cars">Category:</label>
          <select id="select" name="category" ref={this.categoryRef}>
            <option value="volvo" defaultChecked={true}>
              Volvo
            </option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <label htmlFor="file-upload" className={cl.customFileInput}>
            <i className="fa-solid fa-file-arrow-up"></i>
            <FontAwesomeIcon icon={faFileArrowUp} />
            <span> upload cover</span>
            <input
              id={'file-upload'}
              onChange={(event) => {
                this.onFileUpload(event);
              }}
              type="file"
            />
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
