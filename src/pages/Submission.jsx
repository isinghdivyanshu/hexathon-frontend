import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "../axios";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#34101CCC",
    width: "45%",
    height: "auto",
    border: "3px solid #58373D",
  },
  overlay: {
    backgroundColor: "#250A19B2",
  },
};

export default function Submission() {
  const [docUrlError, setDocUrlError] = useState(" "); // Validation error for documentation URL
  const [figmaUrlError, setFigmaUrlError] = useState(" "); // Validation error for Figma URL
  const [DocURL, setDocURL] = useState("");
  const [FigmaURL, setFigmaURL] = useState("");
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const validateInput = (inputName, inputValue) => {
    if (inputName === "documentation") {
      // Validate the documentation URL
      if (!/^https?:\/\/\S+$/.test(inputValue)) {
        setDocUrlError("Invalid URL format");
      } else {
        setDocUrlError(""); // Clear the error if valid
      }
    } else if (inputName === "figma") {
      // Validate the Figma URL
      if (!/^https?:\/\/\S+$/.test(inputValue)) {
        setFigmaUrlError("Invalid URL format");
      } else {
        setFigmaUrlError(""); // Clear the error if valid
      }
    }
  };

  useEffect(() => {
    validateInput("documentation", DocURL);
    validateInput("figma", FigmaURL);
  }, []);

  const Submit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call if there are no validation errors
      const response = await axios.post(
        "/api/v1/submissions/submit",
        {
          DocURL: DocURL,
          FigmaURL: FigmaURL,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Submission Successful");
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    }
    closeCheckoutModal();
  };

  // Function to open the modal
  const openCheckoutModal = () => {
    validateInput("documentation", DocURL);
    validateInput("figma", FigmaURL);

    // Check for validation errors
    if (docUrlError || figmaUrlError) {
      return;
    }
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  return (
    <Layout title={"Submissions"}>
      <h1 className="font-DelaGothicOne text-heading text-xl my-4">
        You&apos;re almost there!
      </h1>
      <form>
        <div className="my-10 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="documentation"
          >
            Documentation
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;"
            type="url"
            id="documentation"
            placeholder="Documentation link here"
            required
            value={DocURL}
            onChange={(e) => {
              setDocURL(e.currentTarget.value);
              validateInput("documentation", e.currentTarget.value);
            }}
          />
          {docUrlError && (
            <p className="text-red-600 text-xs font-SpaceGrotesk my-2">
              {docUrlError}
            </p>
          )}
        </div>
        <div className="my-4 font-SpaceGrotesk">
          <label
            className="block text-content text-sm font-semibold mb-2"
            htmlFor="figma"
          >
            Figma Link/Presentation Link
          </label>
          <input
            className="w-full px-3 py-2 bg-[#411623] border-2 rounded-md border-[#533C40] focus:outline-none focus:border-white focus:border filter;"
            type="url"
            id="figma"
            placeholder="Figma link here"
            required
            value={FigmaURL}
            onChange={(e) => {
              setFigmaURL(e.currentTarget.value);
              validateInput("figma", e.currentTarget.value);
            }}
          />
          {figmaUrlError && (
            <p className="text-red-600 text-xs font-SpaceGrotesk my-2">
              {figmaUrlError}
            </p>
          )}
        </div>
        <div className="flex w-full justify-end my-10">
          <button
            onClick={openCheckoutModal}
            type="button"
            className="bg-red-600 hover:bg-red-700 px-8 py-1 text-sm rounded-sm font-DelaGothicOne"
          >
            Submit
          </button>
        </div>
      </form>

      <Modal
        isOpen={isCheckoutModalOpen}
        onRequestClose={closeCheckoutModal}
        style={customStyles}
        contentLabel="Confirmation Modal"
      >
        <div className="flex flex-col justify-between">
          <h1 className="my-3 text-xl">Ready to Submit?</h1>
          <p className="mb-4 text-sm font-SpaceGrotesk text-info">
            Once done submissions can not be edited. So please be sure before
            submitting.
          </p>
          <div></div>
          <div className="flex w-full justify-end gap-4">
            <button
              onClick={closeCheckoutModal}
              className="border-2 border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 w-[20%] px-3 py-1 text-xs rounded-sm font-DelaGothicOne"
            >
              Cancel
            </button>
            <button
              className=" bg-red-600 hover:bg-red-700 w-[20%] px-3 py-1 text-xs text-white rounded-sm font-DelaGothicOne"
              onClick={Submit}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}
