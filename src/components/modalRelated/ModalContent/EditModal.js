import React, { Component } from 'react';

// import { Button } from 'synapsefi-chatbot-ui';
// import { updateModal, redoSteps, updateRenderedSteps, updateCurrentStep } from '../../actions/stepActions';
// import { updateCategories, disableButton } from '../../actions/servicingActions';
// import { checkListNum } from '../../actions/bankLoginActions';
// import { stopQueue } from '../../utils/servicingCallbacks';
// import utils from '../../utils/utils';
import { Button } from '../../../index';

import ModalObj from '../utili/ModalCons';

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  closeModal = () => {
    const { props } = this;
    document.getElementsByClassName('modalInner')[0].style.animation = 'moveDown 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modalInner')[0].style.WebkitAnimation = 'moveDown 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modal')[0].style.animation = 'fadeOut 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    document.getElementsByClassName('modal')[0].style.WebkitAnimation = 'fadeOut 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
    setTimeout(() => {
      props.updateModal('isModal', false);
    }, 200);
  }

  undoModal = () => {
    const { props } = this;
    if (props.maxLimit) { // if in maxlimit mode, shold clear the num of list
      props.checkListNum(0);
    }
    props.disableButton(true);
    props.redoSteps();
    props.updateKey();
  }

  exitModal = () => {
    const { props, props: { resetRedux } } = this;
    // sets to initial redux state; calls fetchUserInfo and fetchClientInfo
    props.updateModal('isModal', false);
    // utils.dataToCallback('exit');
    props.updateKey();
    resetRedux();
  }

  // startOverModal = () => {
  //   const { props } = this;
  //   const { renderedSteps, firstStepIndex } = this.props;
  //   const firstStep = renderedSteps.splice(0, firstStepIndex + 1);
  //   // set renderedSteps and currentStep to the first step
  //   props.updateRenderedSteps(firstStep);
  //   props.updateCurrentStep(firstStep[firstStepIndex]);
  //   // close the modal
  // }

  handleModal = (type) => {
    const { props, props: { selectedCategories, currentStep } } = this;
    if (type === 'EDIT') {
      this.undoModal();
      // reset the Categories
      selectedCategories.pop();
      props.updateCategories(selectedCategories);
      if (currentStep.startQueue) stopQueue();
    } else if (type === 'EXIT' || type === 'EXIT_LAST_STEP') {
      this.exitModal();
      props.updateModal('isExit', true);
      setTimeout(() => { props.updateModal('isExit', false); }, 2000);
    // } else if (type === 'STARTOVER') {
    //   this.startOverModal();
    }
    this.closeModal();
  }

  displayFullButton = () => {
    const { modalType, clientColor, terminate } = this.props;
    const btn2Txt = terminate ? 'OK' : 'No';
    return (
      <div className="modal-button-container">
        {/* {terminate ? null : <FullButton idx="exit-modal-two" handleButtonSubmit={() => this.handleModal(modalType)} btnTxt="Yes" buttonColor={clientColor} style={{ width: 'calc(50% - 0.5px)' }} />}
        <FullButton idx="exit-modal-two" handleButtonSubmit={this.closeModal} btnTxt={btn2Txt} buttonColor={clientColor} style={{ width: terminate ? '100%' : 'calc(50% - 0.5px)' }} /> */}
        {terminate ? null : <Button fullWidth id="exit-modal-two" onClick={() => this.handleModal(modalType)} buttonColor={clientColor} style={{ width: 'calc(50% - 0.5px)' }}> Yes </Button>}
        <Button fullWidth id="exit-modal-two" onClick={this.closeModal} buttonColor={clientColor} style={{ width: terminate ? '100%' : 'calc(50% - 0.5px)' }}> {btn2Txt} </Button>
      </div>
    );
  }

  displayCustomButton = () => {
    const { modalType, clientColor, terminate } = this.props;
    let btn2Txt = modalType === 'EXIT' ? 'Cancel' : 'No';
    if (terminate) btn2Txt = 'OK';
    return (
      <div className="modal-button-container rounded" style={{ margin: '0 1rem', position: 'unset', width: 'unset' }}>
        {/* {terminate ? null : <RoundedButton idx="exit-modal-one" handleButtonSubmit={() => this.handleModal(modalType)} btnTxt={modalType === 'EXIT' ? 'Exit' : 'Yes'} buttonColor={clientColor} style={{ width: 'calc(50% - 3px)' }} />}
        <RoundedButton idx="exit-modal-one" handleButtonSubmit={this.closeModal} btnTxt={btn2Txt} buttonColor={clientColor} style={{ width: terminate ? '100%' : 'calc(50% - 3px)' }} /> */}
        {terminate ? null : <Button fullWidth={false} id="exit-modal-one" onClick={() => this.handleModal(modalType)} buttonColor={clientColor} style={{ width: 'calc(50% - 3px)' }}> {modalType === 'EXIT' ? 'Exit' : 'Yes'} </Button>}
        <Button fullWidth={false} id="exit-modal-one" onClick={this.closeModal} buttonColor={clientColor} style={{ width: terminate ? '100%' : 'calc(50% - 3px)' }}> {btn2Txt} </Button>
      </div>
    );
  }

  render() {
    const { modalType, clientColor, fullWidth } = this.props;
    return (
      <div>
        <div className="edit-container">
          <h3 className="edit-modal-header" style={{ lineHeight: modalType === 'EXIT' ? '1' : '1.3', marginBottom: modalType === 'EXIT' ? '0' : '8px' }}>{ModalObj[modalType] ? ModalObj[modalType].header : null}</h3>
          {modalType === 'EXIT' || modalType === 'EXIT_LAST_STEP' ? <p className="edit-modal-content">{ModalObj[modalType].content}</p> : null}
        </div>
        {
          fullWidth
            ? this.displayCustomButton()
            : this.displayFullButton()
        }
      </div>
    );
  }
}

export default EditModal;