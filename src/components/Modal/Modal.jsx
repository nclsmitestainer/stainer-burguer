import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

const TestModal = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-11/12 max-h-11/12 bg-white fixed p-12 overflow-x-hidden overflow-y-auto flex flex-col">
          <ModalHeader />
          <ModalContent />
          <ModalFooter />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default">close</button>
        </form>
      </dialog>
    </>
  );
};

export default TestModal;
