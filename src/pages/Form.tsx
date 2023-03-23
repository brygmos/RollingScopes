import React from 'react';
import cl from './styles/Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CardType } from '../components/CardItem';
import MyModal from '../components/MyModal';

type State = {
  formIsValid: boolean;
  nameError: string;
  surnameError: string;
  titleError: string;
  checkAgreementError: string;
  nameVisited: boolean;
  surnameVisited: boolean;
  fileUrl: string;
  [key: string]: string | boolean;
  modalVisibility: boolean;
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
  checkAgreementRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      formIsValid: false,
      nameVisited: false,
      nameError: '',
      surnameError: '',
      titleError: '',
      checkAgreementError: '',
      surnameVisited: false,
      fileUrl: '',
      modalVisibility: false,
    };
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.radioRef = React.createRef();
    this.titleRef = React.createRef();
    this.categoryRef = React.createRef();
    this.checkAgreementRef = React.createRef();
    this.formRef = React.createRef();
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
      category: this.categoryRef.current?.value ? this.categoryRef.current.value : 'select',
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
    this.validateForm();
  }

  validateForm(): void {
    const validate = new Promise((resolve, reject) => {
      this.setFormStatus(true);
      this.validateSomeNameField('title');
      this.validateSomeNameField('name');
      this.validateSomeNameField('surname');
      this.validateDate();
      this.validateCheckAgreement();
      resolve(null);
    });

    validate.then(() => {
      if (!this.getFormStatus()) {
        this.setFormStatus(false);
        alert('Form is invalid!');
      } else {
        this.setFormStatus(true);
        this.setFormObject();
        // this.formRef.current?.reset();
        this.setModal(true);
      }
    });
  }

  validateSomeNameField(refPrefix = 'name') {
    const refName = refPrefix + 'Ref';
    const errorField = refPrefix + 'Error';
    const regex = new RegExp(/[A-Z]|[А-я][a-z]|[а-я]*/g);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const value = this[refName as keyof React.LegacyRef<HTMLInputElement>]?.current?.value || '';
    if (value.length <= 1) {
      this.setFormStatus(false);
      this.setState({ [`${errorField}`]: 'Field is required' });
      return;
    } else if (!regex.test(value)) {
      this.setFormStatus(false);
      this.setState({ [`${errorField}`]: 'First letter should be capital' });
      return;
    } else {
      this.setState({ [`${errorField}`]: '' });
    }
  }

  validateDate() {
    const today = new Date().getTime();
    const userDate = new Date(this.dateRef.current?.value as string).getTime();
    if (today < userDate) {
      this.setFormStatus(false);
      this.setState({ dateError: "Date can't be in future" });
      return;
    }
  }
  validateCheckAgreement() {
    if (this.checkAgreementRef?.current?.checked == false) {
      this.setFormStatus(false);
      this.setState({ checkAgreementError: 'You need to agree' });
      return;
    }
  }

  handleBlur(e: React.BaseSyntheticEvent) {
    const fieldName = e.target.id;
    this.validateSomeNameField(fieldName);
    this.validateDate();
  }

  setModal(bool: boolean) {
    this.setState({ modalVisibility: bool });
  }

  render() {
    return (
      <div className={'container'}>
        {this.state.modalVisibility && (
          <MyModal
            visible={this.state.modalVisibility}
            setModal={() => {
              this.setModal(false);
            }}
          >
            <div>
              <h1 className={'successMessage'}>Successfully added</h1>
            </div>
          </MyModal>
        )}
        <form
          ref={this.formRef}
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
          <span className={cl.field__error}>{this.state.nameError}</span>
          <input id="surname" type="text" ref={this.surnameRef} placeholder={'Your surname'} />
          <span className={cl.field__error}>{this.state.surnameError}</span>
          <input id="title" type="text" ref={this.titleRef} placeholder={'Title of card'} />
          <span className={cl.field__error}>{this.state.titleError}</span>
          <label>Date of creation:</label>
          <input type="date" ref={this.dateRef} />
          <span className={cl.field__error}>{this.state.dateError}</span>
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
            <input id={'checkAgreement'} type="checkbox" ref={this.checkAgreementRef} />
          </label>
          <span className={cl.field__error}>{this.state.checkAgreementError}</span>
          <input type="submit" value={'Create card'} />
        </form>
      </div>
    );
  }
}

export default Form;
