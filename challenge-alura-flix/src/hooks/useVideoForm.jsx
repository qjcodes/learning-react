import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext"; 

const useVideoForm = (selectedVideo, closeModal = () => {}) => {
  const { state } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    title: false,
    category: false,
    image: false,
    link: false,
    description: false,
  });

  useEffect(() => {
    if (!!selectedVideo) {
      setTitle(selectedVideo.title || "");
      setCategory(
        state.categories.find((cat) => cat.id === selectedVideo.category)
          ?.name || ""
      );
      setImage(selectedVideo.image || "");
      setLink(selectedVideo.link || "");
      setDescription(selectedVideo.description || "");
    }
  }, [selectedVideo, state.categories]);

  const isFieldRequired = () => ({
    title: !title,
    category: !category,
    image: !image,
    link: !link,
    description: !description,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = isFieldRequired();

    if (Object.values(requiredFields).some((field) => field)) {
      setErrors(requiredFields);
      console.log("All fields are required", requiredFields);
      return;
    }

    const data = {
      title,
      category: state.categories.find((item) => item.name === category)?.id,
      image,
      link,
      description,
    };

    console.log(data);

    closeModal();
  };

  const clearForm = () => {
    setTitle("");
    setCategory("");
    setImage("");
    setLink("");
    setDescription("");
    setErrors({
      title: false,
      category: false,
      image: false,
      link: false,
      description: false,
    });
  };

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
    setErrors((prev) => ({ ...prev, [event.target.name]: false }));
  };

  return {
    title,
    category,
    image,
    link,
    description,
    setTitle: handleChange(setTitle),
    setCategory: handleChange(setCategory),
    setImage: handleChange(setImage),
    setLink: handleChange(setLink),
    setDescription: handleChange(setDescription),
    handleSubmit,
    clearForm,
    errors,
  };
};

export default useVideoForm;
