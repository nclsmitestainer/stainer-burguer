const TestModal = () => {
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-11/12 max-h-11/12 bg-white">
          <form method="dialog" className="flex justify-between">
            {/* if there is a button in form, it will close the modal */}
            <h1>Carrinho</h1>
            {/* <button className="btn btn-sm btn-circle btn-ghost">✕</button> */}
            <button className="inline-block mt-4 text-black bg-white mr-3 relative shadow-lg hover:bg-primary active:bg-primary !py-2 !px-4 !rounded-2xl !text-lg">
              Fechar
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default">close</button>
        </form>
      </dialog>
    </>
  );
};

export default TestModal;
