import React, { useState } from "react";
import Modal from "./components/Modal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [title, setTitle] = useState("Modal Dialog");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Frontend Challenge: Modal Dialog
      </h1>
      <p className="text-lg mb-8 max-w-xl">
        Build a reusable modal dialog component that can be opened and closed,
        with customizable title and contents. The modal dialog should:
        <ul className="list-disc list-inside text-left mt-4">
          <li>Contain a title and any body content.</li>
          <li>Be centered horizontally and vertically.</li>
          <li>
            Include a close button and a semi-transparent background overlay.
          </li>
          <li>Allow closing by clicking outside or pressing the Escape key.</li>
        </ul>
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title}>
        <div>
          <p className="text-lg text-gray-700 mb-4">
            Ayrton Senna da Silva (21 March 1960 - 1 May 1994) was a Brazilian
            racing driver, who competed in Formula One from 1984 to 1994. Senna
            won three Formula One World Drivers' Championship titles with
            McLaren, and — at the time of his death — held the record for most
            pole positions (65). He won 41 Grands Prix across 11 seasons, and is
            universally recognized as one of the best F1 drivers of all time.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
