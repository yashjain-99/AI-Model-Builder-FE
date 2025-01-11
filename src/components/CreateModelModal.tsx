import { useCreateModelModalStateContext } from "@/context/CreateModelModalStateContextProvider";
import { X } from "lucide-react";
import Modal from "react-modal";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface FormData {
  modelName: string;
  modelType: string;
  llm: string;
  modelDescription: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    padding: "0",
    paddingTop: "1rem",
  },
  overlay: {
    backgroundColor: "#32323270",
    zIndex: "40",
  },
};

Modal.setAppElement("#root");

const CreateModelModal = () => {
  const { isModalOpen, setIsModalOpen } = useCreateModelModalStateContext();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      modelName: "",
      modelType: "",
      llm: "neural",
      modelDescription: "",
    },
  });

  const closeModal = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors before submitting.");
    } else {
      console.log("Form Data Submitted:", data);
      toast.success("Model successfully created!");
      closeModal();
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div className="flex flex-col gap-4">
          <div className="border-b-2">
            <div className="flex justify-between items-center pt-2 pb-6 px-6">
              <span className="font-medium text-lg">Create New Modal</span>
              <X
                onClick={closeModal}
                className="cursor-pointer hover:scale-105 hover:font-extrabold"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="modelName">Model Name</Label>
              <Controller
                name="modelName"
                control={control}
                rules={{ required: "Model name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="modelName"
                    placeholder="Enter Modal Name"
                  />
                )}
              />
              {errors.modelName && (
                <span className="text-red-500 text-sm">
                  {errors.modelName.message}
                </span>
              )}
            </div>
            <div>
              <Label>Model Type</Label>
              <Controller
                name="modelType"
                control={control}
                rules={{ required: "Model type is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="modelA">Model A</SelectItem>
                        <SelectItem value="modelB">Model B</SelectItem>
                        <SelectItem value="modelC">Model C</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.modelType && (
                <span className="text-red-500 text-sm">
                  {errors.modelType.message}
                </span>
              )}
            </div>
            <div>
              <Label>LLM</Label>
              <Controller
                name="llm"
                control={control}
                rules={{ required: "LLM is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="neural">
                          Neural﹙recommended﹚
                        </SelectItem>
                        <SelectItem value="LLMB">LLM B</SelectItem>
                        <SelectItem value="LLC">LLM C</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.llm && (
                <span className="text-red-500 text-sm">
                  {errors.llm.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="modelDescription">Model Description</Label>
              <Controller
                name="modelDescription"
                control={control}
                rules={{ required: "Model description is required" }}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Enter Model Description."
                    id="modelDescription"
                  />
                )}
              />
              {errors.modelDescription && (
                <span className="text-red-500 text-sm">
                  {errors.modelDescription.message}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center pt-2 pb-8">
              <Button
                type="button"
                onClick={closeModal}
                className="w-[calc(50%-0.5rem)] rounded-lg bg-violet-200 text-indigo-500 hover:bg-violet-300 hover:text-white hover:border-2 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 text-sm leading-5 font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-[calc(50%-0.5rem)] rounded-lg bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 text-sm leading-5 font-semibold text-white"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateModelModal;
