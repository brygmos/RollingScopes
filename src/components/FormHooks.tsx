import React, { useState } from 'react';
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
  date: string;
  checkbox: boolean;
  select: string;
  file: FileList;
};

type Props = {
  formHandler: (card: CardType) => void;
  lastId: number;
};

function Form(props: Props): JSX.Element {
  const [fileUrl, setFileUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTextType, setModalTextType] = useState('neutral');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      checkbox: false,
    },
  });

  //TODO type
  function setFormObject(data: CardType, url: string) {
    const card: CardType = {
      id: props.lastId + 1,
      title: data.title,
      date: data.date,
      author: {
        firstname: data.name,
        lastname: data.surname,
      },
      role: data.role,
      category: data.select,
      image: url,
    };
    props.formHandler(card);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFileUrl(URL.createObjectURL(data.file[0]));
    setFormObject(data, URL.createObjectURL(data.file[0]));
    reset();
  };

  function validateDate(value: string) {
    const today = new Date().getTime();
    const userDate = new Date(value).getTime();
    if (Number.isNaN(userDate)) {
      return false;
    }
    if (today < userDate) return 'Date can not be in future';
    else return true;
  }

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
        <div className={cl.input__container}>
          <input
            type="text"
            id="name"
            placeholder={'your name'}
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
            type="text"
            id="surname"
            placeholder={'your surname'}
            {...register('surname', { required: true, minLength: 2 })}
          />
          <div className={cl.input__message}>
            {errors.surname && <span className={cl.field__error}>This field is required</span>}
          </div>
        </div>

        <div className={cl.input__container}>
          <input
            type="text"
            id="title"
            placeholder={'title'}
            {...register('title', { required: true })}
          />
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
          <input
            id="date"
            type="date"
            {...register('date', {
              required: 'This field reqqqquired',
              validate: (value) => {
                return validateDate(value);
              },
            })}
          />
          <div className={cl.input__message}>
            {errors.date && <span className={cl.field__error}>{errors.date.message}</span>}
          </div>
        </div>

        <div className={cl.input__container}>
          <select
            // name="select"
            id="select"
            {...register('select', { required: 'Select some..' })}
          >
            <option value="" defaultChecked={true}>
              Choose category:
            </option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <div className={cl.input__message}>
            {errors.select && <span className={cl.field__error}>{errors.select.message}</span>}
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
                type="file"
                {...register('file', { required: 'please choose a cover', minLength: 1 })}
              />
            </label>
          </div>
          <div className={cl.input__message}>
            {/*{errors.file && <span className={cl.field__error}>{errors.file.message}</span>}*/}
            {!watch('file') || watch('file').length === 0 ? (
              <span className={cl.field__error}>{errors.file && errors.file.message}</span>
            ) : (
              <span className={cl.fileName}>{watch('file')[0].name}</span>
            )}
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
              type={'checkbox'}
              {...register('checkbox', { required: 'you need to agree' })}
            />
          </label>
          <div className={cl.input__message}>
            {errors.checkbox && <span className={cl.field__error}>{errors.checkbox.message}</span>}
          </div>
        </div>

        <input type="submit" value={'Create card'} />
      </form>
    </div>
  );
}

export default Form;
