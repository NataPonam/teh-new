import './ModalUpdata.css';
import Select from 'react-select';
import api from '../../untils/api';
import { useState } from 'react';
import dangerGroup from '../../untils/dangerGroup';
import danger from '../../untils/danger';

function ModalUpdata({ active, setModal, modalChild }) {
  const [isValue, setValue] = useState({});
  const [isDependence, setDependence] = useState(null);
  console.log(isDependence);
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    if (modalChild === 'Группа опасности') {
      setValue({
        ...isValue,
        [name]: value,
      });
    } else {
      isValue['dependence'] = isDependence;
      setValue({
        ...isValue,
        [name]: value,
      });
    }
  };
  console.log(isValue);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (modalChild === 'Группа опасности') {
      api
        .createDangerGroups(isValue)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setValue({});
      document
        .querySelectorAll('.form__input')
        .forEach((item) => (item.value = ''));
    } else if (modalChild === 'Опасность') {
      api
        .createDangers(isValue)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const dengerGroup = (
    <form className='danger' onSubmit={handleSubmit}>
      <label className='lable'>
        Группа опасности
        {/* тут должнеы быть обычные инпуты
        <Select
          options={dangerGroup}
          className='react-select-container'
          classNamePrefix='react-select'
          name='label'
          onChange={handleChange}
        ></Select> */}
        <input
          className='form__input input'
          name='label'
          onChange={handleChange}
        ></input>
      </label>
      <label className='lable box'>
        id группы опасности
        <input
          className='form__input id'
          name='dangerID'
          onChange={handleChange}
        ></input>
      </label>
      <button className='btn send'>Отправить</button>
    </form>
  );

  const dangers = (
    <form className='danger' onSubmit={handleSubmit}>
      <label className='lable'>
        Зависимость от группы опасностей
        <Select
          options={dangerGroup}
          className='react-select-container'
          classNamePrefix='react-select'
          onChange={(v) => setDependence(v.label)}
        ></Select>
      </label>
      <label className='lable'>
        Опасности
        {/* тут тоже про инпут
        <Select
          className='react-select-container'
          classNamePrefix='react-select'
          onChange={handleChange}
          name='label'
        ></Select> */}
        <input
          className='form__input input'
          onChange={handleChange}
          name='label'
        ></input>
      </label>
      <label className='lable box'>
        id опасности
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <button className='btn send'>Отправить</button>
    </form>
  );

  const dangerEvt = (
    <form className='danger' onSubmit={handleSubmit}>
      <label className='lable'>
        Зависимость от опасностей
        <Select
          options={danger}
          className='react-select-container'
          classNamePrefix='react-select'
          onChange={(v) => setDependence(v.label)}
        ></Select>
      </label>
      <label className='lable'>
        Опасное событие
        <Select
          className='react-select-container'
          classNamePrefix='react-select'
          onChange={handleChange}
          name='label'
        ></Select>
        {/*  <input
          className='form__input input'
          onChange={handleChange}
          name='label'
  ></input>*/}
      </label>
      <label className='lable box'>
        id опасного события
        <input
          className='form__input id'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <button className='btn send'>Отправить</button>
    </form>
  );

  /* пример модального окна*/
  /* вынести в отдельный компонент */
  const newModal = (
    <div className='danger'>
      <h2 className='lable'>Группа опасности</h2>
      {
      dangerGroup.map((item) => (
        <div className='input-wrapper'>
          <h2 className='lable new'>ID</h2>
          <span className='form__input id-new'>{item.dangerID}</span>
          <h2 className='lable new'>Группа</h2>
          <span className='form__input group-new'>{item.label}</span>
          <button className='button button-delete'></button>
        </div>
      ))}
    </div>
  );

  const handleChild = () => {
    if (modalChild === 'Группа опасности') {
      return dengerGroup;
    } else if (modalChild === 'Опасность') {
      return dangers;
    } else if (modalChild === 'Опасное событие') {
      return dangerEvt;
    } else {
      return newModal;
    }
  };

  return (
    <div
      className={active ? 'modal__overlay' : 'modal__overlay-disabled'}
      onClick={() => setModal(false)}
    >
      <div className='modal__window' onClick={(evt) => evt.stopPropagation()}>
        <button className='btn_close' onClick={() => setModal(false)}></button>
        {handleChild()}
      </div>
    </div>
  );
}

export default ModalUpdata;
