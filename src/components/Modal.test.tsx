import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

describe("Modal Component", () => {
  let onClose: jest.Mock;

  beforeEach(() => {
    onClose = jest.fn();
  });

  test("renders the modal with title and content when open", () => {
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>This is the body content of the modal.</p>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(
      screen.getByText("This is the body content of the modal.")
    ).toBeInTheDocument();
  });

  test("does not render the modal when not open", () => {
    render(
      <Modal isOpen={false} onClose={onClose} title="Test Modal">
        <p>This is the body content of the modal.</p>
      </Modal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  test("closes modal when close button is clicked", () => {
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>This is the body content of the modal.</p>
      </Modal>
    );

    fireEvent.click(screen.getByLabelText("Close modal"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("closes modal when Escape key is pressed", () => {
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>This is the body content of the modal.</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("does not close modal when clicking inside the content", () => {
    render(
      <Modal isOpen={true} onClose={onClose} title="Test Modal">
        <p>This is the body content of the modal.</p>
      </Modal>
    );

    fireEvent.click(screen.getByTestId("modal-content"));
    expect(onClose).not.toHaveBeenCalled();
  });
});
