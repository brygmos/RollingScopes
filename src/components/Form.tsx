import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CardType } from './CardItem';
import MyModal from './MyModal';
import cl from './styles/Form.module.css';

type State = {
  formIsValid: boolean;
  nameError: string;
  surnameError: string;
  titleError: string;
  radioError: string;
  selectError: string;
  fileError: string;
  checkAgreementError: string;
  nameVisited: boolean;
  surnameVisited: boolean;
  fileUrl: string;
  fileName: string;
  modalVisibility: boolean;
  modalText: string;
  modalTextType: string;
  [key: string]: string | boolean;
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
  radioRef2: React.RefObject<HTMLInputElement>;
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
      radioError: '',
      selectError: '',
      fileError: '',
      checkAgreementError: '',
      surnameVisited: false,
      fileUrl: '',
      fileName: '',
      modalVisibility: false,
      modalText: '',
      modalTextType: 'neutral',
    };
    this.nameRef = React.createRef();
    this.surnameRef = React.createRef();
    this.dateRef = React.createRef();
    this.radioRef = React.createRef();
    this.radioRef2 = React.createRef();
    this.titleRef = React.createRef();
    this.categoryRef = React.createRef();
    this.checkAgreementRef = React.createRef();
    this.formRef = React.createRef();
  }

  onFileUpload = (event: React.BaseSyntheticEvent) => {
    this.setState({ fileUrl: URL.createObjectURL(event.target.files[0]) });
    this.setState({ fileName: event.target.files[0].name });
  };
  removeFile = () => {
    this.setState({ fileUrl: '' });
    this.setState({ fileName: '' });
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
    const fields = [
      'name',
      'surname',
      'title',
      'radio',
      'date',
      'select',
      'file',
      'checkAgreement',
    ];
    const validate = new Promise((resolve, reject) => {
      this.setFormStatus(true);

      fields.map((field) => {
        this.validateSomeNameField(field);
      });

      resolve(null);
      reject(null);
    });

    validate.then(() => {
      if (!this.getFormStatus()) {
        this.setFormStatus(false);
        this.setModal(true, 'Invalid form info', 'warning');
      } else {
        this.setFormStatus(true);
        this.setFormObject();
        this.formRef.current?.reset();
        this.removeFile();
        this.setModal(true, 'Card was successfully added', 'success');
      }
    });
  }

  validateSomeNameField(refPrefix: string) {
    switch (refPrefix) {
      case 'name':
      case 'surname':
      case 'title':
        this.validateText(refPrefix);
        break;
      case 'radio':
        this.validateRadio();
        break;
      case 'date':
        this.validateDate();
        break;
      case 'select':
        this.validateSelect();
        break;
      case 'file':
        this.validateFile();
        break;
      case 'checkAgreement':
        this.validateCheckAgreement();
        break;
    }
  }
  validateText(refPrefix: string) {
    const refName = refPrefix + 'Ref';
    const errorField = refPrefix + 'Error';
    const regex = new RegExp(/([A-Z]|[А-Я])([a-z]|[а-я]*)/g);
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
    if (Number.isNaN(userDate)) {
      this.setFormStatus(false);
      this.setState({ dateError: 'Date must be chosen' });
      return;
    }
    if (today < userDate) {
      this.setFormStatus(false);
      this.setState({ dateError: "Date can't be in future" });
      return;
    } else this.setState({ dateError: '' });
  }
  validateCheckAgreement() {
    if (this.checkAgreementRef?.current?.checked == false) {
      this.setFormStatus(false);
      this.setState({ checkAgreementError: 'You need to agree' });
      return;
    } else this.setState({ checkAgreementError: '' });
  }
  validateRadio() {
    if (this.radioRef?.current?.checked == false && this.radioRef2?.current?.checked == false) {
      this.setFormStatus(false);
      this.setState({ radioError: 'must be chosen' });
      return;
    } else this.setState({ radioError: '' });
  }
  validateSelect() {
    if (this.categoryRef.current?.value == 'label') {
      this.setFormStatus(false);
      this.setState({ selectError: 'must be chosen' });
      return;
    } else this.setState({ selectError: '' });
  }
  validateFile() {
    if (this.state.fileName == '') {
      this.setFormStatus(false);
      this.setState({ fileError: 'please select cover' });
      return;
    } else this.setState({ fileError: '' });
  }

  handleBlur(e: React.BaseSyntheticEvent) {
    let fieldName = e.target.id;
    fieldName == 'tutor' || fieldName == 'student' ? (fieldName = 'radio') : null;
    this.validateSomeNameField(fieldName);
  }

  setModal(visible: boolean, text: string, type: string) {
    this.setModalVisibility(visible);
    this.setModalText(text);
    this.setModalTextType(type);
  }
  setModalVisibility(bool: boolean) {
    this.setState({ modalVisibility: bool });
  }
  setModalText(string: string) {
    this.setState({ modalText: string });
  }
  setModalTextType(string: string) {
    this.setState({ modalTextType: string });
  }

  render() {
    return (
      <div className={'container'}>
        {this.state.modalVisibility && (
          <MyModal
            visible={this.state.modalVisibility}
            modalText={this.state.modalText}
            messageType={this.state.modalTextType}
            setModalVisibility={() => {
              this.setModalVisibility(false);
            }}
          ></MyModal>
        )}
        <form
          className={cl.form__field}
          ref={this.formRef}
          onSubmit={(event) => {
            this.submitForm(event);
          }}
          onBlur={(event) => {
            this.handleBlur(event);
          }}
        >
          <h1>Form</h1>
          <div className={cl.input__container}>
            <input id="name" type="text" ref={this.nameRef} placeholder={'Your name'} />
            <div className={cl.input__message}>
              <span data-testid={'nameError'} className={cl.field__error}>
                {this.state.nameError}
              </span>
            </div>
          </div>

          <div className={cl.input__container}>
            <input id="surname" type="text" ref={this.surnameRef} placeholder={'Your surname'} />
            <div className={cl.input__message}>
              <p data-testid={'titleError'} className={cl.field__error}>
                {this.state.surnameError}
              </p>
            </div>
          </div>

          <div className={cl.input__container}>
            <input id="title" type="text" ref={this.titleRef} placeholder={'Title'} />
            <div className={cl.input__message}>
              <p className={cl.field__error}>{this.state.titleError}</p>
            </div>
          </div>

          <div className={cl.input__container}>
            <div className={cl.type_radio}>
              <label>select your role:</label>
              <div>
                <input ref={this.radioRef} type="radio" id="tutor" name="role" value="tutor" />
                <label htmlFor="tutor">Tutor</label>
                <input ref={this.radioRef2} type="radio" id="student" name="role" value="student" />
                <label htmlFor="student">Student</label>
              </div>
            </div>
            <div className={cl.input__message}>
              <p className={cl.field__error}>{this.state.radioError}</p>
            </div>
          </div>

          <div className={cl.input__container}>
            <div className={cl.select__label}>
              <label htmlFor="date">Date of creation: </label>
            </div>
            <input id="date" type="date" ref={this.dateRef} />
            <div className={cl.input__message}>
              <p className={cl.field__error}>{this.state.dateError}</p>
            </div>
          </div>

          <div className={cl.input__container}>
            <div className={cl.select__label}>
              <label htmlFor="cars">Category: </label>
            </div>
            <select id="select" name="category" ref={this.categoryRef}>
              <option value="label" defaultChecked={true}>
                Choose category...
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <div className={cl.input__message}>
              <p className={cl.field__error}>{this.state.selectError}</p>
            </div>
          </div>

          <div className={cl.input__container}>
            <div className={cl.customFileInput__container}>
              <label htmlFor="file-upload">
                <div className={cl.customFileInput}>
                  <FontAwesomeIcon icon={faFileArrowUp} />
                  <span> upload cover</span>
                </div>
                <input
                  id={'file-upload'}
                  onChange={(event) => {
                    this.onFileUpload(event);
                  }}
                  type="file"
                />
              </label>
            </div>

            <div className={cl.input__message}>
              <span className={cl.fileName}>{this.state.fileName}</span>
              <p className={cl.field__error}>{this.state.fileError}</p>
            </div>
          </div>

          <div className={cl.input__container}>
            <label htmlFor="checkAgreement">
              <div>
                <span>Agree to data processing: </span>
              </div>
              <input
                data-testid={'check'}
                id={'checkAgreement'}
                type="checkbox"
                ref={this.checkAgreementRef}
              />
            </label>
            <div className={cl.input__message}>
              <span className={cl.field__error}>{this.state.checkAgreementError}</span>
            </div>
          </div>

          <input type="submit" value={'Create card'} />
        </form>
      </div>
    );
  }
}

export default Form;
