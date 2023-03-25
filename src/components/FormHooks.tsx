import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CardType } from './CardItem';
import MyModal from './MyModal';
import cl from './styles/Form.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  surname: string;
  title: string;
  role: string;
};

type State = {
  formIsValid: boolean;
  nameError: string;
  surnameError: string;
  titleError: string;
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

function Form(props: Props): JSX.Element {
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameVisited, setNameVisited] = useState(false);
  const [surnameVisited, setSurnameVisited] = useState(false);
  const [nameError, setNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [checkAgreementError, setCheckAgreementError] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTextType, setModalTextType] = useState('neutral');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={'container'}>
      {modalVisibility && (
        <MyModal
          visible={modalVisibility}
          modalText={modalText}
          messageType={modalTextType}
          setModalVisibility={() => {
            setModalVisibility(false);
          }}
        ></MyModal>
      )}
      <form className={cl.form__field} onSubmit={handleSubmit(onSubmit)}>
        <h1>Form</h1>
        {/*+++++++++++++++++++=========================================================================*/}
        {/*+++++++++++++++++++=========================================================================*/}
        {/*+++++++++++++++++++=========================================================================*/}
        {/*+++++++++++++++++++=========================================================================*/}
        {/*+++++++++++++++++++=========================================================================*/}
        <div className={cl.input__container}>
          <input
            id="name"
            placeholder={'your name'}
            // defaultValue="name"
            {...register('name', { required: true, minLength: 2 })}
          />
          <div className={cl.input__message}>
            {errors.name && (
              <span className={cl.field__error} data-testid={'nameError'}>
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className={cl.input__container}>
          <input
            id="surname"
            placeholder={'your surname'}
            {...register('surname', { required: true, minLength: 2 })}
          />
          <div className={cl.input__message}>
            {errors.surname && <span className={cl.field__error}>This field is required</span>}
          </div>
        </div>

        <div className={cl.input__container}>
          <input id="title" placeholder={'title'} {...register('title', { required: true })} />
          <div className={cl.input__message}>
            {errors.title && <span className={cl.field__error}>This field is required</span>}
          </div>
        </div>

        <div className={cl.input__container}>
          <div className={cl.type_radio}>
            <label>select your role:</label>
            <div>
              <input
                type="radio"
                id="tutor"
                value="tutor"
                {...register('role', { required: true })}
              />
              <label htmlFor="tutor">Tutor</label>
              <input
                type="radio"
                id="student"
                value="student"
                {...register('role', { required: true })}
              />
              <label htmlFor="student">Student</label>
            </div>
          </div>
          <div className={cl.input__message}>
            {errors.role && <span className={cl.field__error}>This field is required</span>}
          </div>
        </div>

        <div className={cl.input__container}>
          <input id="date" type="date" />
          <div className={cl.input__message}>
            <p className={cl.field__error}>{dateError}</p>
          </div>
        </div>

        <div className={cl.input__container}>
          <div className={cl.select__label}>
            <label htmlFor="cars">Category: </label>
          </div>
          <select id="select" name="category">
            <option value="volvo" defaultChecked={true}>
              Volvo
            </option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <div className={cl.input__message}></div>
        </div>

        <div className={cl.input__container}>
          <div className={cl.customFileInput__container}>
            <label htmlFor="file-upload">
              <div className={cl.customFileInput}>
                <FontAwesomeIcon icon={faFileArrowUp} />
                <span> upload cover</span>
              </div>
              <input id={'file-upload'} onChange={(event) => {}} type="file" />
            </label>
          </div>

          <div className={cl.input__message}>
            <span className={cl.fileName}>{fileName}</span>
          </div>
        </div>

        <div className={cl.input__container}>
          <label htmlFor="checkAgreement">
            <div>
              <span>Agree to data processing: </span>
            </div>
            <input data-testid={'check'} id={'checkAgreement'} type="checkbox" />
          </label>
          <div className={cl.input__message}>
            <span className={cl.field__error}>{checkAgreementError}</span>
          </div>
        </div>

        <input type="submit" value={'Create card'} />
      </form>
    </div>
  );
}

export default Form;
